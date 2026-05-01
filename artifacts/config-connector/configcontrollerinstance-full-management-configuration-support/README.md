# ConfigControllerInstance full management configuration support

Product: Config Connector
Feature slug: `configcontrollerinstance-full-management-configuration-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.managementConfig.fullManagementConfig field for ConfigControllerInstance resources.

## Lifecycle

- Latest feature date: 2022-11-15
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
- firewall
- iam
- identity
- key
- kms
- logging
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
