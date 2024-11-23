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

func CmdCreateGovernance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-governance [healthcare-gov] [commerce-gov] [compliance-gov]",
		Short: "Create a new governance",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argHealthcareGov, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argCommerceGov, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argComplianceGov, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateGovernance(clientCtx.GetFromAddress().String(), argHealthcareGov, argCommerceGov, argComplianceGov)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateGovernance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-governance [id] [healthcare-gov] [commerce-gov] [compliance-gov]",
		Short: "Update a governance",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argHealthcareGov, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}

			argCommerceGov, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			argComplianceGov, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateGovernance(clientCtx.GetFromAddress().String(), id, argHealthcareGov, argCommerceGov, argComplianceGov)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteGovernance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-governance [id]",
		Short: "Delete a governance by id",
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

			msg := types.NewMsgDeleteGovernance(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
