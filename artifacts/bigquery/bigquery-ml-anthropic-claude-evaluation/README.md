# BigQuery ML Anthropic Claude evaluation

Product: BigQuery
Feature slug: `bigquery-ml-anthropic-claude-evaluation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML can evaluate Anthropic Claude models with the ML.EVALUATE function.

## Lifecycle

- Latest feature date: 2025-01-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey), [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate)
