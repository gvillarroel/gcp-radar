# Validator and staking workflow support via consensus layer

Product: Blockchain Node Engine
Feature slug: `validator-and-staking-workflow-support-via-consensus-layer`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The feature is support for configuring consensus-layer validator behavior on Blockchain Node Engine Ethereum nodes through the node resource schema. The REST/RPC definitions expose a `validatorConfig` field (for validator-related parameters on the beacon client and managed validator clients), and a `consensusClient` field in Ethereum node details, which indicates the consensus-layer client configuration pathway. In the same node model, endpoint exposure options are represented (including additional endpoints), and a private-access option is available when nodes are reachable only via Private Service Connect.

## Lifecycle

- Latest feature date: 2023-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- firewall
- iam
- identity
- key
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
