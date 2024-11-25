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

func createNFactory(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Factory {
	items := make([]types.Factory, n)
	for i := range items {
		items[i].Id = keeper.AppendFactory(ctx, items[i])
	}
	return items
}

func TestFactoryGet(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNFactory(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFactory(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFactoryRemove(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNFactory(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFactory(ctx, item.Id)
		_, found := keeper.GetFactory(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFactoryGetAll(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNFactory(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFactory(ctx)),
	)
}

func TestFactoryCount(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNFactory(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFactoryCount(ctx))
}
