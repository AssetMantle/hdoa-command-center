package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func (k msgServer) CreateGovernance(goCtx context.Context, msg *types.MsgCreateGovernance) (*types.MsgCreateGovernanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var governance = types.Governance{
		Creator:       msg.Creator,
		HealthcareGov: msg.HealthcareGov,
		CommerceGov:   msg.CommerceGov,
		ComplianceGov: msg.ComplianceGov,
	}

	id := k.AppendGovernance(
		ctx,
		governance,
	)

	return &types.MsgCreateGovernanceResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateGovernance(goCtx context.Context, msg *types.MsgUpdateGovernance) (*types.MsgUpdateGovernanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var governance = types.Governance{
		Creator:       msg.Creator,
		Id:            msg.Id,
		HealthcareGov: msg.HealthcareGov,
		CommerceGov:   msg.CommerceGov,
		ComplianceGov: msg.ComplianceGov,
	}

	// Checks that the element exists
	val, found := k.GetGovernance(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetGovernance(ctx, governance)

	return &types.MsgUpdateGovernanceResponse{}, nil
}

func (k msgServer) DeleteGovernance(goCtx context.Context, msg *types.MsgDeleteGovernance) (*types.MsgDeleteGovernanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetGovernance(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveGovernance(ctx, msg.Id)

	return &types.MsgDeleteGovernanceResponse{}, nil
}
