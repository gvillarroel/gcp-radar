# GROUP BY and SELECT DISTINCT support for ARRAY and STRUCT

Product: BigQuery
Feature slug: `group-by-and-select-distinct-support-for-array-and-struct`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports using the GROUP BY clause and the SELECT DISTINCT clause with ARRAY and STRUCT data types.

## Lifecycle

- Latest feature date: 2024-08-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- identity
- key
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
