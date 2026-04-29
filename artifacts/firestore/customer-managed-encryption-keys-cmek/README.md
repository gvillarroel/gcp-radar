# Customer-managed encryption keys (CMEK)

Product: Firestore
Feature slug: `customer-managed-encryption-keys-cmek`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports customer-managed encryption keys for protecting data.

## Lifecycle

- Latest feature date: 2024-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- encrypt
- key
- kms

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
