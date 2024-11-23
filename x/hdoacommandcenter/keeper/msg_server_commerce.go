package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func (k msgServer) CreateCommerce(goCtx context.Context, msg *types.MsgCreateCommerce) (*types.MsgCreateCommerceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var commerce = types.Commerce{
		Creator:       msg.Creator,
		Fractionalize: msg.Fractionalize,
		Access:        msg.Access,
		Sell:          msg.Sell,
	}

	id := k.AppendCommerce(
		ctx,
		commerce,
	)

	return &types.MsgCreateCommerceResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCommerce(goCtx context.Context, msg *types.MsgUpdateCommerce) (*types.MsgUpdateCommerceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var commerce = types.Commerce{
		Creator:       msg.Creator,
		Id:            msg.Id,
		Fractionalize: msg.Fractionalize,
		Access:        msg.Access,
		Sell:          msg.Sell,
	}

	// Checks that the element exists
	val, found := k.GetCommerce(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCommerce(ctx, commerce)

	return &types.MsgUpdateCommerceResponse{}, nil
}

func (k msgServer) DeleteCommerce(goCtx context.Context, msg *types.MsgDeleteCommerce) (*types.MsgDeleteCommerceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCommerce(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCommerce(ctx, msg.Id)

	return &types.MsgDeleteCommerceResponse{}, nil
}
