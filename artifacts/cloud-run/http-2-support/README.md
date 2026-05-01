# HTTP/2 support

Product: Cloud Run
Feature slug: `http-2-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports HTTP/2 for service communication.

## Lifecycle

- Latest feature date: 2021-01-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- identity
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
