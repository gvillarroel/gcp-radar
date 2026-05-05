# Single-operation node provisioning

Product: Blockchain Node Engine
Feature slug: `single-operation-node-provisioning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A node can be provisioned in one operation by specifying configuration and automatically bootstrapping and syncing it.

## Lifecycle

- Latest feature date: 2023-06-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get))
- authorization (evidence: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get))
- iam (evidence: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get))
- permission (evidence: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete), [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get))

## Official Evidence

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get)
