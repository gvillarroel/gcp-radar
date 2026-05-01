# Deploy v2 functions in Cloud Run

Product: Cloud Run functions
Feature slug: `deploy-v2-functions-in-cloud-run`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports deploying v2 functions in Cloud Run with Cloud Run service customization.

## Lifecycle

- Latest feature date: 2025-02-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- constraint
- iam
- permission
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/concepts/overview](https://docs.cloud.google.com/functions/docs/concepts/overview)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get)
- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
