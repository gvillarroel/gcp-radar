---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.708Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scripting REPEAT statement"
feature_slug: "scripting-repeat-statement"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "scripting"
  - "repeat"
  - "statement"
  - "repeatedly"
  - "executes"
  - "sql"
  - "statements"
  - "until"
---

# Scripting REPEAT statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The scripting REPEAT statement repeatedly executes SQL statements until a boolean condition becomes true.

## Extended Definition

The scripting REPEAT statement repeatedly executes SQL statements until a boolean condition becomes true.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DECLARE x INT64 DEFAULT 0 ; LOOP SET x = x + 1 ; IF x >= 10 THEN LEAVE ; END IF ; END LOOP ; SELECT x ; This example outputs the following: / ----+ x +----+ 10 +---- / REPEAT Syntax REPEAT sql statement list UNTIL boolean condition END REPEAT ; Description Repeatedly executes a list of zero or more SQL statements until the boolean condition at the end of the list is TRUE .
- DECLARE x INT64 DEFAULT 0 ; REPEAT SET x = x + 1 ; SELECT x ; UNTIL x >= 3 END REPEAT ; This example outputs the following: / ---+ x +---+ 1 +--- / / ---+ x +---+ 2 +--- / / ---+ x +---+ 3 +--- / WHILE Syntax WHILE boolean expression DO sql statement list END WHILE ; There is a maximum nesting level of 50 for blocks and conditional statements such as BEGIN / END , IF / ELSE / END IF , and WHILE / END WHILE .
- This throws an error: label 1 : BEGIN SELECT 1 ; CONTINUE label 1 ; -- Error SELECT 2 ; END ; Loops LOOP Syntax LOOP sql statement list END LOOP ; Description Executes sql statement list until a BREAK or LEAVE statement exits the loop. sql statement list is a list of zero or more SQL statements ending with semicolons.
- Examples The following example declares a variable x with the default value 0 ; then, it uses the REPEAT statement to create a loop that executes until the variable x is greater than or equal to 3 .

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Warehouse ( warehouse STRING , state STRING ); DetailedInventory table [ { "name" : "product" , "type" : "string" } , { "name" : "quantity" , "type" : "integer" } , { "name" : "supply constrained" , "type" : "boolean" } , { "name" : "comments" , "type" : "record" , "mode" : "repeated" , "fields" : [ { "name" : "created" , "type" : "date" } , { "name" : "comment" , "type" : "string" } ]} , { "name" : "specifications" , "type" : "record" , "fields" : [ { "name" : "color" , "type" : "string" } , { "name" : "warranty" , "type" : "string" } , { "name" : "dimensions" , "type" : "record" , "fields" : [ { "name" : "depth" , "type" : "float" } , { "name" : "height" , "type" : "float" } , { "name" : "width" , "type" : "float" } ]} ]} ] DDL statement to create this table: CREATE OR REPLACE TABLE dataset .
- INSERT [ INTO ] target name [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) [ , ..., ( expr k 1 [ , ..., expr k n ] ) ] SELECT QUERY expr ::= value expression DEFAULT INSERT statements must comply with the following rules: Column names are optional if the target table is not an ingestion-time partitioned table .
- On-demand query size calculation If you use on-demand billing, BigQuery charges for data manipulation language (DML) statements based on the number of bytes processed by the statement.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY Setting the VALUE replaces the existing value of that option for the column, if there was one.

