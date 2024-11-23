package types

const (
	// ModuleName defines the module name
	ModuleName = "hdoacommandcenter"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_hdoacommandcenter"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	CommerceKey      = "Commerce/value/"
	CommerceCountKey = "Commerce/count/"
)

const (
	GovernanceKey      = "Governance/value/"
	GovernanceCountKey = "Governance/count/"
)

const (
	DomainKey      = "Domain/value/"
	DomainCountKey = "Domain/count/"
)

const (
	ComplianceKey      = "Compliance/value/"
	ComplianceCountKey = "Compliance/count/"
)
