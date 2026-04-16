---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.332Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-based SQL translation configuration YAML generation"
feature_slug: "gemini-based-sql-translation-configuration-yaml-generation"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
keywords:
  - "gemini"
  - "based"
  - "sql"
  - "translation"
  - "configuration"
  - "yaml"
  - "generation"
  - "enhanced"
---

# Gemini-based SQL translation configuration YAML generation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini-enhanced SQL translation can create configuration YAML files that generate AI suggestions for batch or interactive translations.

## Extended Definition

Gemini-enhanced SQL translation can create configuration YAML files that generate AI suggestions for batch or interactive translations.

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
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This configuration converts numeric types to either NUMERIC or BIGNUMERIC depending on the input precision, instead of the default of INT64 . type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER enabled : false A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i BIGNUMERIC ( 38 ), n NUMERIC ( 29 )); Create a Gemini-based configuration YAML file Note: The Translation service can call Gemini model to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- Examples The following examples create Gemini-based configuration YAML files which you can use with your SQL translations.
- The following suggestion types are supported: QUERY CUSTOMIZATION (default): Generates AI-suggestions for SQL code based on the translation rules specified in the configuration YAML file.
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- Note: You can view log summaries and messages for the overall translation job from the Results page Configuration tab You can add, rename, view, or edit your configuration YAML files in the Configuration tab.The Schema Explorer shows the documentation for supported configuration types to help you write your configuration YAML files.
- If you want to use the Google Cloud console or the BigQuery Migration API for a batch translation job, you can upload the configuration YAML file to the Cloud Storage bucket containing the source files .
- If you have specified Gemini customization rules for the source SQL in the Gemini configuration , then the translator transforms the original input first and then translates the Gemini-enhanced input.

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The translation API can call Gemini using BigQuery Vertex AI integration to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- To learn how to write the configuration YAML file for AI suggestions, see Create a Gemini-based configuration YAML file .
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- You can also upload any metadata files or configuration YAML files to the same Cloud Storage bucket containing the source files.

