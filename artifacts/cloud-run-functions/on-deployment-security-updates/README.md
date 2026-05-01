# On-deployment security updates

Product: Cloud Run functions
Feature slug: `on-deployment-security-updates`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports applying security updates during deployment for 1st gen and 2nd gen functions.

## Lifecycle

- Latest feature date: 2023-11-08
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
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/overview](https://docs.cloud.google.com/functions/docs/securing/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
