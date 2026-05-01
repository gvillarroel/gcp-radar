# Go 1.24 runtime

Product: Cloud Run
Feature slug: `go-1-24-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the Go 1.24 runtime for deployed workloads; Cloud Run supports the Go 1.24 runtime for deployed workloads.

## Lifecycle

- Latest feature date: 2025-07-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
