---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.349Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service blob storage to BigLake Iceberg ingestion"
feature_slug: "bigquery-data-transfer-service-blob-storage-to-biglake-iceberg-ingestion"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "DTS blob storage"
  - "ingest to BigLake Iceberg"
  - "blob storage source"
  - "Iceberg ingestion"
  - "Azure Blob Storage"
  - "BigLake Iceberg tables"
  - "Cloud Storage source"
  - "S3"
---

# BigQuery Data Transfer Service blob storage to BigLake Iceberg ingestion

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Data Transfer Service now supports ingesting data from blob storage sources such as S3, Azure Blob Storage, and Cloud Storage into BigLake Iceberg tables.

## Extended Definition

BigQuery Data Transfer Service supports creating transfer configurations from blob-storage sources—specifically Amazon S3, Azure Blob Storage, and Google Cloud Storage—and uses these sources to move data into BigLake Iceberg tables in BigQuery. In the BigQuery CLI, those blob-storage sources are represented as supported `dataSourceIds` for `bq mk --transfer config` workflows, indicating a CLI path for configuring this ingestion.

## Evidence Summary

The release notes explicitly announce BigQuery Data Transfer Service ingestion from S3, Azure Blob Storage, and Cloud Storage into BigLake Iceberg tables, while the CLI reference lists those exact blob storage connectors as valid transfer data source identifiers.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- Example: "arn:aws:iam::0123456789AB:policy/s3-read-role" --tenant id= TENANT ID For BigQuery Omni on Microsoft Azure, specifies the tenant ID of the Microsoft Azure directory that contains the Microsoft Azure Storage account.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use the BigQuery Data Transfer Service to transfer data from blob storage sources , such as Amazon Simple Storage Service (Amazon S3), Azure Blob Storage, and Cloud Storage, into BigLake Iceberg tables in BigQuery.
- January 13, 2025 Feature You can now use BigQuery Omni Virtual Private Cloud (VPC) allowlists to restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs.
- August 22, 2025 Feature Multi-statement transactions are now available for BigLake Iceberg tables in BigQuery .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- The source materialized view must be over an Amazon S3 BigLake table, and must be authorized on the dataset that contains that table. materialized view replica option list The option list lets you set materialized view replica options.
- The source materialized view must be over an Amazon Simple Storage Service (Amazon S3) BigLake table.

