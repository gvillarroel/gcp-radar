---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.760Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scripting REPEAT statement"
feature_slug: "bigquery-scripting-repeat-statement"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
keywords:
  - "END REPEAT"
  - "REPEAT statement in scripts"
  - "UNTIL condition"
  - "REPEAT UNTIL"
  - "REPEAT loop"
  - "loop statements"
  - "REPEAT statement"
  - "BigQuery scripting"
---

# BigQuery scripting REPEAT statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The REPEAT statement was added to BigQuery scripting to repeatedly execute SQL statements until a terminating boolean condition becomes true.

## Extended Definition

The REPEAT statement was added to BigQuery scripting to repeatedly execute SQL statements until a terminating boolean condition becomes true.

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
- DECLARE x INT64 DEFAULT 0 ; REPEAT SET x = x + 1 ; SELECT x ; UNTIL x >= 3 END REPEAT ; This example outputs the following: / ---+ x +---+ 1 +--- / / ---+ x +---+ 2 +--- / / ---+ x +---+ 3 +--- / WHILE Syntax WHILE boolean expression DO sql statement list END WHILE ; There is a maximum nesting level of 50 for blocks and conditional statements such as BEGIN / END , IF / ELSE / END IF , and WHILE / END WHILE .
- DECLARE x INT64 DEFAULT 0 ; LOOP SET x = x + 1 ; IF x >= 10 THEN LEAVE ; END IF ; END LOOP ; SELECT x ; This example outputs the following: / ----+ x +----+ 10 +---- / REPEAT Syntax REPEAT sql statement list UNTIL boolean condition END REPEAT ; Description Repeatedly executes a list of zero or more SQL statements until the boolean condition at the end of the list is TRUE .
- Examples The following example declares a variable x with the default value 0 ; then, it uses the REPEAT statement to create a loop that executes until the variable x is greater than or equal to 3 .

