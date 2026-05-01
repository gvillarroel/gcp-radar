# Customer-managed encryption keys

Product: Cloud Run functions
Feature slug: `customer-managed-encryption-keys`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports customer-managed encryption keys for 2nd gen functions; Cloud Run functions supports customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2023-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- iam
- identity
- key
- kms
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
