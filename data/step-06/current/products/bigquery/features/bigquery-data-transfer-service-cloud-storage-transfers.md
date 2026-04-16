---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.843Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Cloud Storage transfers"
feature_slug: "bigquery-data-transfer-service-cloud-storage-transfers"
latest_feature_date: "2018-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
keywords:
  - "bigquery"
  - "transfer"
  - "storage"
  - "transfers"
  - "supports"
---

# BigQuery Data Transfer Service Cloud Storage transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports transfers from Cloud Storage.

## Extended Definition

BigQuery Data Transfer Service supports transfers from Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)

## Supporting Pages

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- Supported file formats The BigQuery Data Transfer Service supports loading data from Blob Storage in the following formats: Comma-separated values (CSV) JSON (newline delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Blob Storage supports loading compressed data.
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported file formats The BigQuery Data Transfer Service supports loading data from Cloud Storage in one of the following formats: Comma-separated values (CSV) JSON (newline-delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Cloud Storage supports loading compressed data.
- Data ingestion for Cloud Storage transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up a Cloud Storage transfer .
- Introduction to Cloud Storage transfers The BigQuery Data Transfer Service for Cloud Storage lets you schedule recurring data loads from Cloud Storage buckets to BigQuery.
- For cross-location transfers from Cloud Storage, pricing is determined by the location of the Cloud Storage bucket and the location of the destination BigQuery dataset.

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Templating system Cloud Storage, Blob Storage, and Amazon S3 transfers support runtime parameters in the destination table name by using a templating syntax.
- For Cloud Storage, Blob Storage, and Amazon S3 transfers, the ingestion time is the transfer's run time.

