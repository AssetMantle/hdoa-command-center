package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestFactoryMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateFactory(ctx, &types.MsgCreateFactory{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestFactoryMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateFactory
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateFactory{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateFactory{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateFactory{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateFactory(ctx, &types.MsgCreateFactory{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateFactory(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestFactoryMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteFactory
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteFactory{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteFactory{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteFactory{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateFactory(ctx, &types.MsgCreateFactory{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteFactory(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
