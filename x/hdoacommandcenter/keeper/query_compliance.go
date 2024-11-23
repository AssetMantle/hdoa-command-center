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

func (k Keeper) ComplianceAll(goCtx context.Context, req *types.QueryAllComplianceRequest) (*types.QueryAllComplianceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var compliances []types.Compliance
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	complianceStore := prefix.NewStore(store, types.KeyPrefix(types.ComplianceKey))

	pageRes, err := query.Paginate(complianceStore, req.Pagination, func(key []byte, value []byte) error {
		var compliance types.Compliance
		if err := k.cdc.Unmarshal(value, &compliance); err != nil {
			return err
		}

		compliances = append(compliances, compliance)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllComplianceResponse{Compliance: compliances, Pagination: pageRes}, nil
}

func (k Keeper) Compliance(goCtx context.Context, req *types.QueryGetComplianceRequest) (*types.QueryGetComplianceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	compliance, found := k.GetCompliance(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetComplianceResponse{Compliance: compliance}, nil
}
