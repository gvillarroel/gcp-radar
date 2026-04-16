---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.399Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-enhanced interactive SQL translation customization"
feature_slug: "gemini-enhanced-interactive-sql-translation-customization"
latest_feature_date: "2024-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
keywords:
  - "gemini"
  - "enhanced"
  - "interactive"
  - "sql"
  - "translation"
  - "customization"
  - "can"
  - "use"
---

# Gemini-enhanced interactive SQL translation customization

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Interactive SQL translation can use Gemini-enhanced translations to customize translated GoogleSQL queries.

## Extended Definition

Interactive SQL translation can use Gemini-enhanced translations to customize translated GoogleSQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)

## Supporting Pages

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- The Gemini-enhanced SQL translation assesses the request and makes the specified change. examples (optional): Provide SQL examples of how you want the SQL pattern to be modified.
- This configuration converts numeric types to either NUMERIC or BIGNUMERIC depending on the input precision, instead of the default of INT64 . type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER enabled : false A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i BIGNUMERIC ( 38 ), n NUMERIC ( 29 )); Create a Gemini-based configuration YAML file Note: The Translation service can call Gemini model to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- You can specify a configuration YAML file to use in a SQL translation in the following ways: If you are using the interactive SQL translator, specify the file path to the configuration file or batch translation job ID in the translation settings .

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- If you have specified Gemini customization rules for the source SQL in the Gemini configuration , then the translator transforms the original input first and then translates the Gemini-enhanced input.
- If you have specified Gemini customization rules for the target SQL in the Gemini configuration , then the transformation is applied to the translated result as a Gemini-enhanced output.
- Gemini-enhanced input : The input SQL that was translated by the translation engine.
- What's next Learn more about the following steps in data warehouse migration: Migration overview Migration assessment Schema and data transfer overview Data pipelines Interactive SQL translation Data security and governance Data validation tool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Customize your SQL translations with translation rules . ( Preview ) Create Gemini-enhanced translation rules to customize your SQL translations when using the interactive SQL translator .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- How Gemini in BigQuery uses your data In order to provide accurate results, Gemini in BigQuery requires access to both your Customer Data and metadata in BigQuery for enhanced features.
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .

