---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.326Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "HDFS data lake table migration to Google Cloud"
feature_slug: "hdfs-data-lake-table-migration-to-google-cloud"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "hdfs"
  - "lake"
  - "table"
  - "migration"
  - "tables"
  - "can"
  - "migrated"
  - "bigquery"
---

# HDFS data lake table migration to Google Cloud

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Tables can be migrated from an HDFS data lake to Google Cloud for BigQuery use.

## Extended Definition

Tables can be migrated from an HDFS data lake to Google Cloud for BigQuery use.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.
- For Table name patterns , specify HDFS data lake tables to transfer by providing table names or patterns that match tables in the HDFS database.

### Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Snowflake to BigQuery migration tutorials This document provides end-to-end examples and tutorials for the different ways you can set up a Snowflake to BigQuery migration pipeline.
- Snowflake migration pipeline examples You can migrate your data from Snowflake to BigQuery using three different processes: ELT, ETL, or using partner tools.
- You can then load your data from Cloud Storage to BigQuery using one of the following tools: The BigQuery Data Transfer Service for Cloud Storage connector The LOAD command using the bq command-line tool BigQuery API client libraries Other tools to extract data from Snowflake You can also use the following tools to extract data from Snowflake: Dataflow JDBC to BigQuery template SnowflakeIO connector Cloud Data Fusion JDBC drivers Managed Service for Apache Spark Apache Spark BigQuery connector Snowflake connector for Apache Spark Hadoop BigQuery connector The JDBC driver from Snowflake and Sqoop to extract data from Snowflake into Cloud Storage: Moving data with Apache Sqoop in Managed Service for Apache Spark Other tools to load data to BigQuery You can also use the following tools to load data to BigQuery: Dataflow Read from Cloud Storage Write to BigQuery Cloud Storage Text to BigQuery template Cloud Data Fusion Create a target campaign pipeline Managed Service for Apache Spark Cloud Storage connector with Spark Spark BigQuery connector Hadoop Cloud Storage connector Hadoop BigQuery connector Dataprep by Trifacta Read from Cloud Storage Write to BigQuery Extract, transform, and load If you want to transform your data before loading it into BigQuery, consider the following tools: Dataflow Clone the JDBC to BigQuery template code and modify the template to add Apache Beam transforms .
- For a detailed, step-by step process that includes code samples, see the Google Cloud professional services Snowflake to BigQuery tool Prepare for the export You can prepare your Snowflake data for an export by extracting your Snowflake data into a Cloud Storage or an Amazon Simple Storage Service (Amazon S3) bucket with the following steps: Cloud Storage This tutorial prepares the file in PARQUET format.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- The following types of BigLake tables support metadata caching: Amazon S3 BigLake tables Cloud Storage BigLake tables BigQuery uses CMETA as a distributed metadata system to handle large tables efficiently.

