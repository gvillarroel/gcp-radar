---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.193Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Snowflake SQL to GoogleSQL translation"
feature_slug: "snowflake-sql-to-googlesql-translation"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "snowflake"
  - "sql"
  - "googlesql"
  - "translation"
  - "bigquery"
  - "migration"
  - "translates"
  - "broader"
---

# Snowflake SQL to GoogleSQL translation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Migration Service translates Snowflake SQL to GoogleSQL with broader SQL and data type support.

## Extended Definition

BigQuery Migration Service translates Snowflake SQL to GoogleSQL with broader SQL and data type support.

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
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Configuration YAML file requirements Before creating a configuration YAML file, review the following information to ensure that your YAML file is compatible to use with the BigQuery Migration Service: You must upload the configuration YAML files in the directory of the Cloud Storage bucket that contains your SQL translation input files.
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- When using the BigQuery interactive SQL translator , using the BigQuery Migration API , or performing a batch SQL translation , you can provide configuration YAML files to modify a SQL query translation.
- This optimization ensures that a Snowflake INTEGER , which is implicitly represented as NUMBER(38,0) in Snowflake, translates to a BigQuery INT64 instead of a BIGNUMERIC(38) .

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Supported task types The translation API can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL - Redshift2BigQuery Translation Apache HiveQL and Beeline CLI - HiveQL2BigQuery Translation Apache Impala - Impala2BigQuery Translation Apache Spark SQL - SparkSQL2BigQuery Translation Azure Synapse T-SQL - AzureSynapse2BigQuery Translation GoogleSQL (BigQuery) - Bigquery2Bigquery Translation Greenplum SQL - Greenplum2BigQuery Translation IBM Db2 SQL - Db22BigQuery Translation IBM Netezza SQL and NZPLSQL - Netezza2BigQuery Translation MySQL SQL - MySQL2BigQuery Translation Oracle SQL, PL/SQL, Exadata - Oracle2BigQuery Translation PostgreSQL SQL - Postgresql2BigQuery Translation Presto or Trino SQL - Presto2BigQuery Translation Snowflake SQL - Snowflake2BigQuery Translation SQLite - SQLite2BigQuery Translation SQL Server T-SQL - SQLServer2BigQuery Translation Teradata and Teradata Vantage - Teradata2BigQuery Translation Vertica SQL - Vertica2BigQuery Translation Handling unsupported SQL functions with helper UDFs When translating SQL from a source dialect to BigQuery, some functions might not have a direct equivalent.
- If the task succeeds, you will find the translated SQL in the response message: { "name" : "projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00" , "tasks" : { "string" : { "id" : "0fedba98-7654-3210-1234-56789abcdef" , "type" : "HiveQL2BigQuery Translation" , / ... / "taskResult" : { "translationTaskResult" : { "translatedLiterals" : [ { "relativePath" : "sql/input file" , "literalString" : "-- Translation time: 2023-10-05T21:50:49.885839Z\n-- Translation job ID: projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00\n-- Source: input file\n-- Translated from: Hive\n-- Translated to: BigQuery\n\nSELECT\n 1\n;\n" } ], "reportLogMessages" : [ ... ] } }, / ... / } }, "state" : "COMPLETED" , "createTime" : "2023-10-05T21:50:49.543221Z" , "lastUpdateTime" : "2023-10-05T21:50:50.462758Z" } Explore the translation output After running the translation job, retrieve the results by specifying the translation job workflow ID using the following command: curl \ -H "Content-Type:application/json" \ -H "Authorization:Bearer TOKEN " -X GET https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows/ WORKFLOW ID Replace the following: TOKEN : the token for authentication.
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- The source target mapping field contains a list that maps the source directories to an optional relative path for the target output. curl -d "{ \"tasks\": { string: { \"type\": \" TYPE \", \"translation details\": { \"source target mapping\": { \"source spec\": { \"literal\": { \"relative path\": \" PATH \", \"literal string\": \" STRING \" } } }, \"target return literals\": \" TARGETS \", } } } }" \ -H "Content-Type:application/json" \ -H "Authorization: Bearer TOKEN " -X POST https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows Replace the following: TYPE : the task type of the translation, which determines the source and target dialect.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- Upload input files to Cloud Storage If you want to use the Google Cloud console or the BigQuery Migration API to perform a translation job, you must upload the source files containing the queries and scripts you want to translate to Cloud Storage.
- To address this, the BigQuery Migration Service (and the broader BigQuery community) provide helper user-defined functions (UDFs) that replicate the behavior of these unsupported source dialect functions.

