---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.616Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUPING function"
feature_slug: "grouping-function"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "grouped value flag"
  - "GROUP BY ROLLUP"
  - "GROUPING expression"
  - "GROUP BY CUBE"
  - "GROUPING in GoogleSQL"
  - "GROUPING function"
  - "GROUPING()"
  - "GROUPING"
---

# GROUPING function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports the GROUPING function to indicate whether a grouped value was aggregated.

## Extended Definition

`GROUPING()` in BigQuery is a SQL function used in grouping queries to help identify rows added by rollup-level aggregation. In the provided Legacy SQL examples, it is used with `GROUP BY ROLLUP` to distinguish rollup-generated rows from rows that contain an actual `NULL` group-key value. Evidence shows this distinction is needed because grouped results can include `NULL` placeholders for non-grouped fields.

## Evidence Summary

The legacy SQL page documents `GROUPING()` usage with `ROLLUP` to label subtotal rows, while the standard SQL query-syntax page explains that grouping operations can emit rows with `NULL` placeholders for fields not in a given grouping set.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: The page is focused on statement syntax, not detailed documentation of individual built-in functions such as GROUPING.

Evidence snippets:
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / Group rows by CUBE GROUP BY CUBE ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY CUBE clause produces aggregated data for all grouping set permutations.
- Details GROUP BY CUBE is similar to GROUP BY ROLLUP , except that it takes a grouping list and generates grouping sets from all permutations in this list, including an empty grouping set.
- For example: -- GROUP BY with GROUPING SETS and CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , CUBE ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without CUBE -- (produces the same results as GROUPING SETS with CUBE) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , product name , ()) ORDER BY product type , product name ; Group rows by ROLLUP GROUP BY ROLLUP ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY ROLLUP clause produces aggregated data for rolled up grouping sets .
- For example, GROUP BY CUBE (a, b, c) generates the following grouping sets from the grouping list, a, b, c , and then produces aggregated rows for each of them: (a, b, c) (a, b) (a, c) (a) (b, c) (b) (c) () Here is an example that includes groupable item sets in GROUP BY CUBE (a, (b, c), d) : Conceptual grouping sets Actual grouping sets (a, (b, c), d) (a, b, c, d) (a, (b, c)) (a, b, c) (a, d) (a, d) (a) (a) ((b, c), d) (b, c, d) ((b, c)) (b, c) (d) (d) () () When evaluating the results for a particular grouping set, expressions that aren't in the grouping set are aggregated and produce a NULL placeholder.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 44
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

