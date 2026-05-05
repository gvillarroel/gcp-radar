# SanitizeModelResponse policy

Product: Apigee hybrid
Feature slug: `sanitizemodelresponse-policy`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid supports the SanitizeModelResponse policy for LLM/GenAI workloads to sanitize responses from large language models.

## Lifecycle

- Latest feature date: 2025-10-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls), [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls), [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
