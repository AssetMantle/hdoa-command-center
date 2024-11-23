package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

// GetGovernanceCount get the total number of governance
func (k Keeper) GetGovernanceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.GovernanceCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetGovernanceCount set the total number of governance
func (k Keeper) SetGovernanceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.GovernanceCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendGovernance appends a governance in the store with a new id and update the count
func (k Keeper) AppendGovernance(
	ctx sdk.Context,
	governance types.Governance,
) uint64 {
	// Create the governance
	count := k.GetGovernanceCount(ctx)

	// Set the ID of the appended value
	governance.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GovernanceKey))
	appendedValue := k.cdc.MustMarshal(&governance)
	store.Set(GetGovernanceIDBytes(governance.Id), appendedValue)

	// Update governance count
	k.SetGovernanceCount(ctx, count+1)

	return count
}

// SetGovernance set a specific governance in the store
func (k Keeper) SetGovernance(ctx sdk.Context, governance types.Governance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GovernanceKey))
	b := k.cdc.MustMarshal(&governance)
	store.Set(GetGovernanceIDBytes(governance.Id), b)
}

// GetGovernance returns a governance from its id
func (k Keeper) GetGovernance(ctx sdk.Context, id uint64) (val types.Governance, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GovernanceKey))
	b := store.Get(GetGovernanceIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGovernance removes a governance from the store
func (k Keeper) RemoveGovernance(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GovernanceKey))
	store.Delete(GetGovernanceIDBytes(id))
}

// GetAllGovernance returns all governance
func (k Keeper) GetAllGovernance(ctx sdk.Context) (list []types.Governance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GovernanceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Governance
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetGovernanceIDBytes returns the byte representation of the ID
func GetGovernanceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetGovernanceIDFromBytes returns ID in uint64 format from a byte array
func GetGovernanceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
