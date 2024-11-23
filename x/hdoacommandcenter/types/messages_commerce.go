package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCommerce = "create_commerce"
	TypeMsgUpdateCommerce = "update_commerce"
	TypeMsgDeleteCommerce = "delete_commerce"
)

var _ sdk.Msg = &MsgCreateCommerce{}

func NewMsgCreateCommerce(creator string, fractionalize bool, access bool, sell bool) *MsgCreateCommerce {
	return &MsgCreateCommerce{
		Creator:       creator,
		Fractionalize: fractionalize,
		Access:        access,
		Sell:          sell,
	}
}

func (msg *MsgCreateCommerce) Route() string {
	return RouterKey
}

func (msg *MsgCreateCommerce) Type() string {
	return TypeMsgCreateCommerce
}

func (msg *MsgCreateCommerce) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCommerce) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCommerce) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCommerce{}

func NewMsgUpdateCommerce(creator string, id uint64, fractionalize bool, access bool, sell bool) *MsgUpdateCommerce {
	return &MsgUpdateCommerce{
		Id:            id,
		Creator:       creator,
		Fractionalize: fractionalize,
		Access:        access,
		Sell:          sell,
	}
}

func (msg *MsgUpdateCommerce) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCommerce) Type() string {
	return TypeMsgUpdateCommerce
}

func (msg *MsgUpdateCommerce) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCommerce) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCommerce) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCommerce{}

func NewMsgDeleteCommerce(creator string, id uint64) *MsgDeleteCommerce {
	return &MsgDeleteCommerce{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCommerce) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCommerce) Type() string {
	return TypeMsgDeleteCommerce
}

func (msg *MsgDeleteCommerce) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCommerce) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCommerce) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
