---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.823Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Amazon S3 transfers"
feature_slug: "bigquery-data-transfer-service-amazon-s3-transfers"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
keywords:
  - "bigquery"
  - "transfer"
  - "amazon"
  - "s3"
  - "transfers"
  - "supports"
  - "loading"
  - "into"
---

# BigQuery Data Transfer Service Amazon S3 transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports loading data into BigQuery from Amazon S3.

## Extended Definition

BigQuery Data Transfer Service supports loading data into BigQuery from Amazon S3.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)

## Supporting Pages

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Transfer data to a non-partitioned table This use case applies to loading new files from a Cloud Storage, Blob Storage, or Amazon S3 bucket into a non-partitioned table.
- Data source Source URI or data path Destination table name Cloud Storage gs://bucket/ .csv mytable Amazon S3 s3://bucket/ .csv mytable Blob Storage .csv mytable Load a snapshot of all data into an ingestion-time partitioned table In this case, all data in the specified URI or data path is transferred to a table partitioned by today's date.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.

### "Runtime parameters in Cloud Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Transfer data to a non-partitioned table This use case applies to loading new files from a Cloud Storage, Blob Storage, or Amazon S3 bucket into a non-partitioned table.
- Data source Source URI or data path Destination table name Cloud Storage gs://bucket/ .csv mytable Amazon S3 s3://bucket/ .csv mytable Blob Storage .csv mytable Load a snapshot of all data into an ingestion-time partitioned table In this case, all data in the specified URI or data path is transferred to a table partitioned by today's date.
- Runtime parameters in Cloud Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported file formats The BigQuery Data Transfer Service supports loading data from Cloud Storage in one of the following formats: Comma-separated values (CSV) JSON (newline-delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Cloud Storage supports loading compressed data.
- Data ingestion for Cloud Storage transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up a Cloud Storage transfer .
- The transfer run succeeds without loading any additional data into the destination BigQuery table.
- The transfer run succeeds without loading any additional data into the destination BigQuery table.

