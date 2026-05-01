# IAMPartialPolicy SQL instance member reference support

Product: Config Connector
Feature slug: `iampartialpolicy-sql-instance-member-reference-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.bindings[].members[].memberFrom.sqlInstanceRef field for IAMPartialPolicy resources.

## Lifecycle

- Latest feature date: 2022-09-14
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

- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
