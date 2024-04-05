// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { TallyNonQv } from "./TallyNonQv.sol";
import { ITallyFactory } from "./interfaces/ITallyFactory.sol";

/// @title TallyNonQvFactory
/// @notice A factory contract which deploys TallyNonQv contracts.
contract TallyNonQvFactory is ITallyFactory {
  /// @inheritdoc ITallyFactory
  function deploy(
    address _verifier,
    address _vkRegistry,
    address _poll,
    address _messageProcessor,
    address _owner
  ) public virtual returns (address tallyAddr) {
    // deploy Tally for this Poll
    TallyNonQv tally = new TallyNonQv(_verifier, _vkRegistry, _poll, _messageProcessor);
    tally.transferOwnership(_owner);
    tallyAddr = address(tally);
  }
}
