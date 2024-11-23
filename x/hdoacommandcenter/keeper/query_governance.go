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

func (k Keeper) GovernanceAll(goCtx context.Context, req *types.QueryAllGovernanceRequest) (*types.QueryAllGovernanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var governances []types.Governance
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	governanceStore := prefix.NewStore(store, types.KeyPrefix(types.GovernanceKey))

	pageRes, err := query.Paginate(governanceStore, req.Pagination, func(key []byte, value []byte) error {
		var governance types.Governance
		if err := k.cdc.Unmarshal(value, &governance); err != nil {
			return err
		}

		governances = append(governances, governance)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllGovernanceResponse{Governance: governances, Pagination: pageRes}, nil
}

func (k Keeper) Governance(goCtx context.Context, req *types.QueryGetGovernanceRequest) (*types.QueryGetGovernanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	governance, found := k.GetGovernance(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetGovernanceResponse{Governance: governance}, nil
}
