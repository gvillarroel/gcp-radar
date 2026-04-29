# Deployment restriction by product generation

Product: Cloud Run functions
Feature slug: `deployment-restriction-by-product-generation`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports restricting new deployments by 1st gen or 2nd gen product generation.

## Lifecycle

- Latest feature date: 2023-05-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- constraint
- iam
- identity
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)
- [https://docs.cloud.google.com/functions/docs/securing/overview](https://docs.cloud.google.com/functions/docs/securing/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
