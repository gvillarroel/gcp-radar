# Terraform support for 2nd gen functions

Product: Cloud Run functions
Feature slug: `terraform-support-for-2nd-gen-functions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports managing 2nd gen functions with Terraform.

## Lifecycle

- Latest feature date: 2022-03-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- iam
- identity
- key
- kms
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
