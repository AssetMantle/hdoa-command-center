package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CommerceList:   []Commerce{},
		GovernanceList: []Governance{},
		DomainList:     []Domain{},
		ComplianceList: []Compliance{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in commerce
	commerceIdMap := make(map[uint64]bool)
	commerceCount := gs.GetCommerceCount()
	for _, elem := range gs.CommerceList {
		if _, ok := commerceIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for commerce")
		}
		if elem.Id >= commerceCount {
			return fmt.Errorf("commerce id should be lower or equal than the last id")
		}
		commerceIdMap[elem.Id] = true
	}
	// Check for duplicated ID in governance
	governanceIdMap := make(map[uint64]bool)
	governanceCount := gs.GetGovernanceCount()
	for _, elem := range gs.GovernanceList {
		if _, ok := governanceIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for governance")
		}
		if elem.Id >= governanceCount {
			return fmt.Errorf("governance id should be lower or equal than the last id")
		}
		governanceIdMap[elem.Id] = true
	}
	// Check for duplicated ID in domain
	domainIdMap := make(map[uint64]bool)
	domainCount := gs.GetDomainCount()
	for _, elem := range gs.DomainList {
		if _, ok := domainIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for domain")
		}
		if elem.Id >= domainCount {
			return fmt.Errorf("domain id should be lower or equal than the last id")
		}
		domainIdMap[elem.Id] = true
	}
	// Check for duplicated ID in compliance
	complianceIdMap := make(map[uint64]bool)
	complianceCount := gs.GetComplianceCount()
	for _, elem := range gs.ComplianceList {
		if _, ok := complianceIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for compliance")
		}
		if elem.Id >= complianceCount {
			return fmt.Errorf("compliance id should be lower or equal than the last id")
		}
		complianceIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
