# ComputeBackendService strong affinity connection tracking

Product: Config Connector
Feature slug: `computebackendservice-strong-affinity-connection-tracking`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports strong affinity in ComputeBackendService connection tracking policies.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- constraint
- credential
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeurlmap](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeurlmap)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
