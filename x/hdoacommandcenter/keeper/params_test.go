package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "hdoa-command-center/testutil/keeper"
	"hdoa-command-center/x/hdoacommandcenter/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HdoacommandcenterKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
