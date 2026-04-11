---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.758Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scripting CASE statement"
feature_slug: "bigquery-scripting-case-statement"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
keywords:
  - "WHEN condition THEN"
  - "simple CASE"
  - "CASE statement in scripting"
  - "SQL CASE statement"
  - "GoogleSQL CASE"
  - "CASE statement"
  - "statement list"
---

# BigQuery scripting CASE statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The CASE statement was added to Google Standard SQL scripting to execute the first matching list of SQL statements when a condition is true.

## Extended Definition

The CASE statement was added to Google Standard SQL scripting to execute the first matching list of SQL statements when a condition is true.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)

## Supporting Pages

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- DECLARE target product id INT64 DEFAULT 103 ; IF EXISTS ( SELECT 1 FROM schema . products WHERE product id = target product id ) THEN SELECT CONCAT ( 'found product ' , CAST ( target product id AS STRING )); ELSEIF EXISTS ( SELECT 1 FROM schema . more products WHERE product id = target product id ) THEN SELECT CONCAT ( 'found product from more products table' , CAST ( target product id AS STRING )); ELSE SELECT CONCAT ( 'did not find product ' , CAST ( target product id AS STRING )); END IF ; Labels Syntax label name : BEGIN block statement list END [ label name ]; label name : LOOP loop statement list END LOOP [ label name ]; label name : WHILE condition DO loop statement list END WHILE [ label name ]; label name : FOR variable IN query DO loop statement list END FOR [ label name ]; label name : REPEAT loop statement list UNTIL boolean condition END REPEAT [ label name ]; block statement list : { statement break statement with label } [, ...] loop statement list : { statement break continue statement with label } [, ...] break statement with label : { BREAK LEAVE } label name ; break continue statement with label : { BREAK LEAVE CONTINUE ITERATE } label name ; Description A BREAK or CONTINUE statement with a label provides an unconditional jump to the end of the block or loop associated with that label.
- DECLARE target word STRING DEFAULT 'methinks' ; DECLARE corpus count , word count INT64 ; SET ( corpus count , word count ) = ( SELECT AS STRUCT COUNT ( DISTINCT corpus ), SUM ( word count ) FROM bigquery - public - data . samples . shakespeare WHERE LOWER ( word ) = target word ); SELECT FORMAT ( 'Found %d occurrences of "%s" across %d Shakespeare works' , word count , target word , corpus count ) AS result ; This statement list outputs the following string: Found 151 occurrences of "methinks" across 38 Shakespeare works EXECUTE IMMEDIATE Syntax EXECUTE IMMEDIATE sql expression [ INTO variable [ , ... ] ] [ USING identifier [ , ... ] ] ; sql expression : { "query statement" expression ( "query statement" ) } identifier : { variable value } [ AS alias ] Description Executes a dynamic SQL statement on the fly. sql expression : An expression that can represent one of the following: A query statement An expression that you can use on a query statement A single DDL statement A single DML statement A single DCL statement This expression can't be a control statement like IF . expression : Can be a function , conditional expression , or expression subquery . query statement : Represents a valid standalone SQL statement to execute.
- CREATE OR REPLACE PROCEDURE schema1 . proc1 () BEGIN SELECT 1 / 0 ; END ; CREATE OR REPLACE PROCEDURE schema1 . proc2 () BEGIN CALL schema1 . proc1 (); END ; BEGIN CALL schema1 . proc2 (); EXCEPTION WHEN ERROR THEN SELECT @@ error . message , @@ error . stack trace , @@ error . statement text , @@ error . formatted stack trace ; END ; When the exception handler runs, the variables will have the following values: Variable Value @@error.message "Query error: division by zero: 1 / 0 at <project>.schema1.proc1:2:3]" @@error.stack trace [ STRUCT(2 AS line, 3 AS column, NULL AS filename, "<project>.schema1.proc1:2:3" AS location), STRUCT(2 AS line, 3 AS column, NULL AS filename, "<project>.schema1.proc2:2:3" AS location), STRUCT(10 AS line, 3 AS column, NULL AS filename, NULL AS location), ] @@error.statement text "SELECT 1/0" @@error.formatted stack trace "At <project>.schema1.proc1[2:3]\nAt <project>.schema1.proc2[2:3]\nAt [10:3]" CASE Syntax CASE WHEN boolean expression THEN sql statement list [...] [ ELSE sql statement list ] END CASE ; Description Executes the THEN sql statement list where the boolean expression is true, or the optional ELSE sql statement list if no conditions match.
- DECLARE target product id INT64 DEFAULT 103 ; CASE WHEN EXISTS ( SELECT 1 FROM schema . products a WHERE product id = target product id ) THEN SELECT 'found product in products a table' ; WHEN EXISTS ( SELECT 1 FROM schema . products b WHERE product id = target product id ) THEN SELECT 'found product in products b table' ; ELSE SELECT 'did not find product' ; END CASE ; CASE search expression Syntax CASE search expression WHEN expression THEN sql statement list [...] [ ELSE sql statement list ] END CASE ; Description Executes the first sql statement list where the search expression is matches a WHEN expression.

