# ContainerNodePool total maximum node count support

Product: Config Connector
Feature slug: `containernodepool-total-maximum-node-count-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the totalMaxNodeCount field for ContainerNodePool resources.

## Lifecycle

- Latest feature date: 2022-10-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- confidential
- iam
- key
- kms
- logging
- permission
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
