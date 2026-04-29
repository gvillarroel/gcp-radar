# Fully automatic security updates

Product: Cloud Run functions
Feature slug: `fully-automatic-security-updates`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports fully automatic security updates for 2nd gen functions; Cloud Run functions supports fully automatic security updates for 1st gen functions.

## Lifecycle

- Latest feature date: 2024-06-24
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
- permission
- policy
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
