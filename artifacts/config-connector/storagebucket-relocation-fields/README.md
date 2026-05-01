# StorageBucket relocation fields

Product: Config Connector
Feature slug: `storagebucket-relocation-fields`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector removed immutability constraints on StorageBucket location and custom placement data location fields to support bucket relocation scenarios.

## Lifecycle

- Latest feature date: 2025-06-10
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
- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagebucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagebucket)
