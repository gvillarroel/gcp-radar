---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.616Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP BY ROLLUP clause"
feature_slug: "group-by-rollup-clause"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "super-aggregate rows"
  - "groupable-item sets"
  - "GROUP BY ROLLUP syntax"
  - "ROLLUP aggregation"
  - "ROLLUP grouping"
  - "GROUP BY ROLLUP"
  - "ROLLUP clause"
---

# GROUP BY ROLLUP clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery query syntax now includes groupable-item sets support in the GROUP BY ROLLUP clause.

## Extended Definition

The GROUP BY ROLLUP clause in BigQuery Standard SQL produces aggregated results for rolled-up grouping sets based on a grouping list. The grouping list may include groupable items or groupable-item sets (parenthesized item lists), enabling a single query to return regular grouped rows plus subtotal and grand-total rows. The documentation shows this behavior by contrasting ROLLUP output with equivalent SQL built from separate GROUP BY/UNION ALL queries.

## Evidence Summary

This page provides the ROLLUP grammar and semantics, including support for groupable-item sets and examples that demonstrate subtotal/grand-total behavior equivalent to explicit grouped unions.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- For example: -- GROUP BY with GROUPING SETS and CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , CUBE ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without CUBE -- (produces the same results as GROUPING SETS with CUBE) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , product name , ()) ORDER BY product type , product name ; Group rows by ROLLUP GROUP BY ROLLUP ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY ROLLUP clause produces aggregated data for rolled up grouping sets .
- Examples The following queries produce the same subtotals and a grand total, but the first one uses GROUP BY with ROLLUP and the second one doesn't: -- GROUP BY with ROLLUP WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , product name ) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt t-shirt 11 shirt polo 25 +--------------+--------------+------------- / -- GROUP BY without ROLLUP (produces the same results as ROLLUP) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name UNION ALL SELECT product type , NULL , SUM ( product count ) FROM Products GROUP BY product type UNION ALL SELECT NULL , NULL , SUM ( product count ) FROM Products ORDER BY product type , product name ; You can include groupable item sets in a GROUP BY ROLLUP clause.
- To learn more, see Group rows by GROUPING SETS . rollup specification : Group rows with the GROUP BY ROLLUP clause.
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / Group rows by CUBE GROUP BY CUBE ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY CUBE clause produces aggregated data for all grouping set permutations.

