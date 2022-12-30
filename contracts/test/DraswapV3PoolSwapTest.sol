// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../interfaces/IERC20Minimal.sol';

import '../interfaces/callback/IDraswapV3SwapCallback.sol';
import '../interfaces/IDraswapV3Pool.sol';

contract DraswapV3PoolSwapTest is IDraswapV3SwapCallback {
    int256 private _amount0Delta;
    int256 private _amount1Delta;

    function getSwapResult(
        address pool,
        bool zeroForOne,
        int256 amountSpecified,
        uint160 sqrtPriceLimitX96
    )
        external
        returns (
            int256 amount0Delta,
            int256 amount1Delta,
            uint160 nextSqrtRatio
        )
    {
        (amount0Delta, amount1Delta) = IDraswapV3Pool(pool).swap(
            address(0),
            zeroForOne,
            amountSpecified,
            sqrtPriceLimitX96,
            abi.encode(msg.sender)
        );

        (nextSqrtRatio, , , , , , ) = IDraswapV3Pool(pool).slot0();
    }

    function draswapV3SwapCallback(
        int256 amount0Delta,
        int256 amount1Delta,
        bytes calldata data
    ) external override {
        address sender = abi.decode(data, (address));

        if (amount0Delta > 0) {
            IERC20Minimal(IDraswapV3Pool(msg.sender).token0()).transferFrom(sender, msg.sender, uint256(amount0Delta));
        } else if (amount1Delta > 0) {
            IERC20Minimal(IDraswapV3Pool(msg.sender).token1()).transferFrom(sender, msg.sender, uint256(amount1Delta));
        }
    }
}
