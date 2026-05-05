# BigQuery ML TRANSFORM clause model export

Product: BigQuery
Feature slug: `bigquery-ml-transform-clause-model-export`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML can train models with the TRANSFORM clause and export them in TensorFlow SavedModel format.

## Lifecycle

- Latest feature date: 2023-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
