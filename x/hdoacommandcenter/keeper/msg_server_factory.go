package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func (k msgServer) CreateFactory(goCtx context.Context, msg *types.MsgCreateFactory) (*types.MsgCreateFactoryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var factory = types.Factory{
		Creator: msg.Creator,
		Mode:    msg.Mode,
	}

	id := k.AppendFactory(
		ctx,
		factory,
	)

	return &types.MsgCreateFactoryResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateFactory(goCtx context.Context, msg *types.MsgUpdateFactory) (*types.MsgUpdateFactoryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var factory = types.Factory{
		Creator: msg.Creator,
		Id:      msg.Id,
		Mode:    msg.Mode,
	}

	// Checks that the element exists
	val, found := k.GetFactory(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetFactory(ctx, factory)

	return &types.MsgUpdateFactoryResponse{}, nil
}

func (k msgServer) DeleteFactory(goCtx context.Context, msg *types.MsgDeleteFactory) (*types.MsgDeleteFactoryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetFactory(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveFactory(ctx, msg.Id)

	return &types.MsgDeleteFactoryResponse{}, nil
}
