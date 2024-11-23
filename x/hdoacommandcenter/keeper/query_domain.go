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

func (k Keeper) DomainAll(goCtx context.Context, req *types.QueryAllDomainRequest) (*types.QueryAllDomainResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var domains []types.Domain
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	domainStore := prefix.NewStore(store, types.KeyPrefix(types.DomainKey))

	pageRes, err := query.Paginate(domainStore, req.Pagination, func(key []byte, value []byte) error {
		var domain types.Domain
		if err := k.cdc.Unmarshal(value, &domain); err != nil {
			return err
		}

		domains = append(domains, domain)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDomainResponse{Domain: domains, Pagination: pageRes}, nil
}

func (k Keeper) Domain(goCtx context.Context, req *types.QueryGetDomainRequest) (*types.QueryGetDomainResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	domain, found := k.GetDomain(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDomainResponse{Domain: domain}, nil
}
