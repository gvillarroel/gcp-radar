---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.321Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DISTINCT pipe operator"
feature_slug: "distinct-pipe-operator"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide"
keywords:
  - "distinct"
  - "pipe"
  - "operator"
  - "selects"
  - "rows"
  - "syntax"
  - "queries"
---

# DISTINCT pipe operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The DISTINCT pipe operator selects distinct rows in pipe syntax queries.

## Extended Definition

The DISTINCT pipe operator selects distinct rows in pipe syntax queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.
- Syntax Operator Description Example & Bitwise AND SELECT (1 + 3) & 1 Returns: 0 Bitwise OR SELECT 24 12 Returns: 28 ^ Bitwise XOR SELECT 1 ^ 0 Returns: 1 << Bitwise shift left SELECT 1 << (2 + 2) Returns: 16 > Bitwise shift right SELECT (6 + 2) >> 2 Returns: 2 Bitwise NOT SELECT 2 Returns: -3 BIT COUNT( <numeric expr> ) Returns the number of bits that are set in <numeric expr> .
- Syntax Operator Description Example + Addition SELECT 6 + (5 - 1); Returns: 10 - Subtraction SELECT 6 - (4 + 1); Returns: 1 Multiplication SELECT 6 (5 - 1); Returns: 24 / Division SELECT 6 / (2 + 2); Returns: 1.5 % Modulo SELECT 6 % (2 + 2); Returns: 2 Bitwise functions Bitwise functions operate at the level of individual bits and require numerical arguments.
- For example, if you have a column named "partition", which is a reserved word in BigQuery syntax, the queries referencing that field fail with obscure error messages unless you escape it with square brackets: SELECT [ partition ] FROM ...

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- Examples SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 ] ) AS number UNION ALL SELECT 1 ; / --------+ number +--------+ 1 2 3 1 +-------- / SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 ] ) AS number UNION DISTINCT SELECT 1 ; / --------+ number +--------+ 1 2 3 +-------- / The following example shows multiple chained operators: SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 ] ) AS number UNION DISTINCT SELECT 1 UNION DISTINCT SELECT 2 ; / --------+ number +--------+ 1 2 3 +-------- / The following example shows input queries with multiple columns.

### Work with pipe query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Produce AS ( SELECT 'apples' AS item , 2 AS sales , 'fruit' AS category UNION ALL SELECT 'apples' AS item , 7 AS sales , 'fruit' AS category UNION ALL SELECT 'carrots' AS item , 0 AS sales , 'vegetable' AS category UNION ALL SELECT 'bananas' AS item , 15 AS sales , 'fruit' AS category ); The following queries each contain valid pipe syntax that shows how you can build a query sequentially.
- ItemData USING ( item ); / ---------+-------------+-----------+-----+ item total sales num sales id +---------+-------------+-----------+-----+ apples 9 2 123 bananas 15 1 456 +---------+-------------+-----------+----- / Key differences from standard syntax Pipe syntax differs from standard syntax in the following ways: Queries can start with a FROM clause .
- FROM ( SELECT 1 AS x , 2 AS y , 3 AS z ) AS t > RENAME y AS w ; / ---+---+---+ x w z +---+---+---+ 1 2 3 +---+---+--- / AGGREGATE pipe operator To perform aggregation in pipe syntax, use the AGGREGATE pipe operator , followed by any number of aggregate functions, followed by a GROUP BY clause.
- Pipe syntax has the following key characteristics: Each pipe operator in pipe syntax consists of the pipe symbol, > , an operator name, and any arguments: > operator name argument list Pipe operators can be added to the end of any valid query.

