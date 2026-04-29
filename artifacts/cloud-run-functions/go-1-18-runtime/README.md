# Go 1.18 runtime

Product: Cloud Run functions
Feature slug: `go-1-18-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports the Go 1.18 runtime.

## Lifecycle

- Latest feature date: 2023-01-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- logging
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
