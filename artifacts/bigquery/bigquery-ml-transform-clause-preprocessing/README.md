# BigQuery ML TRANSFORM clause preprocessing

Product: BigQuery
Feature slug: `bigquery-ml-transform-clause-preprocessing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML supports feature preprocessing with the TRANSFORM clause, including model export and deployment support.

## Lifecycle

- Latest feature date: 2023-07-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview), [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview), [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview), [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview), [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview)
