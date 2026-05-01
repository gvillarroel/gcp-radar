# Internal ingress from Workflows

Product: Cloud Run functions
Feature slug: `internal-ingress-from-workflows`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports internal ingress from Workflows.

## Lifecycle

- Latest feature date: 2021-12-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- iam
- identity
- key
- kms
- permission
- policy
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
