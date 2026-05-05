# EXTERNAL_QUERY SQL pushdown

Product: BigQuery
Feature slug: `external-query-sql-pushdown`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

EXTERNAL_QUERY SQL pushdown reduces transferred data for federated queries by applying column pruning and filter pushdowns to supported external sources; EXTERNAL_QUERY SQL pushdown reduces transferred data for federated queries by applying column pruning and filter pushdowns to supported external sources.

## Lifecycle

- Latest feature date: 2023-05-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions)
