---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.454Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Batch SQL translator support for IBM DB2"
feature_slug: "batch-sql-translator-support-for-ibm-db2"
latest_feature_date: "2024-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
keywords:
  - "batch"
  - "sql"
  - "translator"
  - "ibm"
  - "db2"
  - "can"
  - "translate"
  - "greenplum"
---

# Batch SQL translator support for IBM DB2

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The batch SQL translator can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL.

## Extended Definition

The batch SQL translator can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- Debug batch translated SQL queries with the interactive SQL translator You can use the BigQuery interactive SQL translator to review or debug a SQL query using the same metadata or object mapping information as your source database.
- Migrate code with the batch SQL translator Note: For API-based translations, including new batch translations, we recommend that you use the BigQuery Migration API to translate your SQL scripts.
- This document describes how to use the batch SQL translator in BigQuery to translate scripts written in other SQL dialects into GoogleSQL queries.

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Supported task types The translation API can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL - Redshift2BigQuery Translation Apache HiveQL and Beeline CLI - HiveQL2BigQuery Translation Apache Impala - Impala2BigQuery Translation Apache Spark SQL - SparkSQL2BigQuery Translation Azure Synapse T-SQL - AzureSynapse2BigQuery Translation GoogleSQL (BigQuery) - Bigquery2Bigquery Translation Greenplum SQL - Greenplum2BigQuery Translation IBM Db2 SQL - Db22BigQuery Translation IBM Netezza SQL and NZPLSQL - Netezza2BigQuery Translation MySQL SQL - MySQL2BigQuery Translation Oracle SQL, PL/SQL, Exadata - Oracle2BigQuery Translation PostgreSQL SQL - Postgresql2BigQuery Translation Presto or Trino SQL - Presto2BigQuery Translation Snowflake SQL - Snowflake2BigQuery Translation SQLite - SQLite2BigQuery Translation SQL Server T-SQL - SQLServer2BigQuery Translation Teradata and Teradata Vantage - Teradata2BigQuery Translation Vertica SQL - Vertica2BigQuery Translation Handling unsupported SQL functions with helper UDFs When translating SQL from a source dialect to BigQuery, some functions might not have a direct equivalent.
- Example batch translation To translate the Teradata SQL scripts in the Cloud Storage directory gs://my data bucket/teradata/input/ and store the results in the Cloud Storage directory gs://my data bucket/teradata/output/ , you might use the following query: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, } } } } Note: The string "task name" in this example is an identifier for the translation task and can be set to any value you prefer.
- If the task succeeds, you will find the translated SQL in the response message: { "name" : "projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00" , "tasks" : { "string" : { "id" : "0fedba98-7654-3210-1234-56789abcdef" , "type" : "HiveQL2BigQuery Translation" , / ... / "taskResult" : { "translationTaskResult" : { "translatedLiterals" : [ { "relativePath" : "sql/input file" , "literalString" : "-- Translation time: 2023-10-05T21:50:49.885839Z\n-- Translation job ID: projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00\n-- Source: input file\n-- Translated from: Hive\n-- Translated to: BigQuery\n\nSELECT\n 1\n;\n" } ], "reportLogMessages" : [ ... ] } }, / ... / } }, "state" : "COMPLETED" , "createTime" : "2023-10-05T21:50:49.543221Z" , "lastUpdateTime" : "2023-10-05T21:50:50.462758Z" } Explore the translation output After running the translation job, retrieve the results by specifying the translation job workflow ID using the following command: curl \ -H "Content-Type:application/json" \ -H "Authorization:Bearer TOKEN " -X GET https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows/ WORKFLOW ID Replace the following: TOKEN : the token for authentication.
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- You can specify a configuration YAML file to use in a SQL translation in the following ways: If you are using the interactive SQL translator, specify the file path to the configuration file or batch translation job ID in the translation settings .
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- When using the BigQuery interactive SQL translator , using the BigQuery Migration API , or performing a batch SQL translation , you can provide configuration YAML files to modify a SQL query translation.

