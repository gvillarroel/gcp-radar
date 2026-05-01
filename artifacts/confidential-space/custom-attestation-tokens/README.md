# Custom attestation tokens

Product: Confidential Space
Feature slug: `custom-attestation-tokens`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Confidential Space supports custom attestation tokens for authenticating workloads to relying parties outside Google Cloud.

## Lifecycle

- Latest feature date: 2023-12-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- confidential
- encrypt
- iam
- identity
- key
- kms
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
