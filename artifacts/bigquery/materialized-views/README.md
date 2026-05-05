# Materialized views

Product: BigQuery
Feature slug: `materialized-views`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Materialized views are precomputed views that cache query results to improve performance and reduce cost in BigQuery; BigQuery supports materialized views for precomputed query results.

## Lifecycle

- Latest feature date: 2021-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/mcp/ai-security-safety](https://docs.cloud.google.com/mcp/ai-security-safety), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- auth (evidence: [https://docs.cloud.google.com/mcp/ai-security-safety](https://docs.cloud.google.com/mcp/ai-security-safety), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- identity (evidence: [https://docs.cloud.google.com/mcp/ai-security-safety](https://docs.cloud.google.com/mcp/ai-security-safety), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- security (evidence: [https://docs.cloud.google.com/mcp/ai-security-safety](https://docs.cloud.google.com/mcp/ai-security-safety), [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))

## Official Evidence

- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/mcp/ai-security-safety](https://docs.cloud.google.com/mcp/ai-security-safety)
- [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
