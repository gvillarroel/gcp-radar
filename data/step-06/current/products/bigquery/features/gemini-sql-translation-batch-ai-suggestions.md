---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.399Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini SQL translation batch AI suggestions"
feature_slug: "gemini-sql-translation-batch-ai-suggestions"
latest_feature_date: "2024-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
keywords:
  - "gemini"
  - "sql"
  - "translation"
  - "batch"
  - "ai"
  - "suggestions"
  - "translations"
  - "can"
---

# Gemini SQL translation batch AI suggestions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Batch SQL translations can generate AI suggestions using Gemini based on a configuration YAML file.

## Extended Definition

Batch SQL translations can generate AI suggestions using Gemini based on a configuration YAML file.

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
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- This configuration converts numeric types to either NUMERIC or BIGNUMERIC depending on the input precision, instead of the default of INT64 . type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER enabled : false A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i BIGNUMERIC ( 38 ), n NUMERIC ( 29 )); Create a Gemini-based configuration YAML file Note: The Translation service can call Gemini model to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- Note: For API-based translations, we recommend using the BigQuery Migration API instead of the batch SQL translation API or client.
- Examples The following examples create Gemini-based configuration YAML files which you can use with your SQL translations.
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Migrate code with the batch SQL translator Note: For API-based translations, including new batch translations, we recommend that you use the BigQuery Migration API to translate your SQL scripts.
- Create configuration YAML files You can optionally create and use configuration configuration YAML files to customize your batch translations.
- Batch translation client Note: We recommend that new translations use the BigQuery Migration API instead of the batch translation client.
- These files can be used to set rename objects, enable optimizations, enhance translations with Gemini and more.

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Example batch translation with AI suggestions Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: The translation API can call Gemini using BigQuery Vertex AI integration to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- Example batch translation To translate the Teradata SQL scripts in the Cloud Storage directory gs://my data bucket/teradata/input/ and store the results in the Cloud Storage directory gs://my data bucket/teradata/output/ , you might use the following query: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, } } } } Note: The string "task name" in this example is an identifier for the translation task and can be set to any value you prefer.

