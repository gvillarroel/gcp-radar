# StorageBucket lifecycle rule prefix and suffix matching

Product: Config Connector
Feature slug: `storagebucket-lifecycle-rule-prefix-and-suffix-matching`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports matchesPrefix and matchesSuffix conditions in StorageBucket lifecycle rules.

## Lifecycle

- Latest feature date: 2022-09-01
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

- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/cloudfunctions/cloudfunctionsfunction](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/cloudfunctions/cloudfunctionsfunction)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagebucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagebucket)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
