# Simple Multi-Sig Wallet

A robust and professional implementation of a Multi-Signature wallet. This contract ensures that no single individual has control over the funds; instead, a predefined number of approvals (quorum) is required to execute any external transaction.

## Features
* **Quorum-Based Execution:** Transactions only proceed if the required number of owners approve.
* **Transaction Queue:** Propose, view, and confirm transactions before they are sent.
* **Security Guardrails:** Built-in checks to prevent duplicate voting or unauthorized access.

## Getting Started
1. Deploy the `MultiSig.sol` contract with an array of owner addresses and the required number of confirmations.
2. An owner calls `submitTransaction` to propose a spend.
3. Other owners call `confirmTransaction` using the transaction ID.
4. Once the quorum is reached, any owner can call `executeTransaction`.

## License
MIT
