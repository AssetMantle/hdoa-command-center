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

func createNDomain(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Domain {
	items := make([]types.Domain, n)
	for i := range items {
		items[i].Id = keeper.AppendDomain(ctx, items[i])
	}
	return items
}

func TestDomainGet(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNDomain(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDomain(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDomainRemove(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNDomain(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDomain(ctx, item.Id)
		_, found := keeper.GetDomain(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDomainGetAll(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNDomain(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDomain(ctx)),
	)
}

func TestDomainCount(t *testing.T) {
	keeper, ctx := keepertest.HdoacommandcenterKeeper(t)
	items := createNDomain(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDomainCount(ctx))
}
