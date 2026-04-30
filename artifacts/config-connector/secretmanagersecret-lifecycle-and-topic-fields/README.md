# SecretManagerSecret lifecycle and topic fields

Product: Config Connector
Feature slug: `secretmanagersecret-lifecycle-and-topic-fields`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the expire, rotation, topics, and ttl fields on SecretManagerSecret.

## Lifecycle

- Latest feature date: 2021-07-13
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
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/run/runservice](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/run/runservice)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/secretmanager/secretmanagersecret](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/secretmanager/secretmanagersecret)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
