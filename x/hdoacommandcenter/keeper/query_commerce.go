package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func (k Keeper) CommerceAll(goCtx context.Context, req *types.QueryAllCommerceRequest) (*types.QueryAllCommerceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var commerces []types.Commerce
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	commerceStore := prefix.NewStore(store, types.KeyPrefix(types.CommerceKey))

	pageRes, err := query.Paginate(commerceStore, req.Pagination, func(key []byte, value []byte) error {
		var commerce types.Commerce
		if err := k.cdc.Unmarshal(value, &commerce); err != nil {
			return err
		}

		commerces = append(commerces, commerce)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCommerceResponse{Commerce: commerces, Pagination: pageRes}, nil
}

func (k Keeper) Commerce(goCtx context.Context, req *types.QueryGetCommerceRequest) (*types.QueryGetCommerceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	commerce, found := k.GetCommerce(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCommerceResponse{Commerce: commerce}, nil
}
