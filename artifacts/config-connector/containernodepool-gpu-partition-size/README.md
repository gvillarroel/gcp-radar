# ContainerNodePool GPU partition size

Product: Config Connector
Feature slug: `containernodepool-gpu-partition-size`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports configuring GPU partition size on ContainerNodePool resources.

## Lifecycle

- Latest feature date: 2021-11-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- confidential
- constraint
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
