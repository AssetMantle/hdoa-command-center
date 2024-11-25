package hdoacommandcenter

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"hdoa-command-center/testutil/sample"
	hdoacommandcentersimulation "hdoa-command-center/x/hdoacommandcenter/simulation"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = hdoacommandcentersimulation.FindAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
	_ = rand.Rand{}
)

const (
	opWeightMsgCreateCommerce = "op_weight_msg_commerce"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCommerce int = 100

	opWeightMsgUpdateCommerce = "op_weight_msg_commerce"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCommerce int = 100

	opWeightMsgDeleteCommerce = "op_weight_msg_commerce"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCommerce int = 100

	opWeightMsgCreateGovernance = "op_weight_msg_governance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateGovernance int = 100

	opWeightMsgUpdateGovernance = "op_weight_msg_governance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateGovernance int = 100

	opWeightMsgDeleteGovernance = "op_weight_msg_governance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteGovernance int = 100

	opWeightMsgCreateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDomain int = 100

	opWeightMsgUpdateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDomain int = 100

	opWeightMsgDeleteDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDomain int = 100

	opWeightMsgCreateCompliance = "op_weight_msg_compliance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCompliance int = 100

	opWeightMsgUpdateCompliance = "op_weight_msg_compliance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCompliance int = 100

	opWeightMsgDeleteCompliance = "op_weight_msg_compliance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCompliance int = 100

	opWeightMsgCreateFactory = "op_weight_msg_factory"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateFactory int = 100

	opWeightMsgUpdateFactory = "op_weight_msg_factory"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateFactory int = 100

	opWeightMsgDeleteFactory = "op_weight_msg_factory"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteFactory int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	hdoacommandcenterGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		CommerceList: []types.Commerce{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CommerceCount: 2,
		GovernanceList: []types.Governance{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		GovernanceCount: 2,
		DomainList: []types.Domain{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DomainCount: 2,
		ComplianceList: []types.Compliance{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ComplianceCount: 2,
		FactoryList: []types.Factory{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		FactoryCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&hdoacommandcenterGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateCommerce int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCommerce, &weightMsgCreateCommerce, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCommerce = defaultWeightMsgCreateCommerce
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCommerce,
		hdoacommandcentersimulation.SimulateMsgCreateCommerce(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCommerce int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCommerce, &weightMsgUpdateCommerce, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCommerce = defaultWeightMsgUpdateCommerce
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCommerce,
		hdoacommandcentersimulation.SimulateMsgUpdateCommerce(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCommerce int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCommerce, &weightMsgDeleteCommerce, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCommerce = defaultWeightMsgDeleteCommerce
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCommerce,
		hdoacommandcentersimulation.SimulateMsgDeleteCommerce(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateGovernance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateGovernance, &weightMsgCreateGovernance, nil,
		func(_ *rand.Rand) {
			weightMsgCreateGovernance = defaultWeightMsgCreateGovernance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateGovernance,
		hdoacommandcentersimulation.SimulateMsgCreateGovernance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateGovernance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateGovernance, &weightMsgUpdateGovernance, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateGovernance = defaultWeightMsgUpdateGovernance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateGovernance,
		hdoacommandcentersimulation.SimulateMsgUpdateGovernance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteGovernance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteGovernance, &weightMsgDeleteGovernance, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteGovernance = defaultWeightMsgDeleteGovernance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteGovernance,
		hdoacommandcentersimulation.SimulateMsgDeleteGovernance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDomain, &weightMsgCreateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDomain = defaultWeightMsgCreateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDomain,
		hdoacommandcentersimulation.SimulateMsgCreateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDomain, &weightMsgUpdateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDomain = defaultWeightMsgUpdateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDomain,
		hdoacommandcentersimulation.SimulateMsgUpdateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDomain, &weightMsgDeleteDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDomain = defaultWeightMsgDeleteDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDomain,
		hdoacommandcentersimulation.SimulateMsgDeleteDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCompliance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCompliance, &weightMsgCreateCompliance, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCompliance = defaultWeightMsgCreateCompliance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCompliance,
		hdoacommandcentersimulation.SimulateMsgCreateCompliance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCompliance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCompliance, &weightMsgUpdateCompliance, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCompliance = defaultWeightMsgUpdateCompliance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCompliance,
		hdoacommandcentersimulation.SimulateMsgUpdateCompliance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCompliance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCompliance, &weightMsgDeleteCompliance, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCompliance = defaultWeightMsgDeleteCompliance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCompliance,
		hdoacommandcentersimulation.SimulateMsgDeleteCompliance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateFactory int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateFactory, &weightMsgCreateFactory, nil,
		func(_ *rand.Rand) {
			weightMsgCreateFactory = defaultWeightMsgCreateFactory
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateFactory,
		hdoacommandcentersimulation.SimulateMsgCreateFactory(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateFactory int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateFactory, &weightMsgUpdateFactory, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateFactory = defaultWeightMsgUpdateFactory
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateFactory,
		hdoacommandcentersimulation.SimulateMsgUpdateFactory(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteFactory int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteFactory, &weightMsgDeleteFactory, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteFactory = defaultWeightMsgDeleteFactory
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteFactory,
		hdoacommandcentersimulation.SimulateMsgDeleteFactory(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateCommerce,
			defaultWeightMsgCreateCommerce,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgCreateCommerce(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateCommerce,
			defaultWeightMsgUpdateCommerce,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgUpdateCommerce(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteCommerce,
			defaultWeightMsgDeleteCommerce,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgDeleteCommerce(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateGovernance,
			defaultWeightMsgCreateGovernance,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgCreateGovernance(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateGovernance,
			defaultWeightMsgUpdateGovernance,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgUpdateGovernance(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteGovernance,
			defaultWeightMsgDeleteGovernance,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgDeleteGovernance(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateDomain,
			defaultWeightMsgCreateDomain,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgCreateDomain(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateDomain,
			defaultWeightMsgUpdateDomain,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgUpdateDomain(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteDomain,
			defaultWeightMsgDeleteDomain,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgDeleteDomain(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateCompliance,
			defaultWeightMsgCreateCompliance,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgCreateCompliance(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateCompliance,
			defaultWeightMsgUpdateCompliance,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgUpdateCompliance(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteCompliance,
			defaultWeightMsgDeleteCompliance,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgDeleteCompliance(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateFactory,
			defaultWeightMsgCreateFactory,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgCreateFactory(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateFactory,
			defaultWeightMsgUpdateFactory,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgUpdateFactory(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteFactory,
			defaultWeightMsgDeleteFactory,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hdoacommandcentersimulation.SimulateMsgDeleteFactory(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
