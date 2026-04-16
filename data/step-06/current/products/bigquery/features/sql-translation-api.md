---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.253Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL translation API"
feature_slug: "sql-translation-api"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "sql"
  - "translation"
  - "translates"
  - "dialects"
  - "into"
  - "googlesql"
  - "programmatically"
---

# SQL translation API

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The SQL translation API translates supported SQL dialects into GoogleSQL programmatically.

## Extended Definition

The SQL translation API translates supported SQL dialects into GoogleSQL programmatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)

## Supporting Pages

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- The following configuration YAML sets the description of a table: type : object rewriter relation : - match : "testdb.testschema.x" description : text : "Example description." A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a int ); bq-output.sql CREATE TABLE testdb . testschema . x ( a INT64 ) OPTIONS ( description = 'Example description.' ); Set or change table partitioning The following configuration YAML changes the partitioning scheme of a table : type : object rewriter relation : - match : "testdb.testschema.x" partition : simple : add : [ a ] - match : "testdb.testschema.y" partition : simple : remove : [ a ] A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a date , b int ); create table y ( a date , b int ) partition by ( a ); bq-output.sql CREATE TABLE testdb . testschema . x ( a DATE , b INT64 ) PARTITION BY a ; CREATE TABLE testdb . testschema . y ( a DATE , b INT64 ) ; Set or change table clustering The following configuration YAML changes the clustering scheme of a table : type : object rewriter relation : - match : "testdb.testschema.x" clustering : add : [ a ] - match : "testdb.testschema.y" clustering : remove : [ b ] A SQL translation with this configuration YAML file might look like the following: hive-input.sql create table x ( a int , b int ); create table y ( a int , b int ) clustered by ( b ) into 16 buckets ; bq-output.sql CREATE TABLE testdb . testschema . x ( a INT64 , b INT64 ) CLUSTER BY a ; CREATE TABLE testdb . testschema . y ( a INT64 , b INT64 ) ; Change type of a column attribute Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If not set, the default format for translation, DD-MON-RR , is used. type : environment session : dateFormat : DD/MM/YYYY A SQL translation with this configuration YAML file might look like the following: oracle-input.sql create table x ( dt date default '31/12/1999' ); insert into x values ( '01/01/2000' ); bq-output.sql CREATE TABLE testdb . testschema . x ( DT DATETIME DEFAULT DATETIME '1999-12-31 00:00:00' ) ; INSERT INTO testdb . testschema . x ( DT ) VALUES ( DATETIME '2000-01-01 00:00:00' ) ; Global output name rewrite Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- This configuration is enabled by default for the Snowflake Dialect. type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER parameters : bigint : 38 A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i INT64 , n INT64 ); The following configuration disables the optimization in dialects, such as Snowflake, where it is enabled by default.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- This document describes how to use the batch SQL translator in BigQuery to translate scripts written in other SQL dialects into GoogleSQL queries.
- In this file, you must define the path to the source file, the output destination, and the source and target dialects of your translation.
- Locations The batch SQL translator is available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 Submit a translation job Follow these steps to start a translation job, view its progress, and see the results.

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Supported task types The translation API can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL - Redshift2BigQuery Translation Apache HiveQL and Beeline CLI - HiveQL2BigQuery Translation Apache Impala - Impala2BigQuery Translation Apache Spark SQL - SparkSQL2BigQuery Translation Azure Synapse T-SQL - AzureSynapse2BigQuery Translation GoogleSQL (BigQuery) - Bigquery2Bigquery Translation Greenplum SQL - Greenplum2BigQuery Translation IBM Db2 SQL - Db22BigQuery Translation IBM Netezza SQL and NZPLSQL - Netezza2BigQuery Translation MySQL SQL - MySQL2BigQuery Translation Oracle SQL, PL/SQL, Exadata - Oracle2BigQuery Translation PostgreSQL SQL - Postgresql2BigQuery Translation Presto or Trino SQL - Presto2BigQuery Translation Snowflake SQL - Snowflake2BigQuery Translation SQLite - SQLite2BigQuery Translation SQL Server T-SQL - SQLServer2BigQuery Translation Teradata and Teradata Vantage - Teradata2BigQuery Translation Vertica SQL - Vertica2BigQuery Translation Handling unsupported SQL functions with helper UDFs When translating SQL from a source dialect to BigQuery, some functions might not have a direct equivalent.
- Translate SQL queries with the translation API This document describes how to use the translation API in BigQuery to translate scripts written in other SQL dialects into GoogleSQL queries.
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- Locations The translation API is available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 Submit a translation job To submit a translation job using the translation API, use the projects.locations.workflows.create method and supply an instance of the MigrationWorkflow resource with a supported task type .

