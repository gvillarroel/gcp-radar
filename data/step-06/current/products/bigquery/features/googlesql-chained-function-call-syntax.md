---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.312Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GoogleSQL chained function call syntax"
feature_slug: "googlesql-chained-function-call-syntax"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "googlesql"
  - "chained"
  - "call"
  - "syntax"
  - "supports"
  - "improve"
  - "readability"
  - "deeply"
---

# GoogleSQL chained function call syntax

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

GoogleSQL supports chained function call syntax to improve readability of deeply nested function calls.

## Extended Definition

GoogleSQL supports chained function call syntax to improve readability of deeply nested function calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The optional AS keyword can be added between the expression and the alias for improved readability.
- The optional AS keyword can be added between the tableId and the alias for improved readability.
- The preferred query syntax for BigQuery is GoogleSQL syntax .
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- WITH Grid AS ( SELECT 1 x , 2 y ) SELECT Coordinate FROM Grid AS Coordinate ; / --------------+ Coordinate +--------------+ {x: 1, y: 2} +-------------- / Value tables In addition to standard SQL tables , GoogleSQL supports value tables .
- The evaluation of a query with a QUALIFY clause is typically completed in this order: FROM WHERE GROUP BY and aggregation HAVING WINDOW QUALIFY DISTINCT ORDER BY LIMIT Evaluation order doesn't always match syntax order.
- The evaluation of a query with a HAVING clause is typically completed in this order: FROM WHERE GROUP BY and aggregation HAVING WINDOW QUALIFY DISTINCT ORDER BY LIMIT Evaluation order doesn't always match syntax order.
- The evaluation of a query with a WHERE clause is typically completed in this order: FROM WHERE GROUP BY and aggregation HAVING WINDOW QUALIFY DISTINCT ORDER BY LIMIT Evaluation order doesn't always match syntax order.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.
- See Table path syntax . view column name list : Lets you explicitly specify the column names of the view, which may be aliases to the column names in the underlying SQL query. view option list : Additional view creation options such as a label and an expiration time. query expression : The GoogleSQL query expression used to define the view.
- Syntax: export function aggregate ( state , aggregateParam [, ...][, nonAggregateParam ]){...} Parameters: state : The aggregate state, which is initialState on the first invocation, and then the return value of the previous call to aggregate thereafter. aggregateParam : The name of an aggregation parameter in the JavaScript UDAF.
- Data definition language (DDL) statements in GoogleSQL Data definition language (DDL) statements let you create and modify BigQuery resources using GoogleSQL query syntax.

