# Search index column granularity

Product: BigQuery
Feature slug: `search-index-column-granularity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery search indexes can store additional column information to optimize search query performance; BigQuery search indexes can now be created with column granularity to store more column information and improve query performance.

## Lifecycle

- Latest feature date: 2026-04-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options), [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns), [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options), [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns), [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options), [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns), [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options), [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns), [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
