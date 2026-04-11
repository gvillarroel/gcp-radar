---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.952Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Aggregate functions"
feature_slug: "aggregate-functions"
latest_feature_date: "2013-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "COUNTIF()"
  - "SUM()"
  - "AVG()"
  - "aggregation syntax"
  - "aggregate functions"
  - "agg functions"
  - "aggregate SQL"
  - "COUNT()"
---

# Aggregate functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added new aggregate SQL functions for summarizing data.

## Extended Definition

BigQuery added new aggregate SQL functions for summarizing data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines how aggregate functions are used in SELECT and how they interact with GROUP BY, which is useful for aggregate-function behavior.

Evidence snippets:
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.
- AVG( numeric expr ) COUNT( ) COUNT([DISTINCT] field ) MAX( field ) MIN( field ) STDDEV( numeric expr ) SUM( field ) These window functions perform the same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.
- Therefore, the following query is valid, even though the clicks field is not displayed directly: legacySQL SELECT country , SUM ( clicks ) FROM table GROUP BY country ; Aggregate functions AVG() Returns the average of the values for a group of rows ...
- Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is specifically focused on BigQuery aggregate functions, but only for the approximate family (e.g., APPROX_*), not aggregate functions in general.

Evidence snippets:
- For example: SELECT APPROX TOP COUNT ( x , 2 ) as approx top count FROM UNNEST ( [ NULL , "pear" , "pear" , "pear" , "apple" , NULL ] ) as x ; / ------------------------+ approx top count +------------------------+ [{pear, 3}, {NULL, 2}] +------------------------ / APPROX TOP SUM APPROX TOP SUM ( expression , weight , number ) Description Returns the approximate top elements of expression , ordered by the sum of the weight values provided for each unique value of expression .
- Function list Name Summary APPROX COUNT DISTINCT Gets the approximate result for COUNT(DISTINCT expression) .
- Examples SELECT APPROX QUANTILES ( x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 5, 10] +------------------ / SELECT APPROX QUANTILES ( x , 100 ) [ OFFSET ( 90 ) ] AS percentile 90 FROM UNNEST ( [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ---------------+ percentile 90 +---------------+ 9 +--------------- / SELECT APPROX QUANTILES ( DISTINCT x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 6, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 4, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( DISTINCT x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 6, 10] +------------------ / APPROX TOP COUNT APPROX TOP COUNT ( expression , number ) Description Returns the approximate top elements of expression as an array of STRUCT s.
- SELECT APPROX TOP SUM ( x , weight , 2 ) AS approx top sum FROM UNNEST ( [ STRUCT ( "apple" AS x , NULL AS weight ), ( "pear" , 0 ), ( "pear" , NULL ) ] ); / ----------------------------+ approx top sum +----------------------------+ [{pear, 0}, {apple, NULL}] +---------------------------- / SELECT APPROX TOP SUM ( x , weight , 2 ) AS approx top sum FROM UNNEST ( [ STRUCT ( "apple" AS x , 0 AS weight ), ( NULL , 2 ) ] ); / -------------------------+ approx top sum +-------------------------+ [{NULL, 2}, {apple, 0}] +------------------------- / SELECT APPROX TOP SUM ( x , weight , 2 ) AS approx top sum FROM UNNEST ( [ STRUCT ( "apple" AS x , 0 AS weight ), ( NULL , NULL ) ] ); / ----------------------------+ approx top sum +----------------------------+ [{apple, 0}, {NULL, NULL}] +---------------------------- / Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: It defines query statement structure, but it does not describe specific aggregate function definitions or behavior.

Evidence snippets:
- Details The following functions can be used on any column in a query with the AGGREGATION THRESHOLD clause, including the commonly used COUNT , SUM , and AVG functions: APPROX COUNT DISTINCT AVG COUNT COUNTIF LOGICAL AND LOGICAL OR SUM COVAR POP COVAR SAMP STDDEV POP STDDEV SAMP VAR POP VAR SAMP Example In the following example, an aggregation threshold is enforced on a query.
- For example: -- GROUP BY with GROUPING SETS and CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , CUBE ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without CUBE -- (produces the same results as GROUPING SETS with CUBE) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , product name , ()) ORDER BY product type , product name ; Group rows by ROLLUP GROUP BY ROLLUP ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY ROLLUP clause produces aggregated data for rolled up grouping sets .
- Examples The following queries produce the same subtotals and a grand total, but the first one uses GROUP BY with ROLLUP and the second one doesn't: -- GROUP BY with ROLLUP WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , product name ) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt t-shirt 11 shirt polo 25 +--------------+--------------+------------- / -- GROUP BY without ROLLUP (produces the same results as ROLLUP) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name UNION ALL SELECT product type , NULL , SUM ( product count ) FROM Products GROUP BY product type UNION ALL SELECT NULL , NULL , SUM ( product count ) FROM Products ORDER BY product type , product name ; You can include groupable item sets in a GROUP BY ROLLUP clause.
- In the example below, (product type, product name) is a groupable item set. -- GROUP BY with GROUPING SETS and a groupable item set WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS but without a groupable item set -- (produces the same results as GROUPING SETS with a groupable item set) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , NULL , SUM ( product count ) AS product sum FROM Products GROUP BY product type UNION ALL SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name ORDER BY product type , product name ; You can include ROLLUP in a GROUP BY GROUPING SETS clause.

