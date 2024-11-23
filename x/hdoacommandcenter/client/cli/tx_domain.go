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

func CmdCreateDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-domain [doc-pathway] [nurse-pathway] [admin-pathway] [pharma-pathway] [path-modelling] [resource-tracing]",
		Short: "Create a new domain",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDocPathway, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argNursePathway, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argAdminPathway, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			argPharmaPathway, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argPathModelling, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}
			argResourceTracing, err := cast.ToBoolE(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDomain(clientCtx.GetFromAddress().String(), argDocPathway, argNursePathway, argAdminPathway, argPharmaPathway, argPathModelling, argResourceTracing)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-domain [id] [doc-pathway] [nurse-pathway] [admin-pathway] [pharma-pathway] [path-modelling] [resource-tracing]",
		Short: "Update a domain",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argDocPathway, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}

			argNursePathway, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			argAdminPathway, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			argPharmaPathway, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}

			argPathModelling, err := cast.ToBoolE(args[5])
			if err != nil {
				return err
			}

			argResourceTracing, err := cast.ToBoolE(args[6])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDomain(clientCtx.GetFromAddress().String(), id, argDocPathway, argNursePathway, argAdminPathway, argPharmaPathway, argPathModelling, argResourceTracing)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-domain [id]",
		Short: "Delete a domain by id",
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

			msg := types.NewMsgDeleteDomain(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
