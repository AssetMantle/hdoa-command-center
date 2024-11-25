package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

// GetFactoryCount get the total number of factory
func (k Keeper) GetFactoryCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FactoryCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFactoryCount set the total number of factory
func (k Keeper) SetFactoryCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FactoryCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFactory appends a factory in the store with a new id and update the count
func (k Keeper) AppendFactory(
	ctx sdk.Context,
	factory types.Factory,
) uint64 {
	// Create the factory
	count := k.GetFactoryCount(ctx)

	// Set the ID of the appended value
	factory.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FactoryKey))
	appendedValue := k.cdc.MustMarshal(&factory)
	store.Set(GetFactoryIDBytes(factory.Id), appendedValue)

	// Update factory count
	k.SetFactoryCount(ctx, count+1)

	return count
}

// SetFactory set a specific factory in the store
func (k Keeper) SetFactory(ctx sdk.Context, factory types.Factory) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FactoryKey))
	b := k.cdc.MustMarshal(&factory)
	store.Set(GetFactoryIDBytes(factory.Id), b)
}

// GetFactory returns a factory from its id
func (k Keeper) GetFactory(ctx sdk.Context, id uint64) (val types.Factory, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FactoryKey))
	b := store.Get(GetFactoryIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFactory removes a factory from the store
func (k Keeper) RemoveFactory(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FactoryKey))
	store.Delete(GetFactoryIDBytes(id))
}

// GetAllFactory returns all factory
func (k Keeper) GetAllFactory(ctx sdk.Context) (list []types.Factory) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FactoryKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Factory
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFactoryIDBytes returns the byte representation of the ID
func GetFactoryIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFactoryIDFromBytes returns ID in uint64 format from a byte array
func GetFactoryIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
