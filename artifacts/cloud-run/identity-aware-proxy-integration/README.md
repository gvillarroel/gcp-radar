# Identity-Aware Proxy integration

Product: Cloud Run
Feature slug: `identity-aware-proxy-integration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run can be configured directly with Identity-Aware Proxy to protect services without a load balancer; Cloud Run supports configuring Identity-Aware Proxy to secure services across ingress paths.

## Lifecycle

- Latest feature date: 2026-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- identity

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequestOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequestOrBuilder)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
