# Ethereum Proof of Stake support

Product: Blockchain Node Engine
Feature slug: `ethereum-proof-of-stake-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Blockchain Node Engine’s Ethereum capability is exposed through `EthereumDetails`, which includes both `consensusClient` and `executionClient` configuration fields. The `consensusClient` (beacon/CL client) is documented as implementing the proof-of-stake consensus algorithm, and the `executionClient` executes Ethereum transactions in the EVM, meaning Ethereum nodes in this service are represented with a PoS + execution client model.

## Lifecycle

- Latest feature date: 2022-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- private (evidence: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1))

## Official Evidence

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
