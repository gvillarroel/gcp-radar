# Firestore triggers through Eventarc

Product: Cloud Run functions
Feature slug: `firestore-triggers-through-eventarc`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports 2nd gen Firestore triggers through Eventarc.

## Lifecycle

- Latest feature date: 2023-05-15
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
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
