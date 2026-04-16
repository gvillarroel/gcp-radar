---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.389Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery migration assessment for Oracle TCO calculator"
feature_slug: "bigquery-migration-assessment-for-oracle-tco-calculator"
latest_feature_date: "2025-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
  - "https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials"
keywords:
  - "bigquery"
  - "migration"
  - "assessment"
  - "oracle"
  - "tco"
  - "calculator"
  - "includes"
  - "total"
---

# BigQuery migration assessment for Oracle TCO calculator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery migration assessment for Oracle includes a total cost of ownership calculator for migration cost estimates.

## Extended Definition

The BigQuery migration assessment for Oracle includes a total cost of ownership calculator for migration cost estimates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Migration Service includes the following features: BigQuery migration assessment : Assess and plan your data warehouse migration by running a BigQuery migration assessment .
- It includes features that help you with each phase of migration, including assessment and planning, SQL translation for a variety of SQL dialects , data transfer, and data validation.
- For more information on BigQuery migration assessment, see BigQuery migration assessment .
- You can also use the following open-source tools to help you with your migration process: Data migration tool : Use the data migration tool to automate your data warehouse migration to BigQuery.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Cloudera Run the following command to extract metadata from Cloudera using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector cloudera-manager \ --url CLOUDERA-URL \ --user CLOUDERA-USER \ --password CLOUDERA-PASSWORD \ --output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \ --yarn-application-types APPLICATION-TYPES \ --pagination-page-size PAGE-SIZE \ --assessment \ Replace the following: CLOUDERA-URL : the URL for Cloudera Manager CLOUDERA-USER : the username of the Cloudera user CLOUDERA-PASSWORD : the password of the Cloudera user MIGRATION-BUCKET : the Cloud Storage bucket that you are using to store the migration files.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- HDFS Run the following command to extract metadata from HDFS using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector hdfs \ --host HDFS-HOST \ --port HDFS-PORT \ --output gs:// MIGRATION-BUCKET /hdfs-dumper-output.zip \ --assessment \ Replace the following: HDFS-HOST : the HDFS NameNode hostname HDFS-PORT : the HDFS NameNode port number.
- Apache Hive query logs Perform the steps in the Apache Hive section Extract query logs with the hadoop-migration-assessment logging hook to extract your Apache Hive query logs.

### Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- For a detailed, step-by step process that includes code samples, see the Google Cloud professional services Snowflake to BigQuery tool Prepare for the export You can prepare your Snowflake data for an export by extracting your Snowflake data into a Cloud Storage or an Amazon Simple Storage Service (Amazon S3) bucket with the following steps: Cloud Storage This tutorial prepares the file in PARQUET format.
- Snowflake to BigQuery migration tutorials This document provides end-to-end examples and tutorials for the different ways you can set up a Snowflake to BigQuery migration pipeline.
- Snowflake migration pipeline examples You can migrate your data from Snowflake to BigQuery using three different processes: ELT, ETL, or using partner tools.
- You can then load your data from Cloud Storage to BigQuery using one of the following tools: The BigQuery Data Transfer Service for Cloud Storage connector The LOAD command using the bq command-line tool BigQuery API client libraries Other tools to extract data from Snowflake You can also use the following tools to extract data from Snowflake: Dataflow JDBC to BigQuery template SnowflakeIO connector Cloud Data Fusion JDBC drivers Managed Service for Apache Spark Apache Spark BigQuery connector Snowflake connector for Apache Spark Hadoop BigQuery connector The JDBC driver from Snowflake and Sqoop to extract data from Snowflake into Cloud Storage: Moving data with Apache Sqoop in Managed Service for Apache Spark Other tools to load data to BigQuery You can also use the following tools to load data to BigQuery: Dataflow Read from Cloud Storage Write to BigQuery Cloud Storage Text to BigQuery template Cloud Data Fusion Create a target campaign pipeline Managed Service for Apache Spark Cloud Storage connector with Spark Spark BigQuery connector Hadoop Cloud Storage connector Hadoop BigQuery connector Dataprep by Trifacta Read from Cloud Storage Write to BigQuery Extract, transform, and load If you want to transform your data before loading it into BigQuery, consider the following tools: Dataflow Clone the JDBC to BigQuery template code and modify the template to add Apache Beam transforms .

