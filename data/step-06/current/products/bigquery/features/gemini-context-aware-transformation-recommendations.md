---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.401Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini context-aware transformation recommendations"
feature_slug: "gemini-context-aware-transformation-recommendations"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
keywords:
  - "gemini"
  - "context"
  - "aware"
  - "transformation"
  - "recommendations"
  - "provides"
  - "help"
  - "cleanse"
---

# Gemini context-aware transformation recommendations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini provides context-aware transformation recommendations to help cleanse data for analysis in BigQuery data preparation.

## Extended Definition

Gemini provides context-aware transformation recommendations to help cleanse data for analysis in BigQuery data preparation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Data preparation in BigQuery gives you context aware, AI-generated transformation recommendations to cleanse data for analysis.
- Gemini in BigQuery overview This document describes how Gemini in BigQuery, which is part of the Gemini for Google Cloud product suite, provides AI-powered assistance to help you work with your data.
- AI assistance with Gemini in BigQuery Gemini in BigQuery provides AI assistance to help you do the following: Explore and understand your data with data insights .
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Generate context aware recommendations to clean, transform, and enrich your data.
- Assistive AI features AI-powered assistance features in BigQuery, collectively referred to as Gemini in BigQuery , help you discover, prepare, query, and visualize your data.
- Create Gemini-enhanced SQL translation rules to help you migrate queries written in a different dialect to GoogleSQL.
- You can use built-in agents or create your own agents to help you process, manage, analyze, and visualize your data: Use the Data Science Agent to automate exploratory data analysis, data processing, ML tasks, and visualization insights within a Colab Enterprise notebook.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- This configuration converts numeric types to either NUMERIC or BIGNUMERIC depending on the input precision, instead of the default of INT64 . type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER enabled : false A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i BIGNUMERIC ( 38 ), n NUMERIC ( 29 )); Create a Gemini-based configuration YAML file Note: The Translation service can call Gemini model to generate suggestions to your translated SQL query based on your AI configuration YAML file.
- It provides guidelines to create your own configuration YAML files, and provides examples for various translation transformations that are supported by this feature.
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- The following configuration YAML changes the output names of all objects (database, schema, relation, and attributes) in the script according to the configured rules. type : experimental object rewriter global : outputName : regex : - match : '\s' replaceWith : ' ' - match : '>=' replaceWith : 'gte' - match : '^[^a-zA-Z ]. ' replaceWith : ' $0' A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table "test special chars >= 12" ( "42eid" int , "custom column" varchar ( 10 )); bq-output.sql CREATE TABLE test special chars employees gte 12 ( 42eid INT64 , custom column STRING ) ; Optimize and improve the performance of translated SQL Optional transformations can be applied to translated SQL in order to introduce changes that can improve performance or cost.

