# Direct VPC egress for 2nd gen functions

Product: Cloud Run functions
Feature slug: `direct-vpc-egress-for-2nd-gen-functions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports configuring Direct VPC egress for 2nd gen functions; Cloud Run functions supports configuring Direct VPC egress for 2nd gen functions.

## Lifecycle

- Latest feature date: 2026-02-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- credential
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

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
