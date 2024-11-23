package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "hdoa-command-center/testutil/keeper"
	"hdoa-command-center/testutil/nullify"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestCommerceQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCommerce(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetCommerceRequest
		response *types.QueryGetCommerceResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetCommerceRequest{Id: msgs[0].Id},
			response: &types.QueryGetCommerceResponse{Commerce: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetCommerceRequest{Id: msgs[1].Id},
			response: &types.QueryGetCommerceResponse{Commerce: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetCommerceRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Commerce(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestCommerceQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCommerce(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCommerceRequest {
		return &types.QueryAllCommerceRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CommerceAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Commerce), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Commerce),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CommerceAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Commerce), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Commerce),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CommerceAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Commerce),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CommerceAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
