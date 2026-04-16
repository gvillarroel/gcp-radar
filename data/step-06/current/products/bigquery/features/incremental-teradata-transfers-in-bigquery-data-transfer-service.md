---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.421Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Incremental Teradata transfers in BigQuery Data Transfer Service"
feature_slug: "incremental-teradata-transfers-in-bigquery-data-transfer-service"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
keywords:
  - "incremental"
  - "teradata"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "supports"
  - "when"
  - "migrating"
---

# Incremental Teradata transfers in BigQuery Data Transfer Service

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports incremental transfers when migrating data from Teradata data warehouses to BigQuery.

## Extended Definition

BigQuery Data Transfer Service supports incremental transfers when migrating data from Teradata data warehouses to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)

## Supporting Pages

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.
- Incremental transfers A transfer configuration with an APPEND or WRITE APPEND write preference, also called an incremental transfer, incrementally appends new data since the previous successful transfer to a BigQuery destination table.
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.
- Incremental transfers A transfer configuration with an APPEND or WRITE APPEND write preference, also called an incremental transfer, incrementally appends new data since the previous successful transfer to a BigQuery destination table.
- Data ingestion for Cloud Storage transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up a Cloud Storage transfer .
- Supported file formats The BigQuery Data Transfer Service supports loading data from Cloud Storage in one of the following formats: Comma-separated values (CSV) JSON (newline-delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Cloud Storage supports loading compressed data.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Incremental transfers When a transfer configuration is set up with a recurring schedule, every subsequent transfer updates the table on Google Cloud with the latest updates made to the source table.
- If you are using a service account, grant the service agent the roles/iam.serviceAccountTokenCreator role with the following command: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT --member serviceAccount:service- PROJECT NUMBER @gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com --role roles/iam.serviceAccountTokenCreator Grant the Storage Transfer Service service agent ( project- PROJECT NUMBER @storage-transfer-service.iam.gserviceaccount.com ) the following roles in the project: roles/storage.admin If you are migrating from on-prem/HDFS, you must also grant the roles/storagetransfer.serviceAgent role.
- 30 2 PATH TO SCRIPT \ --dumper-executable PATH TO DUMPER EXECUTABLE \ --gcs-base-path GCS PATH TO UPLOAD DUMPER OUTPUT \ --local-base-dir LOCAL PATH TO SAVE INTERMEDIARY FILES If your Hive Metastore instance requires Kerberos authentication, run the following command: Run the Hive dumper daily at 2 :30 AM for incremental BigQuery transfer with Kerberos authentication.
- The following examples run the script every day at 2:30 AM: If you are running on a host that has direct access to Hive Metastore and doesn't require Kerberos authentication, run the following command: Run the Hive dumper daily at 2 :30 AM for incremental BigQuery transfer.

