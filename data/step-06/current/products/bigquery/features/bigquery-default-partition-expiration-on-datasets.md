---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.864Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery default partition expiration on datasets"
feature_slug: "bigquery-default-partition-expiration-on-datasets"
latest_feature_date: "2018-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.Dataset"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "dataset-level partition expiration"
  - "default partition expiration time"
  - "set dataset partition expiration"
  - "dataset default partition TTL"
  - "default partition expiration"
  - "partition expiration default"
  - "defaultPartitionExpirationMs"
---

# BigQuery default partition expiration on datasets

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports setting or updating default partition expiration time at the dataset level.

## Extended Definition

BigQuery now supports setting or updating default partition expiration time at the dataset level.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.Dataset](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.Dataset)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Class Dataset (3.40.1) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.Dataset](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.Dataset)
- Source ID: `site-python-reference`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The Dataset class reference explicitly documents the dataset-level `default partition expiration ms` property and its effect on partitioned tables, which directly defines this feature.

Evidence snippets:
- If you provide an explicit time partitioning.expiration ms when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property. default rounding mode Union[str, None]: defaultRoundingMode of the dataset as set by the user (defaults to :data: None ).
- See protecting data with Cloud KMS keys < https://cloud.google.com/bigquery/docs/customer-managed-encryption> ; in the BigQuery documentation. default partition expiration ms Optional[int]: The default partition expiration for all partitioned tables in the dataset, in milliseconds.
- Setting this property overrides the use of default table expiration ms for partitioned tables: only one of default table expiration ms and default partition expiration ms will be used for any new partitioned table.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Each tag must have the namespaced key name and value short name . --default kms key= KEY Specifies the default Cloud KMS key resource ID for encrypting the table data in a dataset if no explicit key is provided during table creation or query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly-created partitioned tables in the dataset.
- If you supply the --time partitioning expiration flag when you create or update a partitioned table, then the table-level partition expiration takes precedence over the dataset-level default partition expiration. --default table expiration= SECONDS An integer that specifies the default lifetime, in seconds, for newly created tables in a dataset.
- The default key is used if no explicit key is provided for a table creation or a query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly created partitioned tables in the dataset.
- If you supply the --time partitioning expiration flag when you create or update a partitioned table, then the table-level partition expiration takes precedence over the dataset-level default partition expiration.

