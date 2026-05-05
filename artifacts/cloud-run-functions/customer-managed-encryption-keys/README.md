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

- access (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- authorization (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- encrypt (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- key (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- role (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- token (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
