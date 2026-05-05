# INT64 aliases

Product: BigQuery
Feature slug: `int64-aliases`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports alternate SQL aliases for INT64, including INT, SMALLINT, INTEGER, BIGINT, TINYINT, and BYTEINT.

## Lifecycle

- Latest feature date: 2021-06-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage), [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage), [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage), [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage), [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage), [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro), [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage), [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
