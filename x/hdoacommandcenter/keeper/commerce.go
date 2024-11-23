package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

// GetCommerceCount get the total number of commerce
func (k Keeper) GetCommerceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CommerceCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCommerceCount set the total number of commerce
func (k Keeper) SetCommerceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CommerceCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCommerce appends a commerce in the store with a new id and update the count
func (k Keeper) AppendCommerce(
	ctx sdk.Context,
	commerce types.Commerce,
) uint64 {
	// Create the commerce
	count := k.GetCommerceCount(ctx)

	// Set the ID of the appended value
	commerce.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommerceKey))
	appendedValue := k.cdc.MustMarshal(&commerce)
	store.Set(GetCommerceIDBytes(commerce.Id), appendedValue)

	// Update commerce count
	k.SetCommerceCount(ctx, count+1)

	return count
}

// SetCommerce set a specific commerce in the store
func (k Keeper) SetCommerce(ctx sdk.Context, commerce types.Commerce) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommerceKey))
	b := k.cdc.MustMarshal(&commerce)
	store.Set(GetCommerceIDBytes(commerce.Id), b)
}

// GetCommerce returns a commerce from its id
func (k Keeper) GetCommerce(ctx sdk.Context, id uint64) (val types.Commerce, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommerceKey))
	b := store.Get(GetCommerceIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCommerce removes a commerce from the store
func (k Keeper) RemoveCommerce(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommerceKey))
	store.Delete(GetCommerceIDBytes(id))
}

// GetAllCommerce returns all commerce
func (k Keeper) GetAllCommerce(ctx sdk.Context) (list []types.Commerce) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommerceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Commerce
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCommerceIDBytes returns the byte representation of the ID
func GetCommerceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCommerceIDFromBytes returns ID in uint64 format from a byte array
func GetCommerceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
