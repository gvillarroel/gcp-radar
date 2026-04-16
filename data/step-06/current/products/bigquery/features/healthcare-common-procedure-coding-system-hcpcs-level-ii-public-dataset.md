---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.887Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Healthcare Common Procedure Coding System (HCPCS) Level II public dataset"
feature_slug: "healthcare-common-procedure-coding-system-hcpcs-level-ii-public-dataset"
latest_feature_date: "2017-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
keywords:
  - "healthcare"
  - "common"
  - "procedure"
  - "coding"
  - "system"
  - "hcpcs"
  - "level"
  - "ii"
---

# Healthcare Common Procedure Coding System (HCPCS) Level II public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the Healthcare Common Procedure Coding System (HCPCS) Level II dataset.

## Extended Definition

The BigQuery public datasets program includes the Healthcare Common Procedure Coding System (HCPCS) Level II dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Procedure options have the same syntax and requirements as table options but with a different list of NAME s and VALUE s: NAME VALUE Details strict mode BOOL It is useful for catching many common types of errors.
- The value JSON is equivalent to NEWLINE DELIMITED JSON . hive partition uri prefix STRING A common prefix for all source URIs before the partition key encoding begins.
- DROP PROCEDURE other-project . sample dataset . myprocedure ; DROP ROW ACCESS POLICY statement Deletes a row-level access policy.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Routines include persistent user-defined functions , table functions ( Preview ), and stored procedures . --row access policies When specified, lists all the row-level access policies on a table.
- In this case, you can call the BQ.REFRESH EXTERNAL METADATA CACHE system procedure to refresh the cache.
- The common prefix value is the portion of the URI that immediately precedes the partition key encoding.
- If you supply the --time partitioning expiration flag when you create or update a partitioned table, then the table-level partition expiration takes precedence over the dataset-level default partition expiration. --default table expiration= SECONDS An integer that specifies the default lifetime, in seconds, for newly created tables in a dataset.

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE OR REPLACE PROCEDURE schema1 . proc1 () BEGIN SELECT 1 / 0 ; END ; CREATE OR REPLACE PROCEDURE schema1 . proc2 () BEGIN CALL schema1 . proc1 (); END ; BEGIN CALL schema1 . proc2 (); EXCEPTION WHEN ERROR THEN SELECT @@ error . message , @@ error . stack trace , @@ error . statement text , @@ error . formatted stack trace ; END ; When the exception handler runs, the variables will have the following values: Variable Value @@error.message "Query error: division by zero: 1 / 0 at <project>.schema1.proc1:2:3]" @@error.stack trace [ STRUCT(2 AS line, 3 AS column, NULL AS filename, "<project>.schema1.proc1:2:3" AS location), STRUCT(2 AS line, 3 AS column, NULL AS filename, "<project>.schema1.proc2:2:3" AS location), STRUCT(10 AS line, 3 AS column, NULL AS filename, NULL AS location), ] @@error.statement text "SELECT 1/0" @@error.formatted stack trace "At <project>.schema1.proc1[2:3]\nAt <project>.schema1.proc2[2:3]\nAt [10:3]" CASE Syntax CASE WHEN boolean expression THEN sql statement list [...] [ ELSE sql statement list ] END CASE ; Description Executes the THEN sql statement list where the boolean expression is true, or the optional ELSE sql statement list if no conditions match.
- DECLARE x INT64 DEFAULT 0 ; REPEAT SET x = x + 1 ; SELECT x ; UNTIL x >= 3 END REPEAT ; This example outputs the following: / ---+ x +---+ 1 +--- / / ---+ x +---+ 2 +--- / / ---+ x +---+ 3 +--- / WHILE Syntax WHILE boolean expression DO sql statement list END WHILE ; There is a maximum nesting level of 50 for blocks and conditional statements such as BEGIN / END , IF / ELSE / END IF , and WHILE / END WHILE .
- If the frame occurs within a procedure body, then line 1 column 1 corresponds to the BEGIN keyword at the start of the procedure body. location: If the frame occurs within a procedure body, specifies the full name of the procedure, in the form [project name].[schema name].[procedure name] .
- UpdateSomeTables ( 'someAccountId' , retCode ); SELECT retCode ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

