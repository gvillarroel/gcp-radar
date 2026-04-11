---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.588Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery GROUPING function"
feature_slug: "bigquery-grouping-function"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "GROUPING for subtotal detection"
  - "GROUPING function syntax"
  - "GROUPING in GROUP BY"
  - "GROUPING() function"
  - "GROUPING function"
  - "GROUPING()"
  - "GROUPING"
---

# BigQuery GROUPING function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now generally supports the GROUPING function for identifying aggregated groupable values in GROUP BY queries.

## Extended Definition

In BigQuery, the GROUPING() function is used in GROUP BY queries (including ROLLUP, CUBE, and GROUPING SETS usage contexts) to help identify rows added by grouping operations. In the legacy SQL documentation, BigQuery shows GROUPING() in the SELECT list with GROUP BY ROLLUP to distinguish rollup-generated rows from rows that represent an actual NULL group key value. The GROUP BY reference also describes groupable items used by these constructs and their limits for ROLLUP/CUBE/GROUPING SETS.

## Evidence Summary

These official docs provide direct examples and syntax context showing GROUPING() with ROLLUP for row-type disambiguation and define the GROUP BY grouping-set constructs and grouping-item constraints in which it is applied.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, see the GROUPING function ROLLUP allows up to 4095 groupable items (equivalent to 4096 grouping sets).
- To learn more, see the GROUPING function CUBE allows up to 12 groupable items (equivalent to 4096 grouping sets).
- To learn more, see the GROUPING function GROUPING SETS allows up to 4096 groupable items.
- For example: -- GROUP BY with GROUPING SETS and CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , CUBE ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without CUBE -- (produces the same results as GROUPING SETS with CUBE) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , product name , ()) ORDER BY product type , product name ; Group rows by ROLLUP GROUP BY ROLLUP ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY ROLLUP clause produces aggregated data for rolled up grouping sets .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.
- These rows are the rollup rows. +------+---------+----------+ year is male count +------+---------+----------+ NULL NULL 12122730 2000 NULL 4063823 2000 false 1984255 2000 true 2079568 2001 NULL 4031531 2001 false 1970770 2001 true 2060761 2002 NULL 4027376 2002 false 1966519 2002 true 2060857 +------+---------+----------+ When using the ROLLUP function, you can use the GROUPING function to distinguish between rows that were added because of the ROLLUP function and rows that actually have a NULL value for the group key.
- Notes: If you use an aggregate function in your SELECT clause, you must either use an aggregate function in all expressions or your query must have a GROUP BY clause which includes all non-aggregated fields in your SELECT clause as grouping keys.
- Grouping occurs after the filtering performed in the WHERE clause but before the expressions in the SELECT clause are computed.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Special floating point values are grouped in the following way, including both grouping done by a GROUP BY clause and grouping done by the DISTINCT keyword: NULL NaN — All NaN values are considered equal when grouping. -inf 0 or -0 — All zero values are considered equal when grouping. +inf Grouping with arrays An ARRAY type is groupable if its element type is groupable.
- All data types are supported except for: GEOGRAPHY JSON GRAPH PATH Grouping with floating point types Groupable floating point types can appear in an expression following GROUP BY and DISTINCT .
- Grouping with structs A STRUCT type is groupable if its field types are groupable.

