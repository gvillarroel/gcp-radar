---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.643Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LOAD DATA cross-cloud transfers"
feature_slug: "load-data-cross-cloud-transfers"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
keywords:
  - "load"
  - "cross"
  - "transfers"
  - "statement"
  - "can"
  - "transfer"
  - "amazon"
  - "s3"
---

# LOAD DATA cross-cloud transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The LOAD DATA statement can transfer data from Amazon S3 and Azure Blob Storage into BigQuery.

## Extended Definition

The LOAD DATA statement can transfer data from Amazon S3 and Azure Blob Storage into BigQuery.

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
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Data source Source URI or data path Destination table name Cloud Storage gs://bucket/ .csv mytable Amazon S3 s3://bucket/ .csv mytable Blob Storage .csv mytable Load a snapshot of all data into an ingestion-time partitioned table In this case, all data in the specified URI or data path is transferred to a table partitioned by today's date.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Transfer data to a non-partitioned table This use case applies to loading new files from a Cloud Storage, Blob Storage, or Amazon S3 bucket into a non-partitioned table.

### "Runtime parameters in Cloud Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Data source Source URI or data path Destination table name Cloud Storage gs://bucket/ .csv mytable Amazon S3 s3://bucket/ .csv mytable Blob Storage .csv mytable Load a snapshot of all data into an ingestion-time partitioned table In this case, all data in the specified URI or data path is transferred to a table partitioned by today's date.
- Runtime parameters in Cloud Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Transfer data to a non-partitioned table This use case applies to loading new files from a Cloud Storage, Blob Storage, or Amazon S3 bucket into a non-partitioned table.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Data ingestion for Cloud Storage transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up a Cloud Storage transfer .
- Introduction to Cloud Storage transfers The BigQuery Data Transfer Service for Cloud Storage lets you schedule recurring data loads from Cloud Storage buckets to BigQuery.
- For cross-location transfers from Cloud Storage, pricing is determined by the location of the Cloud Storage bucket and the location of the destination BigQuery dataset.
- All BigQuery quotas and limits on load jobs apply to recurring Cloud Storage load jobs, with the following additional considerations: Value Limit Maximum size per load job transfer run 15 TB Maximum number of files per transfer run 10,000 files Pricing After data is transferred to BigQuery, standard BigQuery storage and query pricing applies.

