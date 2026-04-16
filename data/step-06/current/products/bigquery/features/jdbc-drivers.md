---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.908Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JDBC drivers"
feature_slug: "jdbc-drivers"
latest_feature_date: "2016-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers"
  - "https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials"
keywords:
  - "jdbc"
  - "drivers"
  - "bigquery"
  - "provides"
  - "connecting"
  - "external"
  - "tools"
  - "applications"
---

# JDBC drivers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides JDBC drivers for connecting external tools and applications.

## Extended Definition

BigQuery provides JDBC drivers for connecting external tools and applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner references Magnitude Simba Google BigQuery JDBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Simba ODBC Driver Solution Simba ODBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Google BigQuery Data Integration Google BigQuery Connection Manager Google BigQuery Destination Component Magnitude Simba JDBC Driver Solution Simba JDBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Explore & visualize your Google BigQuery data Use BigQuery to query Google Sheets BigQuery supported versions Partner Advantage page Direct link Neo4j Solution Neo4j Graph Database Category BI, ML, & Advanced Analytics Description Neo4j gives developers and data scientists the most trusted and advanced tools to quickly build today's intelligent applications and machine learning workflows.

### Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the Simba ODBC and JDBC drivers for BigQuery The Simba Open Database Connectivity (ODBC) and Java Database Connectivity (JDBC) drivers for BigQuery connect your applications to BigQuery, letting you use BigQuery features with your preferred tooling and infrastructure.
- To see a list of previous driver versions, expand the following section: Previous Simba JDBC driver versions 1.6.5.1001 1.6.3.1004 1.6.2.1003 1.6.1.1002 1.5.4.1008 1.5.0.1001 1.3.3.1004 1.3.2.1003 1.3.0.1001 1.2.25.1029 1.2.23.1027 1.2.22.1026 1.2.21.1025 1.2.19.1023 1.2.18.1022 1.2.16.1020 1.2.14.1017 1.2.1.1001 (JDBC 4.2-compatible) 1.2.1.1001 (JDBC 4.1-compatible) Support Support for the Simba ODBC and JDBC drivers for BigQuery is available through standard Cloud Customer Care channels.
- Before you begin When you use the Simba ODBC and JDBC drivers for BigQuery, you have the option to read data with the BigQuery Storage Read API, instead of with the standard BigQuery API.
- Pricing You can download the Simba ODBC and JDBC drivers for BigQuery at no cost, and you don't need any additional licenses to use the drivers.

### Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can then load your data from Cloud Storage to BigQuery using one of the following tools: The BigQuery Data Transfer Service for Cloud Storage connector The LOAD command using the bq command-line tool BigQuery API client libraries Other tools to extract data from Snowflake You can also use the following tools to extract data from Snowflake: Dataflow JDBC to BigQuery template SnowflakeIO connector Cloud Data Fusion JDBC drivers Managed Service for Apache Spark Apache Spark BigQuery connector Snowflake connector for Apache Spark Hadoop BigQuery connector The JDBC driver from Snowflake and Sqoop to extract data from Snowflake into Cloud Storage: Moving data with Apache Sqoop in Managed Service for Apache Spark Other tools to load data to BigQuery You can also use the following tools to load data to BigQuery: Dataflow Read from Cloud Storage Write to BigQuery Cloud Storage Text to BigQuery template Cloud Data Fusion Create a target campaign pipeline Managed Service for Apache Spark Cloud Storage connector with Spark Spark BigQuery connector Hadoop Cloud Storage connector Hadoop BigQuery connector Dataprep by Trifacta Read from Cloud Storage Write to BigQuery Extract, transform, and load If you want to transform your data before loading it into BigQuery, consider the following tools: Dataflow Clone the JDBC to BigQuery template code and modify the template to add Apache Beam transforms .
- Snowflake to BigQuery migration tutorials This document provides end-to-end examples and tutorials for the different ways you can set up a Snowflake to BigQuery migration pipeline.
- Snowflake migration pipeline examples You can migrate your data from Snowflake to BigQuery using three different processes: ELT, ETL, or using partner tools.
- For example, s3://unload/files/ Retrieve the AWS IAM user with the DESCRIBE INTEGRATION command. desc integration INTEGRATION NAME ; The output is similar to the following: +---------------------------+---------------+ ================================================================================ +------------------+ property property type property value property default +---------------------------+---------------+ ================================================================================ +------------------ ENABLED Boolean true false STORAGE ALLOWED LOCATIONS List s3://mybucket1/mypath1/,s3://mybucket2/mypath2/ [] STORAGE BLOCKED LOCATIONS List s3://mybucket1/mypath1/sensitivedata/,s3://mybucket2/mypath2/sensitivedata/ [] STORAGE AWS IAM USER ARN String arn:aws:iam::123456789001:user/abc1-b-self1234 STORAGE AWS ROLE ARN String arn:aws:iam::001234567890:role/myrole STORAGE AWS EXTERNAL ID String MYACCOUNT SFCRole = +---------------------------+---------------+ ================================================================================ +------------------+ Create a role that has the CREATE STAGE privilege for the schema, and the USAGE privilege for the storage integration: CREATE role ROLE NAME ; GRANT CREATE STAGE ON SCHEMA public TO ROLE ROLE NAME ; GRANT USAGE ON INTEGRATION s3 int TO ROLE ROLE NAME ; Replace ROLE NAME with a name for the role.

