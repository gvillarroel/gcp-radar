# Go 1.26 runtime

Product: Cloud Run
Feature slug: `go-1-26-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the Go 1.26 runtime for services; Cloud Run supports the Go 1.26 runtime for services.

## Lifecycle

- Latest feature date: 2026-03-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- identity

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
