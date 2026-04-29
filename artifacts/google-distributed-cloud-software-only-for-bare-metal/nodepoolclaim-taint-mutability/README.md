# NodePoolClaim taint mutability

Product: Google Distributed Cloud (software only) for bare metal
Feature slug: `nodepoolclaim-taint-mutability`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The spec.taints field in NodePoolClaim is mutable, so you can add or remove taints on existing node pools without recreating the claim.

## Lifecycle

- Latest feature date: 2026-02-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- certificate
- identity
- key
- logging

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config)
