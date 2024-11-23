package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestComplianceMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCompliance(ctx, &types.MsgCreateCompliance{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestComplianceMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateCompliance
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCompliance{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCompliance{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCompliance{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCompliance(ctx, &types.MsgCreateCompliance{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCompliance(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestComplianceMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteCompliance
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCompliance{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCompliance{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCompliance{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCompliance(ctx, &types.MsgCreateCompliance{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCompliance(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
