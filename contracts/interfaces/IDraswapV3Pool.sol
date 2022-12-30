// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IDraswapV3PoolImmutables.sol';
import './pool/IDraswapV3PoolState.sol';
import './pool/IDraswapV3PoolDerivedState.sol';
import './pool/IDraswapV3PoolActions.sol';
import './pool/IDraswapV3PoolOwnerActions.sol';
import './pool/IDraswapV3PoolEvents.sol';

/// @title The interface for a Draswap V3 Pool
/// @notice A Draswap pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IDraswapV3Pool is
    IDraswapV3PoolImmutables,
    IDraswapV3PoolState,
    IDraswapV3PoolDerivedState,
    IDraswapV3PoolActions,
    IDraswapV3PoolOwnerActions,
    IDraswapV3PoolEvents
{

}
