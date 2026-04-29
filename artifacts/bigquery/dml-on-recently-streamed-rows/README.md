# DML on recently streamed rows

Product: BigQuery
Feature slug: `dml-on-recently-streamed-rows`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery lets you use DML to modify rows that were recently written through the Storage Write API.

## Lifecycle

- Latest feature date: 2023-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- identity

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/mcp/prevent-read-write-tool-use](https://docs.cloud.google.com/mcp/prevent-read-write-tool-use)
