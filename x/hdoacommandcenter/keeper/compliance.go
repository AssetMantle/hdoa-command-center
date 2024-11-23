package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

// GetComplianceCount get the total number of compliance
func (k Keeper) GetComplianceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ComplianceCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetComplianceCount set the total number of compliance
func (k Keeper) SetComplianceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ComplianceCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCompliance appends a compliance in the store with a new id and update the count
func (k Keeper) AppendCompliance(
	ctx sdk.Context,
	compliance types.Compliance,
) uint64 {
	// Create the compliance
	count := k.GetComplianceCount(ctx)

	// Set the ID of the appended value
	compliance.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ComplianceKey))
	appendedValue := k.cdc.MustMarshal(&compliance)
	store.Set(GetComplianceIDBytes(compliance.Id), appendedValue)

	// Update compliance count
	k.SetComplianceCount(ctx, count+1)

	return count
}

// SetCompliance set a specific compliance in the store
func (k Keeper) SetCompliance(ctx sdk.Context, compliance types.Compliance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ComplianceKey))
	b := k.cdc.MustMarshal(&compliance)
	store.Set(GetComplianceIDBytes(compliance.Id), b)
}

// GetCompliance returns a compliance from its id
func (k Keeper) GetCompliance(ctx sdk.Context, id uint64) (val types.Compliance, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ComplianceKey))
	b := store.Get(GetComplianceIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCompliance removes a compliance from the store
func (k Keeper) RemoveCompliance(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ComplianceKey))
	store.Delete(GetComplianceIDBytes(id))
}

// GetAllCompliance returns all compliance
func (k Keeper) GetAllCompliance(ctx sdk.Context) (list []types.Compliance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ComplianceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Compliance
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetComplianceIDBytes returns the byte representation of the ID
func GetComplianceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetComplianceIDFromBytes returns ID in uint64 format from a byte array
func GetComplianceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
