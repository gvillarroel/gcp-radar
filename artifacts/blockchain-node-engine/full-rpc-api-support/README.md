# Full RPC API support

Product: Blockchain Node Engine
Feature slug: `full-rpc-api-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Blockchain Node Engine exposes both a gRPC API (`google.cloud.blockchainnodeengine.v1`) and a REST API (`projects.locations.blockchainNodes`) for blockchain node resources, which provides protocol-level access to node information and interaction endpoints (including `EndpointInfo` and service attachments). The API documentation shows node identifiers as fully qualified resource names (for example, `projects/{project}/locations/{location}/blockchainNodes/{node}`), indicating RPC/REST operations are scoped by full resource names. The evidence supports API availability and resource-level operations but does not explicitly confirm that every possible RPC method is fully implemented.

## Lifecycle

- Latest feature date: 2022-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- identity
- key
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
