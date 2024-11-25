package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateFactory = "create_factory"
	TypeMsgUpdateFactory = "update_factory"
	TypeMsgDeleteFactory = "delete_factory"
)

var _ sdk.Msg = &MsgCreateFactory{}

func NewMsgCreateFactory(creator string, mode int32) *MsgCreateFactory {
	return &MsgCreateFactory{
		Creator: creator,
		Mode:    mode,
	}
}

func (msg *MsgCreateFactory) Route() string {
	return RouterKey
}

func (msg *MsgCreateFactory) Type() string {
	return TypeMsgCreateFactory
}

func (msg *MsgCreateFactory) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFactory) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFactory) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateFactory{}

func NewMsgUpdateFactory(creator string, id uint64, mode int32) *MsgUpdateFactory {
	return &MsgUpdateFactory{
		Id:      id,
		Creator: creator,
		Mode:    mode,
	}
}

func (msg *MsgUpdateFactory) Route() string {
	return RouterKey
}

func (msg *MsgUpdateFactory) Type() string {
	return TypeMsgUpdateFactory
}

func (msg *MsgUpdateFactory) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateFactory) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateFactory) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteFactory{}

func NewMsgDeleteFactory(creator string, id uint64) *MsgDeleteFactory {
	return &MsgDeleteFactory{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteFactory) Route() string {
	return RouterKey
}

func (msg *MsgDeleteFactory) Type() string {
	return TypeMsgDeleteFactory
}

func (msg *MsgDeleteFactory) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteFactory) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteFactory) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
