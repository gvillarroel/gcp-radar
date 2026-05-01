# Shared VPC ingress

Product: Cloud Run functions
Feature slug: `shared-vpc-ingress`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports Shared VPC ingress for 2nd gen functions and treats Shared VPC traffic as internal; Cloud Run functions 2nd gen supports accepting requests from a connected Shared VPC network, including with internal ingress settings.

## Lifecycle

- Latest feature date: 2023-10-11
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
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
