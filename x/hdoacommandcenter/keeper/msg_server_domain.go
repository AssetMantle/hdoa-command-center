package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func (k msgServer) CreateDomain(goCtx context.Context, msg *types.MsgCreateDomain) (*types.MsgCreateDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var domain = types.Domain{
		Creator:         msg.Creator,
		DocPathway:      msg.DocPathway,
		NursePathway:    msg.NursePathway,
		AdminPathway:    msg.AdminPathway,
		PharmaPathway:   msg.PharmaPathway,
		PathModelling:   msg.PathModelling,
		ResourceTracing: msg.ResourceTracing,
	}

	id := k.AppendDomain(
		ctx,
		domain,
	)

	return &types.MsgCreateDomainResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDomain(goCtx context.Context, msg *types.MsgUpdateDomain) (*types.MsgUpdateDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var domain = types.Domain{
		Creator:         msg.Creator,
		Id:              msg.Id,
		DocPathway:      msg.DocPathway,
		NursePathway:    msg.NursePathway,
		AdminPathway:    msg.AdminPathway,
		PharmaPathway:   msg.PharmaPathway,
		PathModelling:   msg.PathModelling,
		ResourceTracing: msg.ResourceTracing,
	}

	// Checks that the element exists
	val, found := k.GetDomain(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDomain(ctx, domain)

	return &types.MsgUpdateDomainResponse{}, nil
}

func (k msgServer) DeleteDomain(goCtx context.Context, msg *types.MsgDeleteDomain) (*types.MsgDeleteDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDomain(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDomain(ctx, msg.Id)

	return &types.MsgDeleteDomainResponse{}, nil
}
