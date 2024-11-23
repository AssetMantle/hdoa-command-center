package hdoacommandcenter_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "hdoa-command-center/testutil/keeper"
	"hdoa-command-center/testutil/nullify"
	"hdoa-command-center/x/hdoacommandcenter"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CommerceList: []types.Commerce{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CommerceCount: 2,
		GovernanceList: []types.Governance{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		GovernanceCount: 2,
		DomainList: []types.Domain{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DomainCount: 2,
		ComplianceList: []types.Compliance{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ComplianceCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HdoacommandcenterKeeper(t)
	hdoacommandcenter.InitGenesis(ctx, *k, genesisState)
	got := hdoacommandcenter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CommerceList, got.CommerceList)
	require.Equal(t, genesisState.CommerceCount, got.CommerceCount)
	require.ElementsMatch(t, genesisState.GovernanceList, got.GovernanceList)
	require.Equal(t, genesisState.GovernanceCount, got.GovernanceCount)
	require.ElementsMatch(t, genesisState.DomainList, got.DomainList)
	require.Equal(t, genesisState.DomainCount, got.DomainCount)
	require.ElementsMatch(t, genesisState.ComplianceList, got.ComplianceList)
	require.Equal(t, genesisState.ComplianceCount, got.ComplianceCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
