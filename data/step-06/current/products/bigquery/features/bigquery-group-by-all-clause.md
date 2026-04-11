---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.429Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery GROUP BY ALL clause"
feature_slug: "bigquery-group-by-all-clause"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "infer grouping keys"
  - "SELECT items grouping"
  - "grouping from SELECT"
  - "GROUP BY ALL syntax"
  - "GROUP BY ALL clause"
  - "BigQuery Standard SQL"
  - "ALL grouping"
  - "GROUP BY ALL"
---

# BigQuery GROUP BY ALL clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery SQL now supports the GROUP BY ALL clause; BigQuery now provides a GROUP BY ALL clause to infer grouping keys from SELECT items.

## Extended Definition

In BigQuery Standard SQL, `GROUP BY ALL` is a grouping clause that groups rows by inferring grouping keys from the SELECT list items instead of requiring an explicit column list. The documentation states it excludes select expressions that contain aggregate functions from those inferred keys, and the example behavior also shows that a SELECT item using a window (analytic) function is not used as a grouping key.

## Evidence Summary

The official BigQuery query syntax reference defines `GROUP BY ALL` behavior, including inferred grouping from SELECT items and the exclusion of aggregate/analytic expression-based SELECT items from grouping inference.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- The following queries are equivalent: WITH PlayerStats AS ( SELECT 'Adams' as LastName , 'Noam' as FirstName , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 'Jie' , 0 UNION ALL SELECT 'Coolidge' , 'Kiran' , 1 UNION ALL SELECT 'Adams' , 'Noam' , 4 UNION ALL SELECT 'Buchanan' , 'Jie' , 13 ) SELECT SUM ( PointsScored ) AS total points , LastName , FirstName FROM PlayerStats GROUP BY LastName , FirstName ; / --------------+----------+-----------+ total points LastName FirstName +--------------+----------+-----------+ 7 Adams Noam 13 Buchanan Jie 1 Coolidge Kiran +--------------+----------+----------- / WITH PlayerStats AS ( SELECT 'Adams' as LastName , 'Noam' as FirstName , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 'Jie' , 0 UNION ALL SELECT 'Coolidge' , 'Kiran' , 1 UNION ALL SELECT 'Adams' , 'Noam' , 4 UNION ALL SELECT 'Buchanan' , 'Jie' , 13 ) SELECT SUM ( PointsScored ) AS total points , LastName , FirstName FROM PlayerStats GROUP BY 2 , 3 ; / --------------+----------+-----------+ total points LastName FirstName +--------------+----------+-----------+ 7 Adams Noam 13 Buchanan Jie 1 Coolidge Kiran +--------------+----------+----------- / Group rows by ALL GROUP BY ALL Description The GROUP BY ALL clause groups rows by inferring grouping keys from the SELECT items.
- The following SELECT items are excluded from the GROUP BY ALL clause: Expressions that include aggregate functions .
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / Group rows by CUBE GROUP BY CUBE ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY CUBE clause produces aggregated data for all grouping set permutations.
- WITH PlayerStats AS ( SELECT 'Adams' as LastName , 'Noam' as FirstName , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 'Jie' , 0 UNION ALL SELECT 'Coolidge' , 'Kiran' , 1 UNION ALL SELECT 'Adams' , 'Noam' , 4 UNION ALL SELECT 'Buchanan' , 'Jie' , 13 ) SELECT SUM ( PointsScored ) AS total points , FirstName AS first name , LastName AS last name FROM PlayerStats GROUP BY ALL ; / --------------+------------+-----------+ total points first name last name +--------------+------------+-----------+ 7 Noam Adams 13 Jie Buchanan 1 Kiran Coolidge +--------------+------------+----------- / If the select list contains an analytic function, the query groups rows by first name and last name . total people is excluded because it contains a window function.

