# Firestore customer-managed encryption keys

Product: Firestore
Feature slug: `firestore-customer-managed-encryption-keys`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports customer-managed encryption keys (CMEK).

## Lifecycle

- Latest feature date: 2024-04-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview))
- constraint (evidence: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview))
- encrypt (evidence: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview))
- key (evidence: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview))
- kms (evidence: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
- [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
