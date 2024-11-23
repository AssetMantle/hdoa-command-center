package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func (k msgServer) CreateCompliance(goCtx context.Context, msg *types.MsgCreateCompliance) (*types.MsgCreateComplianceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var compliance = types.Compliance{
		Creator:           msg.Creator,
		HipaaOversight:    msg.HipaaOversight,
		GovOversight:      msg.GovOversight,
		DataSecCompliance: msg.DataSecCompliance,
	}

	id := k.AppendCompliance(
		ctx,
		compliance,
	)

	return &types.MsgCreateComplianceResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCompliance(goCtx context.Context, msg *types.MsgUpdateCompliance) (*types.MsgUpdateComplianceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var compliance = types.Compliance{
		Creator:           msg.Creator,
		Id:                msg.Id,
		HipaaOversight:    msg.HipaaOversight,
		GovOversight:      msg.GovOversight,
		DataSecCompliance: msg.DataSecCompliance,
	}

	// Checks that the element exists
	val, found := k.GetCompliance(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCompliance(ctx, compliance)

	return &types.MsgUpdateComplianceResponse{}, nil
}

func (k msgServer) DeleteCompliance(goCtx context.Context, msg *types.MsgDeleteCompliance) (*types.MsgDeleteComplianceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCompliance(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCompliance(ctx, msg.Id)

	return &types.MsgDeleteComplianceResponse{}, nil
}
