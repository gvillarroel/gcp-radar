# Custom constraints for function resources

Product: Cloud Run functions
Feature slug: `custom-constraints-for-function-resources`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports managing function resources with custom constraints enforced at the project level; Cloud Run functions supports managing function resources with custom constraints enforced at the project level.

## Lifecycle

- Latest feature date: 2024-10-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- authorization (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- constraint (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- encrypt (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- key (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- role (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))
- token (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
