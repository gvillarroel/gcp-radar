# IndirectBigQueryOutputFormat

Product: Dataproc
Feature slug: `indirectbigqueryoutputformat`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IndirectBigQueryOutputFormat writes output to a temporary Cloud Storage bucket and submits one BigQuery load job at job commit time.

## Lifecycle

- Latest feature date: 2016-11-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example), [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial), [https://docs.cloud.google.com/dataproc/docs/guides/load-data](https://docs.cloud.google.com/dataproc/docs/guides/load-data))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/load-data](https://docs.cloud.google.com/dataproc/docs/guides/load-data)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
