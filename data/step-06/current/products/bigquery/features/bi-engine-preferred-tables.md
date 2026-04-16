---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.680Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BI Engine preferred tables"
feature_slug: "bi-engine-preferred-tables"
latest_feature_date: "2022-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "bi"
  - "engine"
  - "preferred"
  - "tables"
  - "let"
  - "you"
  - "limit"
  - "acceleration"
---

# BI Engine preferred tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BI Engine preferred tables let you limit BI Engine acceleration to a specified set of tables.

## Extended Definition

BI Engine preferred tables let you limit BI Engine acceleration to a specified set of tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- The following options are supported: NAME VALUE Details size gb INT64 Specifies the size of the reservation in gigabytes. preferred tables <ARRAY<STRING>> List of tables that acceleration should be applied to.
- Syntax ALTER BI CAPACITY project id.location id.default SET OPTIONS ( bi capacity options list ) Arguments project id : Optional project ID of the project that will benefit from BI Engine acceleration.
- The table snapshot is created in the dataset mydataset and is named mytablesnapshot : CREATE SNAPSHOT TABLE myproject . mydataset . mytablesnapshot CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "my table snapshot" , description = "A table snapshot that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) If the table snapshot name already exists in the dataset, then the following error is returned: Already Exists: myproject.mydataset.mytablesnapshot The table snapshot option list specifies the following: Expiration time: 48 hours after the time the table snapshot is created Friendly name: my table snapshot Description: A table snapshot that expires in 2 days Label: org unit = development Create a table snapshot: ignore if it already exists The following example creates a table snapshot of the table myproject.mydataset.mytable .

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- Migrate Apache Hive Metastore tables to Google Cloud This document shows you how to migrate your Iceberg and Hive tables managed by Apache Hive Metastore to Google Cloud using the BigQuery Data Transfer Service .
- For example: db1.. : specifies all tables in the database db1.table1;db2.table2 : a list of tables DUMPER BUCKET : the Cloud Storage bucket containing the hive-dumper-output.zip file.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Maximum number of API requests limit errors BigQuery returns this error when you reach the rate limit for the number of API requests to a BigQuery API per user per method—for example, the tables.get method calls from a service account, or the jobs.insert method calls from a different user email.
- Maximum rate of table metadata update operations limit errors BigQuery returns this error when your table reaches the limit for maximum rate of table metadata update operations per table for standard tables.
- Table imports or query appends quota errors BigQuery returns this error message when your table reaches the limit for table operations per day for standard tables.
- To see the value of the Number of partition modifications per column-partitioned table per day limit, see Partitioned tables .

