# ComputeInstance nicType

Product: Config Connector
Feature slug: `computeinstance-nictype`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the nicType field on ComputeInstance.

## Lifecycle

- Latest feature date: 2021-02-26
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
- confidential
- constraint
- encrypt
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
