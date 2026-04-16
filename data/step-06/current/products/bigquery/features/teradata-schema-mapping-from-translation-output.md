---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.347Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Teradata schema mapping from translation output"
feature_slug: "teradata-schema-mapping-from-translation-output"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
keywords:
  - "teradata"
  - "schema"
  - "mapping"
  - "translation"
  - "output"
  - "bigquery"
  - "transfer"
  - "migrations"
---

# Teradata schema mapping from translation output

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service migrations from Teradata can use BigQuery translation engine outputs as schema mapping input.

## Extended Definition

BigQuery Data Transfer Service migrations from Teradata can use BigQuery translation engine outputs as schema mapping input.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)

## Supporting Pages

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following configuration YAML changes the name of the table from my db.my schema.my table to my new db.my schema.my new table . type : experimental object rewriter relation : - match : "my db.my schema.my table" outputName : database : "my new db" relation : "my new table" A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table my db . my schema . my table ( a int ); bq-output.sql CREATE TABLE my new db . my schema . my new table ( a INT64 ) You can use static name mapping to update the region used by names in the public user-defined functions .
- A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a int , b int , aa int ); bq-output.sql CREATE TABLE testdb . testschema . x ( a NUMERIC ( 31 , 2 ), b INT64 , aa NUMERIC ( 31 , 2 ) ) ; Note: BigQuery translation increases numeric precision to the highest precision available for a given scale.
- The following configuration YAML sets the description of a table: type : object rewriter relation : - match : "testdb.testschema.x" description : text : "Example description." A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a int ); bq-output.sql CREATE TABLE testdb . testschema . x ( a INT64 ) OPTIONS ( description = 'Example description.' ); Set or change table partitioning The following configuration YAML changes the partitioning scheme of a table : type : object rewriter relation : - match : "testdb.testschema.x" partition : simple : add : [ a ] - match : "testdb.testschema.y" partition : simple : remove : [ a ] A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a date , b int ); create table y ( a date , b int ) partition by ( a ); bq-output.sql CREATE TABLE testdb . testschema . x ( a DATE , b INT64 ) PARTITION BY a ; CREATE TABLE testdb . testschema . y ( a DATE , b INT64 ) ; Set or change table clustering The following configuration YAML changes the clustering scheme of a table : type : object rewriter relation : - match : "testdb.testschema.x" clustering : add : [ a ] - match : "testdb.testschema.y" clustering : remove : [ b ] A SQL translation with this configuration YAML file might look like the following: hive-input.sql create table x ( a int , b int ); create table y ( a int , b int ) clustered by ( b ) into 16 buckets ; bq-output.sql CREATE TABLE testdb . testschema . x ( a INT64 , b INT64 ) CLUSTER BY a ; CREATE TABLE testdb . testschema . y ( a INT64 , b INT64 ) ; Change type of a column attribute Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The following example lists two separate configuration YAML files that were provided for a single SQL translation job, one to change a column's attribute, and the other to set the table as temporary: change-type-example.config.yaml : type : object rewriter attribute : - match : "testdb.testschema.x.a" type : target : NUMERIC(10,2) make-temp-example.config.yaml : type : object rewriter relation : - match : "testdb.testschema.x" temporary : true A SQL translation with these two configuration YAML files might look like the following: teradata-input.sql create table x ( a int ); bq-output.sql CREATE TEMPORARY TABLE x ( a NUMERIC ( 31 , 2 ) ) ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- After you complete a batch translation job, BigQuery generates a translation configuration ID that contains information about the job's metadata, the object mapping, or the schema search path, as applicable to the query.
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- What's next Learn more about the following steps in data warehouse migration: Migration overview Migration assessment Schema and data transfer overview Data pipelines Interactive SQL translation Data security and governance Data validation tool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- Example batch translation To translate the Teradata SQL scripts in the Cloud Storage directory gs://my data bucket/teradata/input/ and store the results in the Cloud Storage directory gs://my data bucket/teradata/output/ , you might use the following query: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, } } } } Note: The string "task name" in this example is an identifier for the translation task and can be set to any value you prefer.
- The source target mapping field contains a list that maps the source directories to an optional relative path for the target output. curl -d "{ \"tasks\": { string: { \"type\": \" TYPE \", \"translation details\": { \"source target mapping\": { \"source spec\": { \"literal\": { \"relative path\": \" PATH \", \"literal string\": \" STRING \" } } }, \"target return literals\": \" TARGETS \", } } } }" \ -H "Content-Type:application/json" \ -H "Authorization: Bearer TOKEN " -X POST https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows Replace the following: TYPE : the task type of the translation, which determines the source and target dialect.
- The source target mapping field contains a list that maps the source literal entries to an optional relative path for the target output. curl -d "{ \"tasks\": { string: { \"type\": \" TYPE \", \"translation details\": { \"target base uri\": \" TARGET BASE \", \"source target mapping\": { \"source spec\": { \"base uri\": \" BASE \" } }, \"target types\": \" TARGET TYPES \", } } } }" \ -H "Content-Type:application/json" \ -H "Authorization: Bearer TOKEN " -X POST https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows Replace the following: TYPE : the task type of the translation, which determines the source and target dialect.

