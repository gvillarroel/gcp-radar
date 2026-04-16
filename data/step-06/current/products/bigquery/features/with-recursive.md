---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.621Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "WITH RECURSIVE"
feature_slug: "with-recursive"
latest_feature_date: "2023-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
keywords:
  - "recursive"
  - "clause"
  - "lets"
  - "queries"
  - "include"
  - "common"
  - "table"
  - "expressions"
---

# WITH RECURSIVE

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The WITH RECURSIVE clause lets queries include recursive common table expressions; WITH RECURSIVE enables recursive common table expressions in Google Standard SQL for BigQuery.

## Extended Definition

The WITH RECURSIVE clause lets queries include recursive common table expressions; WITH RECURSIVE enables recursive common table expressions in Google Standard SQL for BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 ORDER BY n )) SELECT FROM T1 ; -- Error The following recursive CTE is disallowed because table T1 can't be recursively referenced from inside an inner WITH clause WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( WITH t AS ( SELECT n FROM T1 ) SELECT FROM t )) SELECT FROM T1 -- Error CTE rules and constraints Common table expressions (CTEs) can be referenced inside the query expression that contains the WITH clause.
- Examples SELECT FROM UNNEST ( ARRAY<STRING> [ 'a' , 'b' , 'c' , 'd' , 'e' ] ) AS letter ORDER BY letter ASC LIMIT 2 ; / ---------+ letter +---------+ a b +--------- / SELECT FROM UNNEST ( ARRAY<STRING> [ 'a' , 'b' , 'c' , 'd' , 'e' ] ) AS letter ORDER BY letter ASC LIMIT 3 OFFSET 1 ; / ---------+ letter +---------+ b c d +--------- / WITH clause WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] A WITH clause contains one or more common table expressions (CTEs).
- Examples In this example, a WITH clause defines two non-recursive CTEs that are referenced in the related set operation, where one CTE is referenced by each of the set operation's input query expressions: WITH subQ1 AS ( SELECT SchoolID FROM Roster ), subQ2 AS ( SELECT OpponentID FROM PlayerStats ) SELECT FROM subQ1 UNION ALL SELECT FROM subQ2 You can break up more complex queries into a WITH clause and WITH SELECT statement instead of writing nested table subqueries.
- If this keyword isn't present, you can only include non-recursive common table expressions (CTEs).

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- The source table must be one of the following: A table A table clone A table snapshot The FOR SYSTEM TIME AS OF clause can only be used when creating a snapshot of a table or table clone; it can't be used when making a copy of a table snapshot. snapshot option list The option list lets you set table snapshot options such as a label and an expiration time.
- This property can only be set if the table is partitioned. require partition filter BOOL Example: require partition filter=true Specifies whether queries on this table must include a predicate filter that filters on the partitioning column.
- This property can only be set if the table is partitioned. require partition filter BOOL Example: require partition filter=true Specifies whether queries on this table must include a predicate filter that filters on the partitioning column.

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, filters on TABLE SUFFIX that include conditions without constant expressions don't limit the number of tables scanned in a wildcard table.
- Queries with wildcard tables support the TABLE SUFFIX pseudocolumn in the WHERE clause.
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- For example, the following query finds the maximum temperature reported during the 1940s: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod194 WHERE max != 9999.9 # code for missing data ORDER BY max DESC Filter selected tables using TABLE SUFFIX To restrict a query so that it scans only a specified set of tables, use the TABLE SUFFIX pseudocolumn in a WHERE clause with a condition that is a constant expression.

