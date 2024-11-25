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

func (k Keeper) FactoryAll(goCtx context.Context, req *types.QueryAllFactoryRequest) (*types.QueryAllFactoryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var factorys []types.Factory
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	factoryStore := prefix.NewStore(store, types.KeyPrefix(types.FactoryKey))

	pageRes, err := query.Paginate(factoryStore, req.Pagination, func(key []byte, value []byte) error {
		var factory types.Factory
		if err := k.cdc.Unmarshal(value, &factory); err != nil {
			return err
		}

		factorys = append(factorys, factory)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFactoryResponse{Factory: factorys, Pagination: pageRes}, nil
}

func (k Keeper) Factory(goCtx context.Context, req *types.QueryGetFactoryRequest) (*types.QueryGetFactoryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	factory, found := k.GetFactory(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFactoryResponse{Factory: factory}, nil
}
