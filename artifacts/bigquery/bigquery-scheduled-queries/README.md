# BigQuery scheduled queries

Product: BigQuery
Feature slug: `bigquery-scheduled-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports scheduling queries to run automatically.

## Lifecycle

- Latest feature date: 2018-09-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- iam
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
