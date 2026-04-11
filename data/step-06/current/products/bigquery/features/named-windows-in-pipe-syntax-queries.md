---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.407Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Named windows in pipe syntax queries"
feature_slug: "named-windows-in-pipe-syntax-queries"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "named windows"
  - "windows in pipe syntax"
  - "pipe syntax windows"
  - "named window definitions"
  - "named WINDOW"
  - "WINDOW clause in pipe"
  - "window function"
---

# Named windows in pipe syntax queries

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery pipe syntax now supports named windows for window function definitions.

## Extended Definition

BigQuery query syntax supports a `WINDOW` clause that defines one or more named windows as reusable window expressions (`named window AS (...)`) for use with analytic functions. A named window is a defined group of rows used by a window function’s `OVER` clause, and named windows can be combined and referenced there. The provided excerpts show this behavior in BigQuery’s query syntax, but do not explicitly include a pipe-syntax-specific example of the same feature.

## Evidence Summary

The Standard SQL query-syntax page documents the `WINDOW` clause and named window usage in `OVER` clauses, while the Legacy SQL page documents BigQuery window/analytic function concepts generally.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Note the different ways you can combine named windows and use them in a window function's OVER clause.
- SELECT item FROM Produce WHERE Produce . category = 'vegetable' QUALIFY RANK () OVER ( PARTITION BY category ORDER BY purchases DESC ) < = 3 / ---------+ item +---------+ kale lettuce cabbage +--------- / WINDOW clause WINDOW named window expression [, ...] named window expression: named window AS { named window ( [ window specification ] ) } A WINDOW clause defines a list of named windows.
- A named window represents a group of rows in a table upon which to use a window function .
- WITH PlayerStats AS ( SELECT 'Adams' as LastName , 'Noam' as FirstName , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 'Jie' , 0 UNION ALL SELECT 'Coolidge' , 'Kiran' , 1 UNION ALL SELECT 'Adams' , 'Noam' , 4 UNION ALL SELECT 'Buchanan' , 'Jie' , 13 ) SELECT SUM ( PointsScored ) AS total points , FirstName AS first name , LastName AS last name FROM PlayerStats GROUP BY ALL ; / --------------+------------+-----------+ total points first name last name +--------------+------------+-----------+ 7 Noam Adams 13 Jie Buchanan 1 Kiran Coolidge +--------------+------------+----------- / If the select list contains an analytic function, the query groups rows by first name and last name . total people is excluded because it contains a window function.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , DENSE RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) dense rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count dense rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 4 FIRST VALUE( <field name> ) Returns the first value of <field name> in the window. legacySQL SELECT word , word count , FIRST VALUE ( word ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) fv , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 1 Returns: word word count fv imperfectly 1 imperfectly LAG( <expr> [, <offset> [, <default value> ]]) Enables you to read data from a previous row within a window.
- This example displays the top TLDs that are not in a list of common examples. legacySQL SELECT TLD ( repository homepage ) AS user tld , COUNT ( ) AS activity count FROM [ bigquery - public - data : samples . github timeline ] GROUP BY user tld HAVING / Only consider TLDs that are NOT NULL / / or in our list of common TLDs / user tld IS NOT NULL AND NOT user tld IN ( '' , '.com' , '.net' , '.org' , '.info' , '.edu' ) ORDER BY activity count DESC LIMIT 5 ; Returns: +----------+----------------+ user tld activity count +----------+----------------+ .de 22934 .io 17528 .me 13652 .fr 12895 .co.uk 9135 +----------+----------------+ Window functions Window functions, also known as analytic functions, enable calculations on a specific subset, or "window", of a result set.
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

