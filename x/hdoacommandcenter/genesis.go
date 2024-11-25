package hdoacommandcenter

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hdoa-command-center/x/hdoacommandcenter/keeper"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the commerce
	for _, elem := range genState.CommerceList {
		k.SetCommerce(ctx, elem)
	}

	// Set commerce count
	k.SetCommerceCount(ctx, genState.CommerceCount)
	// Set all the governance
	for _, elem := range genState.GovernanceList {
		k.SetGovernance(ctx, elem)
	}

	// Set governance count
	k.SetGovernanceCount(ctx, genState.GovernanceCount)
	// Set all the domain
	for _, elem := range genState.DomainList {
		k.SetDomain(ctx, elem)
	}

	// Set domain count
	k.SetDomainCount(ctx, genState.DomainCount)
	// Set all the compliance
	for _, elem := range genState.ComplianceList {
		k.SetCompliance(ctx, elem)
	}

	// Set compliance count
	k.SetComplianceCount(ctx, genState.ComplianceCount)
	// Set all the factory
	for _, elem := range genState.FactoryList {
		k.SetFactory(ctx, elem)
	}

	// Set factory count
	k.SetFactoryCount(ctx, genState.FactoryCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CommerceList = k.GetAllCommerce(ctx)
	genesis.CommerceCount = k.GetCommerceCount(ctx)
	genesis.GovernanceList = k.GetAllGovernance(ctx)
	genesis.GovernanceCount = k.GetGovernanceCount(ctx)
	genesis.DomainList = k.GetAllDomain(ctx)
	genesis.DomainCount = k.GetDomainCount(ctx)
	genesis.ComplianceList = k.GetAllCompliance(ctx)
	genesis.ComplianceCount = k.GetComplianceCount(ctx)
	genesis.FactoryList = k.GetAllFactory(ctx)
	genesis.FactoryCount = k.GetFactoryCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
