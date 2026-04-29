# Node.js 22 runtime

Product: Cloud Run functions
Feature slug: `node-js-22-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports the Node.js 22 runtime for 1st gen functions; Cloud Run functions supports the Node.js 22 runtime.

## Lifecycle

- Latest feature date: 2025-10-07
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
- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
