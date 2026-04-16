---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.399Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini SQL translation explanations"
feature_slug: "gemini-sql-translation-explanations"
latest_feature_date: "2024-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "gemini"
  - "sql"
  - "translation"
  - "explanations"
  - "interactive"
  - "can"
  - "request"
  - "generated"
---

# Gemini SQL translation explanations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Interactive SQL translation can request Gemini-generated text explanations that summarize translated SQL queries.

## Extended Definition

Interactive SQL translation can request Gemini-generated text explanations that summarize translated SQL queries.

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
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- The Gemini-enhanced SQL translation assesses the request and makes the specified change. examples (optional): Provide SQL examples of how you want the SQL pattern to be modified.
- This configuration converts numeric types to either NUMERIC or BIGNUMERIC depending on the input precision, instead of the default of INT64 . type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER enabled : false A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i BIGNUMERIC ( 38 ), n NUMERIC ( 29 )); Create a Gemini-based configuration YAML file Note: The Translation service can call Gemini model to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- You can specify a configuration YAML file to use in a SQL translation in the following ways: If you are using the interactive SQL translator, specify the file path to the configuration file or batch translation job ID in the translation settings .

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Example Interactive Translation To translate the Hive SQL string select 1 interactively, you might use the following query: "tasks" : { s tr i n g : { "type" : "HiveQL2BigQuery Translation" , "translation details" : { "source target mapping" : { "source spec" : { "literal" : { "relative path" : "input file" , "literal string" : "select 1" } } }, "target return literals" : "sql/input file" , } } } Note: The string "task name" in this example is an identifier for the translation task and can be set to any value you prefer.
- Note: The translation API can call Gemini using BigQuery Vertex AI integration to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- Create an interactive translation job with string literal inputs and outputs The following curl command creates a translation job with string literal inputs and outputs.
- The job state changes to COMPLETED after all the requested target types are generated.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn more about the following steps in data warehouse migration: Migration overview Migration assessment Schema and data transfer overview Data pipelines Interactive SQL translation Data security and governance Data validation tool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Fix translation issues with Gemini Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- To fixed failed translation jobs with the RelationNotFound or AttributeNotFound errors, you can also use Gemini to try to resolve these issues with the following steps.
- To start an interactive SQL translation by using a batch translation configuration ID, follow these steps: In the Google Cloud console, go to the SQL Translation page.

