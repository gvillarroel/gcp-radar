# DROP MODEL statement

Product: BigQuery
Feature slug: `drop-model-statement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML supports the DROP MODEL DDL statement for deleting models.

## Lifecycle

- Latest feature date: 2019-05-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
