---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.461Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-enhanced translation rules"
feature_slug: "gemini-enhanced-translation-rules"
latest_feature_date: "2024-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
keywords:
  - "gemini"
  - "enhanced"
  - "translation"
  - "rules"
  - "interactive"
  - "sql"
  - "translator"
  - "supports"
---

# Gemini-enhanced translation rules

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The interactive SQL translator supports Gemini-enhanced translation rules for customizing SQL translation results.

## Extended Definition

The interactive SQL translator supports Gemini-enhanced translation rules for customizing SQL translation results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have specified Gemini customization rules for the source SQL in the Gemini configuration , then the translator transforms the original input first and then translates the Gemini-enhanced input.
- If you have specified Gemini customization rules for the target SQL in the Gemini configuration , then the transformation is applied to the translated result as a Gemini-enhanced output.
- To debug a batch translation file in the interactive SQL translator, follow these steps: In the Google Cloud console, go to the SQL Translation page.
- You see the input and output files populated in the interactive SQL translator that now uses the corresponding batch translation configuration ID.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- You can specify a configuration YAML file to use in a SQL translation in the following ways: If you are using the interactive SQL translator, specify the file path to the configuration file or batch translation job ID in the translation settings .
- When using the BigQuery interactive SQL translator , using the BigQuery Migration API , or performing a batch SQL translation , you can provide configuration YAML files to modify a SQL query translation.

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customize your SQL translations with translation rules . ( Preview ) Create Gemini-enhanced translation rules to customize your SQL translations when using the interactive SQL translator .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- How Gemini in BigQuery uses your data In order to provide accurate results, Gemini in BigQuery requires access to both your Customer Data and metadata in BigQuery for enhanced features.
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .

