---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.547Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Migration assessment for Snowflake"
feature_slug: "migration-assessment-for-snowflake"
latest_feature_date: "2023-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials"
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration"
keywords:
  - "migration"
  - "assessment"
  - "snowflake"
  - "bigquery"
  - "can"
  - "evaluate"
  - "complexity"
  - "migrating"
---

# Migration assessment for Snowflake

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery migration assessment can evaluate the complexity of migrating a Snowflake warehouse to BigQuery.

## Extended Definition

BigQuery migration assessment can evaluate the complexity of migrating a Snowflake warehouse to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)

## Supporting Pages

### Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Snowflake to BigQuery migration tutorials This document provides end-to-end examples and tutorials for the different ways you can set up a Snowflake to BigQuery migration pipeline.
- Snowflake migration pipeline examples You can migrate your data from Snowflake to BigQuery using three different processes: ELT, ETL, or using partner tools.
- You can then load your data from Cloud Storage to BigQuery using one of the following tools: The BigQuery Data Transfer Service for Cloud Storage connector The LOAD command using the bq command-line tool BigQuery API client libraries Other tools to extract data from Snowflake You can also use the following tools to extract data from Snowflake: Dataflow JDBC to BigQuery template SnowflakeIO connector Cloud Data Fusion JDBC drivers Managed Service for Apache Spark Apache Spark BigQuery connector Snowflake connector for Apache Spark Hadoop BigQuery connector The JDBC driver from Snowflake and Sqoop to extract data from Snowflake into Cloud Storage: Moving data with Apache Sqoop in Managed Service for Apache Spark Other tools to load data to BigQuery You can also use the following tools to load data to BigQuery: Dataflow Read from Cloud Storage Write to BigQuery Cloud Storage Text to BigQuery template Cloud Data Fusion Create a target campaign pipeline Managed Service for Apache Spark Cloud Storage connector with Spark Spark BigQuery connector Hadoop Cloud Storage connector Hadoop BigQuery connector Dataprep by Trifacta Read from Cloud Storage Write to BigQuery Extract, transform, and load If you want to transform your data before loading it into BigQuery, consider the following tools: Dataflow Clone the JDBC to BigQuery template code and modify the template to add Apache Beam transforms .
- For a detailed, step-by step process that includes code samples, see the Google Cloud professional services Snowflake to BigQuery tool Prepare for the export You can prepare your Snowflake data for an export by extracting your Snowflake data into a Cloud Storage or an Amazon Simple Storage Service (Amazon S3) bucket with the following steps: Cloud Storage This tutorial prepares the file in PARQUET format.

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Migration Service includes the following features: BigQuery migration assessment : Assess and plan your data warehouse migration by running a BigQuery migration assessment .
- The BigQuery Migration Service is a comprehensive solution for migrating your data warehouse to BigQuery.
- For more information on BigQuery migration assessment, see BigQuery migration assessment .
- You can also use the following open-source tools to help you with your migration process: Data migration tool : Use the data migration tool to automate your data warehouse migration to BigQuery.

### Migrating permissions from Hadoop \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must also include either the HDFS file, the Apache Ranger file generated by the dwh-migration-dumper tool, or both, depending on which source you are migrating permissions from.
- You must also include either the HDFS file, the Apache Ranger file generated by the dwh-migration-dumper tool, or both, depending on which source you are migrating permissions from.
- Apply permissions Once you have generated a target permissions file, you can then run the permissions migration tool to apply the IAM permissions to Cloud Storage or BigQuery.
- Run the permission migration tool with the target permissions file to apply permissions to Cloud Storage or BigQuery .

