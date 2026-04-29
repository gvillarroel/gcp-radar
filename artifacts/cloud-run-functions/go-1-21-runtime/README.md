# Go 1.21 runtime

Product: Cloud Run functions
Feature slug: `go-1-21-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports the Go 1.21 runtime; Cloud Run functions supports the Go 1.21 runtime.

## Lifecycle

- Latest feature date: 2023-09-07
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
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
