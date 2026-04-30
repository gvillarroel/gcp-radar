# Custom Cloud Build service accounts

Product: Cloud Run functions
Feature slug: `custom-cloud-build-service-accounts`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports custom service accounts for Cloud Build for 1st gen functions; Cloud Run functions supports custom service accounts for Cloud Build for 2nd gen functions.

## Lifecycle

- Latest feature date: 2024-03-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- encrypt
- iam
- key
- kms
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
