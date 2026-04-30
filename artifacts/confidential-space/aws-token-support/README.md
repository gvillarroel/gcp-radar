# AWS token support

Product: Confidential Space
Feature slug: `aws-token-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Confidential Space supports AWS tokens for integration with AWS resources.

## Lifecycle

- Latest feature date: 2025-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- confidential
- iam
- identity
- key
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
