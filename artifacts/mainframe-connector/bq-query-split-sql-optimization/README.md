# bq query split_sql optimization

Product: Mainframe Connector
Feature slug: `bq-query-split-sql-optimization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The bq query command uses split_sql by default to split multiple SQL statements into parallel requests and skip comment-only statements.

## Lifecycle

- Latest feature date: 2024-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow

## Official Evidence

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)
