---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.538Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Azure Blob Storage transfers"
feature_slug: "azure-blob-storage-transfers"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer"
keywords:
  - "azure"
  - "blob"
  - "storage"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "can"
  - "into"
---

# Azure Blob Storage transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Azure Blob Storage into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Azure Blob Storage into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)

## Supporting Pages

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- This distinction could increase Blob Storage egress costs for files that are transferred to Google Cloud but not loaded into BigQuery.

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn more about setting up an Azure Blob Storage transfer .
- Data source Source URI or data path Destination table name Cloud Storage gs://bucket/ .csv mytable Amazon S3 s3://bucket/ .csv mytable Blob Storage .csv mytable Load a snapshot of all data into an ingestion-time partitioned table In this case, all data in the specified URI or data path is transferred to a table partitioned by today's date.

### Load Blob Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This client only needs to be created // once, and can be reused for multiple requests. try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Azure Blob Storage transfer created successfully: " + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Azure Blob Storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- Depending on the format of your Blob Storage source data, there may be additional limitations: CSV limitations JSON limitations Limitations on nested and repeated data Data transfers to BigQuery Omni locations are not supported.
- For more information about how BigQuery Data Transfer Service ingests data using either WRITE APPEND or WRITE TRUNCATE , see Data ingestion for Azure Blob transfers .
- Load Blob Storage data into BigQuery You can load data from Blob Storage to BigQuery using the BigQuery Data Transfer Service for Blob Storage connector.

