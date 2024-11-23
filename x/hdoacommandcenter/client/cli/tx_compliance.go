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

func CmdCreateCompliance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-compliance [hipaa-oversight] [gov-oversight] [data-sec-compliance]",
		Short: "Create a new compliance",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argHipaaOversight, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argGovOversight, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argDataSecCompliance, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCompliance(clientCtx.GetFromAddress().String(), argHipaaOversight, argGovOversight, argDataSecCompliance)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCompliance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-compliance [id] [hipaa-oversight] [gov-oversight] [data-sec-compliance]",
		Short: "Update a compliance",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argHipaaOversight, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}

			argGovOversight, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			argDataSecCompliance, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCompliance(clientCtx.GetFromAddress().String(), id, argHipaaOversight, argGovOversight, argDataSecCompliance)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCompliance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-compliance [id]",
		Short: "Delete a compliance by id",
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

			msg := types.NewMsgDeleteCompliance(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
