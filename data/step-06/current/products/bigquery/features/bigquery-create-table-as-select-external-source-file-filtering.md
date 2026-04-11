---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.679Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CREATE TABLE AS SELECT external source file filtering"
feature_slug: "bigquery-create-table-as-select-external-source-file-filtering"
latest_feature_date: "2023-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "CTAS external file filtering"
  - "CTAS filtering"
  - "filter external files before load"
  - "external file filter"
  - "source file filter"
  - "CREATE TABLE AS SELECT"
  - "Azure Blob Storage"
  - "Amazon S3"
---

# BigQuery CREATE TABLE AS SELECT external source file filtering

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now allows CREATE TABLE AS SELECT to filter data from Amazon S3 and Azure Blob Storage files before loading into destination tables.

## Extended Definition

BigQuery `CREATE TABLE AS SELECT` (CTAS) is a GoogleSQL DDL statement that creates a table from the result of a `SELECT` query. In documented examples, CTAS can load data from a BigLake table referencing external Amazon S3 data and apply a `WHERE` filter in the query to load only a subset of rows. The provided excerpts do not directly document CTAS file-level filtering for Azure Blob Storage, so that part of the feature is weakly evidenced here.

## Evidence Summary

The DDL reference page documents CTAS as a supported DDL operation and shows filtered loading from an Amazon S3-backed BigLake table via `SELECT ... WHERE`, while the bq CLI reference only corroborates source options such as Amazon S3 and Azure Blob Storage in transfer-related commands, not CTAS behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- DDL functionality extends the information returned by a Jobs resource . statistics.query.statementType includes the following additional values: CREATE TABLE CREATE TABLE AS SELECT DROP TABLE CREATE VIEW DROP VIEW statistics.query has 2 additional fields: ddlOperationPerformed : The DDL operation performed, possibly dependent on the existence of the DDL target.
- The source materialized view must be over an Amazon S3 BigLake table, and must be authorized on the dataset that contains that table. materialized view replica option list The option list lets you set materialized view replica options.

