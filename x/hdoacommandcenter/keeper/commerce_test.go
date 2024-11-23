package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "hdoa-command-center/testutil/keeper"
	"hdoa-command-center/testutil/nullify"
	"hdoa-command-center/x/hdoacommandcenter/keeper"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func createNCommerce(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Commerce {
	items := make([]types.Commerce, n)
	for i := range items {
		items[i].Id = keeper.AppendCommerce(ctx, items[i])
	}
	return items
}

func TestCommerceGet(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCommerce(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCommerce(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCommerceRemove(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCommerce(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCommerce(ctx, item.Id)
		_, found := keeper.GetCommerce(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCommerceGetAll(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCommerce(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCommerce(ctx)),
	)
}

func TestCommerceCount(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCommerce(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCommerceCount(ctx))
}
