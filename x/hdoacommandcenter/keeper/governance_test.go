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

func createNGovernance(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Governance {
	items := make([]types.Governance, n)
	for i := range items {
		items[i].Id = keeper.AppendGovernance(ctx, items[i])
	}
	return items
}

func TestGovernanceGet(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNGovernance(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetGovernance(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestGovernanceRemove(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNGovernance(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGovernance(ctx, item.Id)
		_, found := keeper.GetGovernance(ctx, item.Id)
		require.False(t, found)
	}
}

func TestGovernanceGetAll(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNGovernance(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllGovernance(ctx)),
	)
}

func TestGovernanceCount(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNGovernance(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetGovernanceCount(ctx))
}
