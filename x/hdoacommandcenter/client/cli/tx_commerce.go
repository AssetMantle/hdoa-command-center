package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func CmdCreateCommerce() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-commerce [fractionalize] [access] [sell]",
		Short: "Create a new commerce",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFractionalize, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argAccess, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argSell, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCommerce(clientCtx.GetFromAddress().String(), argFractionalize, argAccess, argSell)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCommerce() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-commerce [id] [fractionalize] [access] [sell]",
		Short: "Update a commerce",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argFractionalize, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}

			argAccess, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			argSell, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCommerce(clientCtx.GetFromAddress().String(), id, argFractionalize, argAccess, argSell)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCommerce() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-commerce [id]",
		Short: "Delete a commerce by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCommerce(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
