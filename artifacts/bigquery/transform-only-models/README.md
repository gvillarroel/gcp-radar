# Transform-only models

Product: BigQuery
Feature slug: `transform-only-models`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Transform-only models apply preprocessing rules to input data and return preprocessed results without training a model; Transform-only models apply preprocessing functions to input data and return preprocessed data without model training.

## Lifecycle

- Latest feature date: 2024-04-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key
- kms
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
