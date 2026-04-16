---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.883Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "STDDEV support with OVER clause"
feature_slug: "stddev-support-with-over-clause"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
keywords:
  - "stddev"
  - "over"
  - "clause"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
---

# STDDEV support with OVER clause

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery standard SQL supports using STDDEV with the OVER clause.

## Extended Definition

BigQuery standard SQL supports using STDDEV with the OVER clause.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , DENSE RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) dense rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count dense rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 4 FIRST VALUE( <field name> ) Returns the first value of <field name> in the window. legacySQL SELECT word , word count , FIRST VALUE ( word ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) fv , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 1 Returns: word word count fv imperfectly 1 imperfectly LAG( <expr> [, <offset> [, <default value> ]]) Enables you to read data from a previous row within a window.
- In the example query, the ORDER BY clause causes the window to be computed from the start of the partition to the current row, which generates a cumulative sum for that year. legacySQL SELECT corpus date , corpus , word count , SUM ( word count ) OVER ( PARTITION BY corpus date ORDER BY word count ) annual total FROM [ bigquery - public - data : samples . shakespeare ] WHERE word = 'love' ORDER BY corpus date , word count Returns: corpus date corpus word count annual total 0 various 37 37 0 sonnets 157 194 1590 2kinghenryvi 18 18 1590 1kinghenryvi 24 42 1590 3kinghenryvi 40 82 CUME DIST() Returns a double that indicates the cumulative distribution of a value in a group of values, calculated using the formula <number of rows preceding or tied with the current row> / <total rows> .
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.
- BigQuery Graph supports additional features in the ISO standards.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / The following example is similar to the previous one, except it allows overlapping matches: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-02-08 Clothing 2 mid 2024-02-10 Clothing 3 high 2024-03-15 Electronics 4 high 2024-03-15 Electronics Ian 3 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / Best practices To scale the performance of queries that contain the MATCH RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.
- In a FROM clause, a CROSS JOIN can be written like this: FROM A CROSS JOIN B / Table A Table B Result +-------+ +-------+ +---------------+ w x y z = w x y z +-------+ +-------+ +---------------+ 1 a 2 c 1 a 2 c 2 b 3 d 1 a 3 d +-------+ +-------+ 2 b 2 c 2 b 3 d +---------------+ / You can use a correlated cross join to convert or flatten an array into a set of rows, though the (equivalent) INNER JOIN is preferred over CROSS JOIN for this case.
- SELECT item FROM Produce WHERE Produce . category = 'vegetable' QUALIFY RANK () OVER ( PARTITION BY category ORDER BY purchases DESC ) < = 3 / ---------+ item +---------+ kale lettuce cabbage +--------- / WINDOW clause WINDOW named window expression [, ...] named window expression: named window AS { named window ( [ window specification ] ) } A WINDOW clause defines a list of named windows.
- Details The following functions can be used on any column in a query with the AGGREGATION THRESHOLD clause, including the commonly used COUNT , SUM , and AVG functions: APPROX COUNT DISTINCT AVG COUNT COUNTIF LOGICAL AND LOGICAL OR SUM COVAR POP COVAR SAMP STDDEV POP STDDEV SAMP VAR POP VAR SAMP Example In the following example, an aggregation threshold is enforced on a query.

