---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.588Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery GROUP BY GROUPING SETS"
feature_slug: "bigquery-group-by-grouping-sets"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "multiple grouping set aggregations"
  - "grouping sets aggregation"
  - "SELECT with GROUPING SETS"
  - "GROUP BY GROUPING SETS"
  - "multiple grouping sets"
  - "GROUPING SETS clause"
  - "GROUPING SETS"
---

# BigQuery GROUP BY GROUPING SETS

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now generally supports the GROUP BY GROUPING SETS clause for producing multiple grouping set aggregations.

## Extended Definition

In BigQuery Standard SQL, `GROUP BY GROUPING SETS` is a `GROUP BY` clause form that produces aggregated results for multiple grouping sets in a single query. The syntax supports a grouping list composed of groupable items, groupable item sets, and rollup/cube specifications, and the documented examples show these queries returning the same results as separate equivalent `GROUP BY` statements.

## Evidence Summary

The referenced BigQuery syntax page defines `GROUP BY GROUPING SETS`, its allowed grouping-list forms, and shows equivalent-query examples demonstrating multi-grouping-set aggregation behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- In the example below, (product type, product name) is a groupable item set. -- GROUP BY with GROUPING SETS and a groupable item set WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS but without a groupable item set -- (produces the same results as GROUPING SETS with a groupable item set) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , NULL , SUM ( product count ) AS product sum FROM Products GROUP BY product type UNION ALL SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name ORDER BY product type , product name ; You can include ROLLUP in a GROUP BY GROUPING SETS clause.
- Examples The following queries produce the same results, but the first one uses GROUP BY GROUPING SETS and the second one doesn't: -- GROUP BY with GROUPING SETS WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , product name ) ORDER BY product name / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ shirt NULL 36 pants NULL 6 NULL jeans 6 NULL polo 25 NULL t-shirt 11 +--------------+--------------+------------- / -- GROUP BY without GROUPING SETS -- (produces the same results as GROUPING SETS) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , NULL , SUM ( product count ) AS product sum FROM Products GROUP BY product type UNION ALL SELECT NULL , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product name ORDER BY product name You can include groupable item sets in a GROUP BY GROUPING SETS clause.
- For example: -- GROUP BY with GROUPING SETS and ROLLUP WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ROLLUP ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without ROLLUP -- (produces the same results as GROUPING SETS with ROLLUP) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , ()) ORDER BY product type , product name ; You can include CUBE in a GROUP BY GROUPING SETS clause.
- SELECT COUNT ( ) AS num rows FROM UNNEST ( [] ) GROUP BY ALL / ----------+ num rows +----------+ 0 +---------- / Group rows by GROUPING SETS GROUP BY GROUPING SETS ( grouping list ) grouping list : { rollup specification cube specification groupable item groupable item set }[, ...] groupable item set : ( [ groupable item [, ...] ] ) Description The GROUP BY GROUPING SETS clause produces aggregated data for one or more grouping sets .

