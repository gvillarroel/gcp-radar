---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.278Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Natural-language SQL comments for code refinement"
feature_slug: "natural-language-sql-comments-for-code-refinement"
latest_feature_date: "2025-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
keywords:
  - "natural"
  - "language"
  - "sql"
  - "comments"
  - "code"
  - "refinement"
  - "bigquery"
  - "can"
---

# Natural-language SQL comments for code refinement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can use natural-language comments embedded in SQL to refine and transform existing code.

## Extended Definition

BigQuery can use natural-language comments embedded in SQL to refine and transform existing code.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- To use natural language to generate SQL queries or Python code , use comments in code or the SQL generation tool .
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- You can use natural language with Gemini in BigQuery, to find, join, and query table assets, visualize results, and seamlessly collaborate with others throughout the entire process.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- DetailedInventory ( product STRING , quantity INT64 , supply constrained BOOLEAN , comments ARRAY<STRUCT<created DATE , comment STRING >> , specifications STRUCT<color STRING , warranty STRING , dimensions STRUCT<depth FLOAT64 , height FLOAT64 , width FLOAT64 >> ); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- On-demand query size calculation If you use on-demand billing, BigQuery charges for data manipulation language (DML) statements based on the number of bytes processed by the statement.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- Inventory ) THEN UPDATE SET comments = ARRAY CONCAT ( comments , ARRAY<STRUCT<created DATE , comment STRING >> [ ( CAST ( '2016-02-01' AS DATE ), 'comment2' ) ] ) These are the tables before you run the query: Inventory +-----------------+----------+ product quantity +-----------------+----------+ dryer 50 microwave 20 oven 35 refrigerator 25 top load washer 30 +-----------------+----------+ DetailedInventory +----------------------+----------+--------------------+-------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"}] NULL +----------------------+----------+--------------------+-------------------------------------------------+----------------+ This is the DetailedInventory table after you run the query: +----------------------+----------+--------------------+-----------------------------------------------------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-----------------------------------------------------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [{"created":"2016-02-01","comment":"comment2"}] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [{"created":"2016-02-01","comment":"comment2"}] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"},{"created":"2016-02-01","comment":"comment2"}] NULL +----------------------+----------+--------------------+-----------------------------------------------------------------------------------------------+----------------+ Example 6 In the following example, the query increases the inventory of products from the warehouse in CA .

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.
- TRANSLATION EXPLANATION : Generates text that includes a summary of the translated GoogleSQL query and the differences and inconsistencies between the source SQL query and the translated GoogleSQL query. rewrite target (optional): Specify SOURCE SQL if you want to apply the translation rule to your input SQL, or TARGET SQL (default) if you want to apply the translation rule to your output SQL. instruction (optional): In natural language, describe a change to the target SQL.
- Transform SQL translations using configuration YAML files This document shows you how to use configuration YAML files to transform SQL code while migrating it to BigQuery.
- The following example lists two separate configuration YAML files that were provided for a single SQL translation job, one to change a column's attribute, and the other to set the table as temporary: change-type-example.config.yaml : type : object rewriter attribute : - match : "testdb.testschema.x.a" type : target : NUMERIC(10,2) make-temp-example.config.yaml : type : object rewriter relation : - match : "testdb.testschema.x" temporary : true A SQL translation with these two configuration YAML files might look like the following: teradata-input.sql create table x ( a int ); bq-output.sql CREATE TEMPORARY TABLE x ( a NUMERIC ( 31 , 2 ) ) ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

