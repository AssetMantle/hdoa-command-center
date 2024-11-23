package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateGovernance = "create_governance"
	TypeMsgUpdateGovernance = "update_governance"
	TypeMsgDeleteGovernance = "delete_governance"
)

var _ sdk.Msg = &MsgCreateGovernance{}

func NewMsgCreateGovernance(creator string, healthcareGov bool, commerceGov bool, complianceGov bool) *MsgCreateGovernance {
	return &MsgCreateGovernance{
		Creator:       creator,
		HealthcareGov: healthcareGov,
		CommerceGov:   commerceGov,
		ComplianceGov: complianceGov,
	}
}

func (msg *MsgCreateGovernance) Route() string {
	return RouterKey
}

func (msg *MsgCreateGovernance) Type() string {
	return TypeMsgCreateGovernance
}

func (msg *MsgCreateGovernance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateGovernance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateGovernance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateGovernance{}

func NewMsgUpdateGovernance(creator string, id uint64, healthcareGov bool, commerceGov bool, complianceGov bool) *MsgUpdateGovernance {
	return &MsgUpdateGovernance{
		Id:            id,
		Creator:       creator,
		HealthcareGov: healthcareGov,
		CommerceGov:   commerceGov,
		ComplianceGov: complianceGov,
	}
}

func (msg *MsgUpdateGovernance) Route() string {
	return RouterKey
}

func (msg *MsgUpdateGovernance) Type() string {
	return TypeMsgUpdateGovernance
}

func (msg *MsgUpdateGovernance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateGovernance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateGovernance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteGovernance{}

func NewMsgDeleteGovernance(creator string, id uint64) *MsgDeleteGovernance {
	return &MsgDeleteGovernance{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteGovernance) Route() string {
	return RouterKey
}

func (msg *MsgDeleteGovernance) Type() string {
	return TypeMsgDeleteGovernance
}

func (msg *MsgDeleteGovernance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteGovernance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteGovernance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
