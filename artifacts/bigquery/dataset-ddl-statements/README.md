# Dataset DDL statements

Product: BigQuery
Feature slug: `dataset-ddl-statements`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports CREATE SCHEMA, ALTER SCHEMA, and DROP SCHEMA statements for dataset lifecycle management.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- identity
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transformation)
- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
