---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.827Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service in Cloud console"
feature_slug: "bigquery-data-transfer-service-in-cloud-console"
latest_feature_date: "2019-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
keywords:
  - "bigquery"
  - "transfer"
  - "console"
  - "available"
  - "through"
  - "configuring"
  - "managed"
  - "transfers"
---

# BigQuery Data Transfer Service in Cloud console

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service is available through the Cloud console for configuring managed data transfers.

## Extended Definition

BigQuery Data Transfer Service is available through the Cloud console for configuring managed data transfers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)

## Supporting Pages

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Migrate Apache Hive Metastore tables to Google Cloud This document shows you how to migrate your Iceberg and Hive tables managed by Apache Hive Metastore to Google Cloud using the BigQuery Data Transfer Service .
- To view the progress and status of your resources, select one of the following options: Console In the Google Cloud console, go to the Data transfers page.
- Schedule a Hive Metastore transfer Select one of the following options: Console Go to the Data transfers page in the Google Cloud console.
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- Set up a CSS Center transfer To create a data transfer for CSS Center reporting: Console Go to the Data transfers page in the Google Cloud console.
- Required BigQuery roles To get the permissions that you need to create a BigQuery Data Transfer Service data transfer, ask your administrator to grant you the BigQuery Admin ( roles/bigquery.admin ) IAM role on your project.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.
- Incremental transfers A transfer configuration with an APPEND or WRITE APPEND write preference, also called an incremental transfer, incrementally appends new data since the previous successful transfer to a BigQuery destination table.
- Data ingestion for Cloud Storage transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up a Cloud Storage transfer .

