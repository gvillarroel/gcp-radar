---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.434Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL translation configuration YAML files"
feature_slug: "sql-translation-configuration-yaml-files"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "sql"
  - "translation"
  - "configuration"
  - "yaml"
  - "files"
  - "bigquery"
  - "supports"
  - "optimize"
---

# SQL translation configuration YAML files

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery SQL translation supports configuration YAML files to optimize and improve performance of translated SQL; SQL translation configuration YAML files let users transform SQL code during query translation across batch, interactive, and Python client workflows.

## Extended Definition

BigQuery SQL translation supports configuration YAML files to optimize and improve performance of translated SQL; SQL translation configuration YAML files let users transform SQL code during query translation across batch, interactive, and Python client workflows.

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
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- The configuration YAML file supports the following target types: BOOLEAN TINYINT SMALLINT INTEGER BIGINT FLOAT DOUBLE NUMERIC (Supports optional precision and scale, such as NUMERIC(18, 2) ) TIME TIMETZ DATE DATETIME TIMESTAMP TIMESTAMPTZ CHAR (Supports optional precision, such as CHAR(42) ) VARCHAR (Supports optional precision, such as VARCHAR(42) ) Configuration YAML examples This section provides examples to create various configuration YAML files to use with your SQL translations.
- Configuration YAML file requirements Before creating a configuration YAML file, review the following information to ensure that your YAML file is compatible to use with the BigQuery Migration Service: You must upload the configuration YAML files in the directory of the Cloud Storage bucket that contains your SQL translation input files.
- When using the BigQuery interactive SQL translator , using the BigQuery Migration API , or performing a batch SQL translation , you can provide configuration YAML files to modify a SQL query translation.

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- Note: The translation API can call Gemini using BigQuery Vertex AI integration to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- Upload input files to Cloud Storage If you want to use the Google Cloud console or the BigQuery Migration API to perform a translation job, you must upload the source files containing the queries and scripts you want to translate to Cloud Storage.
- You can also upload any metadata files or configuration YAML files to the same Cloud Storage bucket containing the source files.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use the Google Cloud console or the BigQuery Migration API for a batch translation job, you can upload the configuration YAML file to the Cloud Storage bucket containing the source files .
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- Note: You can view log summaries and messages for the overall translation job from the Results page Configuration tab You can add, rename, view, or edit your configuration YAML files in the Configuration tab.The Schema Explorer shows the documentation for supported configuration types to help you write your configuration YAML files.
- BigQuery CLI You can run the batch SQL translator using the bq command-line tool command-line tool with the following steps: Create a translation configuration file in either YAML or JSON.

