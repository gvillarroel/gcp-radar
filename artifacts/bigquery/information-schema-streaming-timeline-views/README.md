# INFORMATION_SCHEMA streaming timeline views

Product: BigQuery
Feature slug: `information-schema-streaming-timeline-views`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

INFORMATION_SCHEMA.STREAMING_TIMELINE_* views expose streaming timeline metadata in BigQuery.

## Lifecycle

- Latest feature date: 2022-02-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-streaming](https://docs.cloud.google.com/bigquery/docs/information-schema-streaming)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions)
