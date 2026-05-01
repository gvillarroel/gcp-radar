# ComputeBackendService security settings

Product: Config Connector
Feature slug: `computebackendservice-security-settings`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the securitySettings field on ComputeBackendService resources.

## Lifecycle

- Latest feature date: 2021-09-10
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
