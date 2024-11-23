package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCompliance = "create_compliance"
	TypeMsgUpdateCompliance = "update_compliance"
	TypeMsgDeleteCompliance = "delete_compliance"
)

var _ sdk.Msg = &MsgCreateCompliance{}

func NewMsgCreateCompliance(creator string, hipaaOversight bool, govOversight bool, dataSecCompliance bool) *MsgCreateCompliance {
	return &MsgCreateCompliance{
		Creator:           creator,
		HipaaOversight:    hipaaOversight,
		GovOversight:      govOversight,
		DataSecCompliance: dataSecCompliance,
	}
}

func (msg *MsgCreateCompliance) Route() string {
	return RouterKey
}

func (msg *MsgCreateCompliance) Type() string {
	return TypeMsgCreateCompliance
}

func (msg *MsgCreateCompliance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCompliance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCompliance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCompliance{}

func NewMsgUpdateCompliance(creator string, id uint64, hipaaOversight bool, govOversight bool, dataSecCompliance bool) *MsgUpdateCompliance {
	return &MsgUpdateCompliance{
		Id:                id,
		Creator:           creator,
		HipaaOversight:    hipaaOversight,
		GovOversight:      govOversight,
		DataSecCompliance: dataSecCompliance,
	}
}

func (msg *MsgUpdateCompliance) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCompliance) Type() string {
	return TypeMsgUpdateCompliance
}

func (msg *MsgUpdateCompliance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCompliance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCompliance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCompliance{}

func NewMsgDeleteCompliance(creator string, id uint64) *MsgDeleteCompliance {
	return &MsgDeleteCompliance{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCompliance) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCompliance) Type() string {
	return TypeMsgDeleteCompliance
}

func (msg *MsgDeleteCompliance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCompliance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCompliance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
