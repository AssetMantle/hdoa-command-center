package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestCommerceMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCommerce(ctx, &types.MsgCreateCommerce{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCommerceMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateCommerce
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCommerce{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCommerce{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCommerce{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCommerce(ctx, &types.MsgCreateCommerce{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCommerce(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCommerceMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteCommerce
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCommerce{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCommerce{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCommerce{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCommerce(ctx, &types.MsgCreateCommerce{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCommerce(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
