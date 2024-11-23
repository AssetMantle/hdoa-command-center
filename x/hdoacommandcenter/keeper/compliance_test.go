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

func createNCompliance(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Compliance {
	items := make([]types.Compliance, n)
	for i := range items {
		items[i].Id = keeper.AppendCompliance(ctx, items[i])
	}
	return items
}

func TestComplianceGet(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCompliance(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCompliance(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestComplianceRemove(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCompliance(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCompliance(ctx, item.Id)
		_, found := keeper.GetCompliance(ctx, item.Id)
		require.False(t, found)
	}
}

func TestComplianceGetAll(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCompliance(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCompliance(ctx)),
	)
}

func TestComplianceCount(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNCompliance(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetComplianceCount(ctx))
}
