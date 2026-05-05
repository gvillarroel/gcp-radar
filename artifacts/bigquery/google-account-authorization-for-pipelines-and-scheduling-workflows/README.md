# Google Account authorization for pipelines and scheduling workflows

Product: BigQuery
Feature slug: `google-account-authorization-for-pipelines-and-scheduling-workflows`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Google Account user credentials can authorize creating, scheduling, and running pipelines and scheduling notebooks and data preparations.

## Lifecycle

- Latest feature date: 2025-05-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- authorization (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- secret (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer), [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview), [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)
