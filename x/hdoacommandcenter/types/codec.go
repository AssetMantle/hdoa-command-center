package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateCommerce{}, "hdoacommandcenter/CreateCommerce", nil)
	cdc.RegisterConcrete(&MsgUpdateCommerce{}, "hdoacommandcenter/UpdateCommerce", nil)
	cdc.RegisterConcrete(&MsgDeleteCommerce{}, "hdoacommandcenter/DeleteCommerce", nil)
	cdc.RegisterConcrete(&MsgCreateGovernance{}, "hdoacommandcenter/CreateGovernance", nil)
	cdc.RegisterConcrete(&MsgUpdateGovernance{}, "hdoacommandcenter/UpdateGovernance", nil)
	cdc.RegisterConcrete(&MsgDeleteGovernance{}, "hdoacommandcenter/DeleteGovernance", nil)
	cdc.RegisterConcrete(&MsgCreateDomain{}, "hdoacommandcenter/CreateDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateDomain{}, "hdoacommandcenter/UpdateDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteDomain{}, "hdoacommandcenter/DeleteDomain", nil)
	cdc.RegisterConcrete(&MsgCreateCompliance{}, "hdoacommandcenter/CreateCompliance", nil)
	cdc.RegisterConcrete(&MsgUpdateCompliance{}, "hdoacommandcenter/UpdateCompliance", nil)
	cdc.RegisterConcrete(&MsgDeleteCompliance{}, "hdoacommandcenter/DeleteCompliance", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCommerce{},
		&MsgUpdateCommerce{},
		&MsgDeleteCommerce{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateGovernance{},
		&MsgUpdateGovernance{},
		&MsgDeleteGovernance{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDomain{},
		&MsgUpdateDomain{},
		&MsgDeleteDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCompliance{},
		&MsgUpdateCompliance{},
		&MsgDeleteCompliance{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
