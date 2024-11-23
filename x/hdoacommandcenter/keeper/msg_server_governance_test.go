package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestGovernanceMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateGovernance(ctx, &types.MsgCreateGovernance{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestGovernanceMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateGovernance
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateGovernance{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateGovernance{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateGovernance{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateGovernance(ctx, &types.MsgCreateGovernance{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateGovernance(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestGovernanceMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteGovernance
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteGovernance{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteGovernance{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteGovernance{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateGovernance(ctx, &types.MsgCreateGovernance{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteGovernance(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
