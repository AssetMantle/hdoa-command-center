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

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HdoacommandcenterKeeper(t)
	hdoacommandcenter.InitGenesis(ctx, *k, genesisState)
	got := hdoacommandcenter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
