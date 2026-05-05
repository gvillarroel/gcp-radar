# JDBC MATERIALIZED_VIEW table type support

Product: BigQuery
Feature slug: `jdbc-materialized-view-table-type-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The BigQuery JDBC driver includes MATERIALIZED_VIEW in getTableTypes results.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views](https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
