# Time-partitioned tables

Product: BigQuery
Feature slug: `time-partitioned-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports time-partitioned tables for organizing data by time partitions.

## Lifecycle

- Latest feature date: 2016-06-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset))
- authorization (evidence: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
