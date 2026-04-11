---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.752Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "QUALIFY clause in BigQuery Google Standard SQL"
feature_slug: "qualify-clause-in-bigquery-google-standard-sql"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "post-window filter"
  - "QUALIFY with analytic functions"
  - "QUALIFY filter clause"
  - "filtering analytic function output"
  - "QUALIFY in SELECT"
  - "QUALIFY clause"
  - "QUALIFY"
---

# QUALIFY clause in BigQuery Google Standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The QUALIFY clause allows filtering the output of analytic functions in Google Standard SQL queries.

## Extended Definition

The QUALIFY clause allows filtering the output of analytic functions in Google Standard SQL queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Example - the following two queries are equivalent: SELECT SUM ( PointsScored ), LastName FROM PlayerStats GROUP BY LastName ORDER BY LastName ; SELECT SUM ( PointsScored ), LastName FROM PlayerStats GROUP BY 2 ORDER BY 2 ; QUALIFY clause QUALIFY bool expression The QUALIFY clause filters the results of window functions.
- The evaluation of a query with a QUALIFY clause is typically completed in this order: FROM WHERE GROUP BY and aggregation HAVING WINDOW QUALIFY DISTINCT ORDER BY LIMIT Evaluation order doesn't always match syntax order.
- A window function is required to be present in the QUALIFY clause or the SELECT list.
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.

