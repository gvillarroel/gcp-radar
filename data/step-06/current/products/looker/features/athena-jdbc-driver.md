---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.442Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Athena JDBC driver"
feature_slug: "athena-jdbc-driver"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-queries"
  - "https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "athena"
  - "jdbc"
  - "driver"
  - "looker"
  - "uses"
  - "amazon"
  - "connections"
  - "was"
---

# Athena JDBC driver

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The JDBC driver Looker uses for Amazon Athena connections was upgraded to version 2.2.2; A JDBC driver used for Looker connections to Amazon Athena.

## Extended Definition

The JDBC driver Looker uses for Amazon Athena connections was upgraded to version 2.2.2; A JDBC driver used for Looker connections to Amazon Athena.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - Queries \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Actian Avalanche Amazon Athena Amazon Aurora MySQL Amazon Redshift Amazon Redshift 2.1+ Amazon Redshift Serverless 2.1+ Apache Druid Apache Druid 0.13.x - 0.17.x Apache Druid 0.18+ Apache Hive 2.3+ Apache Hive 3.1.2+ Apache Spark 3+ ClickHouse Cloudera Impala 3.1+ Cloudera Impala 3.1+ with Native Driver Cloudera Impala with Native Driver DataVirtuality Databricks Denodo 7 Denodo 8 & 9 Dremio Dremio 11+ Exasol Google BigQuery Legacy SQL Google BigQuery Standard SQL Google Cloud AlloyDB for PostgreSQL Google Cloud PostgreSQL Google Cloud SQL Google Spanner Greenplum HyperSQL IBM Netezza MariaDB Microsoft Azure PostgreSQL Microsoft Azure SQL Database Microsoft Azure Synapse Analytics Microsoft SQL Server 2008+ Microsoft SQL Server 2012+ Microsoft SQL Server 2016 Microsoft SQL Server 2017+ MongoBI MySQL MySQL 8.0.12+ Oracle Oracle ADWC PostgreSQL 9.5+ PostgreSQL pre-9.5 PrestoDB PrestoSQL SAP HANA SAP HANA 2+ SingleStore SingleStore 7+ Snowflake Teradata Trino Vector Vertica Query timeouts and queueing Looker kills queries that have been waiting in queue for too long.
- Looker admins can stop a running query from the Queries admin page by clicking the Stop button for the query. (Users with the see queries permission can view the Queries page, but only Looker admins can stop a running query.) Note: Google BigQuery connections that are configured for OAuth authentication don't support query killing.
- There are two ways you can define the maximum number of per-user concurrent queries for connections on your Looker instance: The per-user-query-limit startup option .
- Note: If your Looker instance is clustered , then each node of the cluster uses its own scheduler queue.

### Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials)
- Source ID: `site-docs-reference-required-6`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can then load your data from Cloud Storage to BigQuery using one of the following tools: The BigQuery Data Transfer Service for Cloud Storage connector The LOAD command using the bq command-line tool BigQuery API client libraries Other tools to extract data from Snowflake You can also use the following tools to extract data from Snowflake: Dataflow JDBC to BigQuery template SnowflakeIO connector Cloud Data Fusion JDBC drivers Managed Service for Apache Spark Apache Spark BigQuery connector Snowflake connector for Apache Spark Hadoop BigQuery connector The JDBC driver from Snowflake and Sqoop to extract data from Snowflake into Cloud Storage: Moving data with Apache Sqoop in Managed Service for Apache Spark Other tools to load data to BigQuery You can also use the following tools to load data to BigQuery: Dataflow Read from Cloud Storage Write to BigQuery Cloud Storage Text to BigQuery template Cloud Data Fusion Create a target campaign pipeline Managed Service for Apache Spark Cloud Storage connector with Spark Spark BigQuery connector Hadoop Cloud Storage connector Hadoop BigQuery connector Dataprep by Trifacta Read from Cloud Storage Write to BigQuery Extract, transform, and load If you want to transform your data before loading it into BigQuery, consider the following tools: Dataflow Clone the JDBC to BigQuery template code and modify the template to add Apache Beam transforms .
- This step involves configuring access permissions to the Amazon S3 bucket, creating the Amazon Web Services (AWS) IAM role , and creating a storage integration in Snowflake with the CREATE STORAGE INTEGRATION command: create storage integration INTEGRATION NAME type = external stage storage provider = s3 enabled = true storage aws role arn = 'arn:aws:iam::001234567890:role/myrole' storage allowed locations = ( ' BUCKET NAME ' ) Replace the following: INTEGRATION NAME : a name for the storage integration.
- For a detailed, step-by step process that includes code samples, see the Google Cloud professional services Snowflake to BigQuery tool Prepare for the export You can prepare your Snowflake data for an export by extracting your Snowflake data into a Cloud Storage or an Amazon Simple Storage Service (Amazon S3) bucket with the following steps: Cloud Storage This tutorial prepares the file in PARQUET format.
- Grant the AWS IAM user permissions to access the Amazon S3 bucket, and create an external stage with the CREATE STAGE command: USE SCHEMA mydb.public ; create or replace stage STAGE NAME url = ' BUCKET NAME ' storage integration = INTEGRATION NAME t file format = NAMED FILE FORMAT ; Replace the following: STAGE NAME : a name for the Cloud Storage stage object.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- These roles won't appear on a Looker (Google Cloud core) instance if the instance uses private connections (private services access or Private Service Connect) networking or hybrid connections networking .
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Users will also need the Manage Access, Edit content access permission. manage homepage None Instance Wide NN Users can edit and add content to the sidebar that all Looker users see on the prebuilt Looker homepage . manage models None Instance Wide CN Each LookML model is mapped to a specific set of database connections on the Manage LookML Projects page.

