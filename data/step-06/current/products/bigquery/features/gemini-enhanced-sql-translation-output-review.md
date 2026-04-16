---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.332Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-enhanced SQL translation output review"
feature_slug: "gemini-enhanced-sql-translation-output-review"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
keywords:
  - "gemini"
  - "enhanced"
  - "sql"
  - "translation"
  - "output"
  - "review"
  - "batch"
  - "can"
---

# Gemini-enhanced SQL translation output review

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Batch SQL translation output can be reviewed with Gemini-based suggestions in the code and configuration tabs.

## Extended Definition

Batch SQL translation output can be reviewed with Gemini-based suggestions in the code and configuration tabs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a Gemini-enhanced output is available, then you can click the Gemini suggestion button to review the Gemini-enhanced output.
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- You can find this in the Project info pane on the Google Cloud console welcome page for the project. gcs bucket : Type the name of the Cloud Storage bucket that the batch translation client uses to store files during translation job processing. input directory : Type the absolute or relative path to the directory containing the source files and any metadata files. output directory : Type the absolute or relative path to the target directory for the translated files.
- The legacy batch translation client is an open-source Python client that lets you translate source files located on your local machine and have the translated files output to a local directory.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- The following configuration YAML sets the description of a table: type : object rewriter relation : - match : "testdb.testschema.x" description : text : "Example description." A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a int ); bq-output.sql CREATE TABLE testdb . testschema . x ( a INT64 ) OPTIONS ( description = 'Example description.' ); Set or change table partitioning The following configuration YAML changes the partitioning scheme of a table : type : object rewriter relation : - match : "testdb.testschema.x" partition : simple : add : [ a ] - match : "testdb.testschema.y" partition : simple : remove : [ a ] A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a date , b int ); create table y ( a date , b int ) partition by ( a ); bq-output.sql CREATE TABLE testdb . testschema . x ( a DATE , b INT64 ) PARTITION BY a ; CREATE TABLE testdb . testschema . y ( a DATE , b INT64 ) ; Set or change table clustering The following configuration YAML changes the clustering scheme of a table : type : object rewriter relation : - match : "testdb.testschema.x" clustering : add : [ a ] - match : "testdb.testschema.y" clustering : remove : [ b ] A SQL translation with this configuration YAML file might look like the following: hive-input.sql create table x ( a int , b int ); create table y ( a int , b int ) clustered by ( b ) into 16 buckets ; bq-output.sql CREATE TABLE testdb . testschema . x ( a INT64 , b INT64 ) CLUSTER BY a ; CREATE TABLE testdb . testschema . y ( a INT64 , b INT64 ) ; Change type of a column attribute Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- By default, TIMESTAMPTZ is converted to TIMESTAMP with no configuration required. type : experimental object rewriter global : typeConvert : datetime : target : TIMESTAMP A SQL translation with this configuration YAML file might look like the following: snowflake-input.sql create table x ( c timestamp timestamp ltz , c timestamptz timestamp tz , c datetime timestamp ntz ); select c timestamp from x where c timestamp > current timestamp ( 0 ); select c timestamptz from x where c timestamptz > cast ( current timestamp ( 0 ) as timestamp tz ); select c datetime from x where c datetime > cast ( current timestamp ( 0 ) as timestamp ntz ); bq-output.sql CREATE TABLE x ( c timestamp TIMESTAMP , c timestamptz TIMESTAMP , c datetime TIMESTAMP ) ; SELECT x . c timestamp FROM test . x WHERE x . c timestamp > current timestamp () ; SELECT x . c timestamptz FROM test . x WHERE x . c timestamptz > current timestamp () ; SELECT x . c datetime FROM test . x WHERE x . c datetime > current timestamp () ; Select statement modification Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The following configuration YAML changes the name of all tables by adding the prefix stg to those that belong to the staging schema, and then moves those tables to the production schema. type : experimental object rewriter relation : - match : schema : staging outputName : schema : production relation : "stg ${relation}" A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table staging . my table ( a int ); bq-output.sql CREATE TABLE production . stg my table ( a INT64 ) ; Specifying default database and schema search path Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customize your SQL translations with translation rules . ( Preview ) Create Gemini-enhanced translation rules to customize your SQL translations when using the interactive SQL translator .
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- How Gemini in BigQuery uses your data In order to provide accurate results, Gemini in BigQuery requires access to both your Customer Data and metadata in BigQuery for enhanced features.

