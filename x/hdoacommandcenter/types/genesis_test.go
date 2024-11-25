package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestGenesisState_Validate(t *testing.T) {
	tests := []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				FactoryList: []types.Factory{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				FactoryCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated commerce",
			genState: &types.GenesisState{
				CommerceList: []types.Commerce{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid commerce count",
			genState: &types.GenesisState{
				CommerceList: []types.Commerce{
					{
						Id: 1,
					},
				},
				CommerceCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated governance",
			genState: &types.GenesisState{
				GovernanceList: []types.Governance{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid governance count",
			genState: &types.GenesisState{
				GovernanceList: []types.Governance{
					{
						Id: 1,
					},
				},
				GovernanceCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated domain",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid domain count",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 1,
					},
				},
				DomainCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated compliance",
			genState: &types.GenesisState{
				ComplianceList: []types.Compliance{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid compliance count",
			genState: &types.GenesisState{
				ComplianceList: []types.Compliance{
					{
						Id: 1,
					},
				},
				ComplianceCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated factory",
			genState: &types.GenesisState{
				FactoryList: []types.Factory{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid factory count",
			genState: &types.GenesisState{
				FactoryList: []types.Factory{
					{
						Id: 1,
					},
				},
				FactoryCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
