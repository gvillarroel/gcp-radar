# KMS key deletion on orphaning

Product: Config Connector
Feature slug: `kms-key-deletion-on-orphaning`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports deleting KMS keys when they are orphaned.

## Lifecycle

- Latest feature date: 2023-07-11
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

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmscryptokey](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmscryptokey)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmskeyhandle](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmskeyhandle)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmskeyring](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmskeyring)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
