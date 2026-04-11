---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.615Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP BY GROUPING SETS clause"
feature_slug: "group-by-grouping-sets-clause"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "grouping set combinations"
  - "aggregate across grouping sets"
  - "GROUP BY GROUPING SETS"
  - "multiple grouping sets"
  - "GROUPING SETS clause"
  - "grouping-sets clause"
  - "GROUPING SETS"
---

# GROUP BY GROUPING SETS clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery query syntax now supports the GROUP BY GROUPING SETS clause to produce aggregated results for multiple grouping sets.

## Extended Definition

In BigQuery Standard SQL, the `GROUP BY GROUPING SETS` clause produces aggregated results for one or more grouping sets in a single query. The clause syntax is `GROUP BY GROUPING SETS ( grouping list )`, where the grouping list can include rollup specifications, cube specifications, groupable items, and groupable item sets, and examples show it can express equivalent results to multiple separate `GROUP BY` queries. The feature supports both direct grouping-set item combinations and nested forms such as `ROLLUP` and `CUBE` within `GROUPING SETS`.

## Evidence Summary

The cited BigQuery query syntax documentation defines the `GROUP BY GROUPING SETS` grammar, states its purpose, and provides examples showing how it produces aggregate results across multiple grouping sets, including optional `ROLLUP` and `CUBE` usage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: The syntax reference includes the GROUP BY clause grammar, which can provide supporting context for grouping-set-related syntax.

Evidence snippets:
- In the example below, (product type, product name) is a groupable item set. -- GROUP BY with GROUPING SETS and a groupable item set WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS but without a groupable item set -- (produces the same results as GROUPING SETS with a groupable item set) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , NULL , SUM ( product count ) AS product sum FROM Products GROUP BY product type UNION ALL SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name ORDER BY product type , product name ; You can include ROLLUP in a GROUP BY GROUPING SETS clause.
- Examples The following queries produce the same results, but the first one uses GROUP BY GROUPING SETS and the second one doesn't: -- GROUP BY with GROUPING SETS WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , product name ) ORDER BY product name / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ shirt NULL 36 pants NULL 6 NULL jeans 6 NULL polo 25 NULL t-shirt 11 +--------------+--------------+------------- / -- GROUP BY without GROUPING SETS -- (produces the same results as GROUPING SETS) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , NULL , SUM ( product count ) AS product sum FROM Products GROUP BY product type UNION ALL SELECT NULL , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product name ORDER BY product name You can include groupable item sets in a GROUP BY GROUPING SETS clause.
- For example: -- GROUP BY with GROUPING SETS and ROLLUP WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ROLLUP ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without ROLLUP -- (produces the same results as GROUPING SETS with ROLLUP) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , ()) ORDER BY product type , product name ; You can include CUBE in a GROUP BY GROUPING SETS clause.
- SELECT COUNT ( ) AS num rows FROM UNNEST ( [] ) GROUP BY ALL / ----------+ num rows +----------+ 0 +---------- / Group rows by GROUPING SETS GROUP BY GROUPING SETS ( grouping list ) grouping list : { rollup specification cube specification groupable item groupable item set }[, ...] groupable item set : ( [ groupable item [, ...] ] ) Description The GROUP BY GROUPING SETS clause produces aggregated data for one or more grouping sets .

