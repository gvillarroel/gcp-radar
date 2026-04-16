---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.509Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUPING function"
feature_slug: "grouping-function"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "grouping"
  - "checks"
  - "whether"
  - "groupable"
  - "value"
  - "group"
  - "clause"
  - "aggregated"
---

# GROUPING function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The GROUPING function checks whether a groupable value in a GROUP BY clause is aggregated.

## Extended Definition

The GROUPING function checks whether a groupable value in a GROUP BY clause is aggregated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- For example: -- GROUP BY with GROUPING SETS and CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , CUBE ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without CUBE -- (produces the same results as GROUPING SETS with CUBE) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , product name , ()) ORDER BY product type , product name ; Group rows by ROLLUP GROUP BY ROLLUP ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY ROLLUP clause produces aggregated data for rolled up grouping sets .
- WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / Group rows by CUBE GROUP BY CUBE ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY CUBE clause produces aggregated data for all grouping set permutations.
- SELECT COUNT ( ) AS num rows FROM UNNEST ( [] ) GROUP BY ALL / ----------+ num rows +----------+ 0 +---------- / Group rows by GROUPING SETS GROUP BY GROUPING SETS ( grouping list ) grouping list : { rollup specification cube specification groupable item groupable item set }[, ...] groupable item set : ( [ groupable item [, ...] ] ) Description The GROUP BY GROUPING SETS clause produces aggregated data for one or more grouping sets .
- SchoolID ; GROUP BY clause GROUP BY group by specification group by specification : { groupable items ALL grouping sets specification rollup specification cube specification () } Description The GROUP BY clause groups together rows in a table that share common values for certain columns.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.
- Notes: If you use an aggregate function in your SELECT clause, you must either use an aggregate function in all expressions or your query must have a GROUP BY clause which includes all non-aggregated fields in your SELECT clause as grouping keys.
- Here we present the full grammar of SELECT statements in a compact form with links back to the individual sections. query : SELECT { field path . expression } [ [ AS ] alias ] [ , ... ] [ FROM from body [ WHERE bool expression ] [ OMIT RECORD IF bool expression ] [ GROUP [ EACH ] BY [ ROLLUP ] { field name or alias } [ , ... ] ] [ HAVING bool expression ] [ ORDER BY field name or alias [ { DESC ASC } ] [, ... ] ] [ LIMIT n ] ]; from body : { from item [, ...] # Warning : Comma means UNION ALL here from item [ join type ] JOIN [ EACH ] from item [ ON join predicate ] ( FLATTEN ( { table name ( query ) } , field name or alias )) table wildcard function } from item : { table name ( query ) } [ [ AS ] alias ] join type : { INNER [ FULL ] [ OUTER ] RIGHT [ OUTER ] LEFT [ OUTER ] CROSS } join predicate : field from one side of the join = field from the other side of the join [ AND ...] expression : { literal value field name or alias function call } bool expression : { expression which results in a boolean value bool expression AND bool expression bool expression OR bool expression NOT bool expression } Notation: Square brackets "[ ]" indicate optional clauses.
- In the example query, the ORDER BY clause causes the window to be computed from the start of the partition to the current row, which generates a cumulative sum for that year. legacySQL SELECT corpus date , corpus , word count , SUM ( word count ) OVER ( PARTITION BY corpus date ORDER BY word count ) annual total FROM [ bigquery - public - data : samples . shakespeare ] WHERE word = 'love' ORDER BY corpus date , word count Returns: corpus date corpus word count annual total 0 various 37 37 0 sonnets 157 194 1590 2kinghenryvi 18 18 1590 1kinghenryvi 24 42 1590 3kinghenryvi 40 82 CUME DIST() Returns a double that indicates the cumulative distribution of a value in a group of values, calculated using the formula <number of rows preceding or tied with the current row> / <total rows> .

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GROUPING Checks if a groupable value in the GROUP BY clause is aggregated.
- ST CLUSTERDBSCAN Performs DBSCAN clustering on a group of GEOGRAPHY values and produces a 0-based cluster number for this row.
- ST ISCOLLECTION Checks if the total number of points, linestrings, and polygons is greater than one in a GEOGRAPHY value.
- Gets the differentially-private average of non- NULL , non- NaN values in a query with a DIFFERENTIAL PRIVACY clause.

