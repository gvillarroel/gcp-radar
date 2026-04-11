---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.587Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery GROUP BY CUBE"
feature_slug: "bigquery-group-by-cube"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "ROLLUP and CUBE"
  - "CUBE with aggregate functions"
  - "GROUP BY CUBE clause"
  - "cube grouping"
  - "cube group by"
  - "GROUP BY CUBE"
  - "GROUP BY cube"
  - "grouping sets"
---

# BigQuery GROUP BY CUBE

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now generally supports the GROUP BY CUBE clause for generating all grouping set permutations.

## Extended Definition

In BigQuery Standard SQL, `GROUP BY CUBE` is a `GROUP BY` clause form that takes a grouping list of one or more groupable items (including nested item sets) and generates grouping sets for all permutations of that list. For each generated grouping set, it returns aggregated results, with columns not included in a given set being aggregated into a `NULL` placeholder, and the behavior is equivalent to `GROUP BY ROLLUP` but across all permutations, including the empty grouping set. The documentation examples show it producing a contingency-table-style output over all combinations.

## Evidence Summary

The official BigQuery query syntax page explicitly defines `GROUP BY CUBE`, explains its permutation-based grouping-set generation, and documents result behavior including null placeholders and comparison to `ROLLUP`.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides core GROUP BY grammar context, which is relevant to validating support for CUBE-style grouping extensions.

Evidence snippets:
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / Group rows by CUBE GROUP BY CUBE ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY CUBE clause produces aggregated data for all grouping set permutations.
- Examples The following query groups rows by all combinations of product type and product name to produce a contingency table: -- GROUP BY with CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY CUBE ( product type , product name ) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / You can include groupable item sets in a GROUP BY CUBE clause.
- For example, GROUP BY CUBE (a, b, c) generates the following grouping sets from the grouping list, a, b, c , and then produces aggregated rows for each of them: (a, b, c) (a, b) (a, c) (a) (b, c) (b) (c) () Here is an example that includes groupable item sets in GROUP BY CUBE (a, (b, c), d) : Conceptual grouping sets Actual grouping sets (a, (b, c), d) (a, b, c, d) (a, (b, c)) (a, b, c) (a, d) (a, d) (a) (a) ((b, c), d) (b, c, d) ((b, c)) (b, c) (d) (d) () () When evaluating the results for a particular grouping set, expressions that aren't in the grouping set are aggregated and produce a NULL placeholder.
- Details GROUP BY CUBE is similar to GROUP BY ROLLUP , except that it takes a grouping list and generates grouping sets from all permutations in this list, including an empty grouping set.

