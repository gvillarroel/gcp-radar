---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.696Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "QUALIFY clause"
feature_slug: "qualify-clause"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "qualify"
  - "clause"
  - "lets"
  - "standard"
  - "sql"
  - "queries"
  - "filter"
  - "results"
---

# QUALIFY clause

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The QUALIFY clause lets Google Standard SQL queries filter results produced by analytic functions; The QUALIFY clause filters query results based on window function output in BigQuery SQL.

## Extended Definition

The QUALIFY clause lets Google Standard SQL queries filter results produced by analytic functions; The QUALIFY clause filters query results based on window function output in BigQuery SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example - the following two queries are equivalent: SELECT SUM ( PointsScored ), LastName FROM PlayerStats GROUP BY LastName ORDER BY LastName ; SELECT SUM ( PointsScored ), LastName FROM PlayerStats GROUP BY 2 ORDER BY 2 ; QUALIFY clause QUALIFY bool expression The QUALIFY clause filters the results of window functions.
- Examples The following queries produce the same subtotals and a grand total, but the first one uses GROUP BY with ROLLUP and the second one doesn't: -- GROUP BY with ROLLUP WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , product name ) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt t-shirt 11 shirt polo 25 +--------------+--------------+------------- / -- GROUP BY without ROLLUP (produces the same results as ROLLUP) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name UNION ALL SELECT product type , NULL , SUM ( product count ) FROM Products GROUP BY product type UNION ALL SELECT NULL , NULL , SUM ( product count ) FROM Products ORDER BY product type , product name ; You can include groupable item sets in a GROUP BY ROLLUP clause.
- Examples The following queries produce the same results, but the first one uses GROUP BY GROUPING SETS and the second one doesn't: -- GROUP BY with GROUPING SETS WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , product name ) ORDER BY product name / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ shirt NULL 36 pants NULL 6 NULL jeans 6 NULL polo 25 NULL t-shirt 11 +--------------+--------------+------------- / -- GROUP BY without GROUPING SETS -- (produces the same results as GROUPING SETS) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , NULL , SUM ( product count ) AS product sum FROM Products GROUP BY product type UNION ALL SELECT NULL , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product name ORDER BY product name You can include groupable item sets in a GROUP BY GROUPING SETS clause.
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.

### Work with pipe query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ItemData USING ( item ); / ---------+-------------+-----------+-----+ item total sales num sales id +---------+-------------+-----------+-----+ apples 9 2 123 bananas 15 1 456 +---------+-------------+-----------+----- / Key differences from standard syntax Pipe syntax differs from standard syntax in the following ways: Queries can start with a FROM clause .
- The WHERE pipe operator, which replaces HAVING and QUALIFY , can filter the results of aggregation or window functions.
- Basic syntax In pipe syntax, queries start with a standard SQL query or a FROM clause.
- Produce > AGGREGATE SUM ( sales ) AS total , COUNT ( ) AS num records GROUP BY item , category ; / ---------+-----------+-------+-------------+ item category total num records +---------+-----------+-------+-------------+ apples fruit 9 2 carrots vegetable 0 1 bananas fruit 15 1 +---------+-----------+-------+------------- / If you are ready to order your results immediately following aggregation, you can mark the columns in the GROUP BY clause that you want to order with ASC or DESC .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- The source table must be one of the following: A table A table clone A table snapshot The FOR SYSTEM TIME AS OF clause can only be used when creating a snapshot of a table or table clone; it can't be used when making a copy of a table snapshot. snapshot option list The option list lets you set table snapshot options such as a label and an expiration time.
- This property can only be set if the table is partitioned. require partition filter BOOL Example: require partition filter=true Specifies whether queries on this table must include a predicate filter that filters on the partitioning column.

