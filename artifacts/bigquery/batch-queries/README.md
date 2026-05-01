# Batch queries

Product: BigQuery
Feature slug: `batch-queries`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Batch queries run queries asynchronously using idle resources and can fall back to interactive priority after a delay; Batch queries let BigQuery execute queries later at lower cost than immediate interactive queries.

## Lifecycle

- Latest feature date: 2014-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
