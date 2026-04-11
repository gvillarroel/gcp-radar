---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.615Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP BY CUBE clause"
feature_slug: "group-by-cube-clause"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "all grouping combinations"
  - "grouping set permutations"
  - "CUBE aggregation"
  - "cube grouping"
  - "GROUP BY CUBE"
  - "GROUP BY cube"
  - "CUBE clause"
---

# GROUP BY CUBE clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery query syntax now supports the GROUP BY CUBE clause to generate aggregations for all grouping set permutations.

## Extended Definition

In BigQuery Standard SQL, GROUP BY CUBE is a GROUP BY form that produces aggregated results for all grouping set permutations of a given grouping list. The clause accepts groupable items (and grouped item sets) and generates summary rows for every combination of those items. It is used to create contingency-style aggregations, as shown in the documentation examples.

## Evidence Summary

The official BigQuery query syntax page explicitly defines GROUP BY CUBE, states it produces aggregated data for all grouping set permutations, and provides syntax and worked examples.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / Group rows by CUBE GROUP BY CUBE ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY CUBE clause produces aggregated data for all grouping set permutations.
- Examples The following query groups rows by all combinations of product type and product name to produce a contingency table: -- GROUP BY with CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY CUBE ( product type , product name ) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / You can include groupable item sets in a GROUP BY CUBE clause.
- To learn more, see Group rows by ROLLUP . cube specification : Group rows with the GROUP BY CUBE clause.
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY CUBE ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt polo 25 shirt t-shirt 11 shirt t-shirt 11 +--------------+--------------+------------- / HAVING clause HAVING bool expression The HAVING clause filters the results produced by GROUP BY or aggregation.

