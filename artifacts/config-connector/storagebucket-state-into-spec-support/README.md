# StorageBucket state-into-spec support

Product: Config Connector
Feature slug: `storagebucket-state-into-spec-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports state-into-spec behavior for StorageBucket resources.

## Lifecycle

- Latest feature date: 2022-08-04
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

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagebucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagebucket)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
