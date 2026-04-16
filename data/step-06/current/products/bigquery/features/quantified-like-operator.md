---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.468Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Quantified LIKE operator"
feature_slug: "quantified-like-operator"
latest_feature_date: "2024-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "quantified"
  - "like"
  - "operator"
  - "supports"
  - "some"
  - "all"
  - "pattern"
  - "matching"
---

# Quantified LIKE operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The quantified LIKE operator supports LIKE ANY, LIKE SOME, and LIKE ALL pattern matching against lists or arrays of patterns; The quantified LIKE operator matches a search value against multiple patterns with LIKE ANY, LIKE SOME, or LIKE ALL conditions.

## Extended Definition

The quantified LIKE operator supports LIKE ANY, LIKE SOME, and LIKE ALL pattern matching against lists or arrays of patterns; The quantified LIKE operator matches a search value against multiple patterns with LIKE ANY, LIKE SOME, or LIKE ALL conditions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- The regular expressions that are supported by the LIKE operator are also supported by patterns in the quantified LIKE operator . quantifier : Condition for pattern matching.
- Semantics rules When using the quantified LIKE operator with ANY or SOME , the following semantics apply in this order: Returns FALSE if patterns is empty.
- When using the quantified NOT LIKE operator with ANY or SOME , the following semantics apply in this order: Returns FALSE if patterns is empty.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- It looks like this: / -----------------------+ LastName SchoolID +-----------------------+ Adams 50 Buchanan 52 Coolidge 52 Davis 51 Eisenhower 77 +----------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH Roster AS ( SELECT 'Adams' as LastName , 50 as SchoolID UNION ALL SELECT 'Buchanan' , 52 UNION ALL SELECT 'Coolidge' , 52 UNION ALL SELECT 'Davis' , 51 UNION ALL SELECT 'Eisenhower' , 77 ) SELECT FROM Roster PlayerStats table The PlayerStats table includes a list of player names ( LastName ) and the unique ID assigned to the opponent they played in a given game ( OpponentID ) and the number of points scored by the athlete in that game ( PointsScored ). / ----------------------------------------+ LastName OpponentID PointsScored +----------------------------------------+ Adams 51 3 Buchanan 77 0 Coolidge 77 1 Adams 52 4 Buchanan 50 13 +---------------------------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH PlayerStats AS ( SELECT 'Adams' as LastName , 51 as OpponentID , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 77 , 0 UNION ALL SELECT 'Coolidge' , 77 , 1 UNION ALL SELECT 'Adams' , 52 , 4 UNION ALL SELECT 'Buchanan' , 50 , 13 ) SELECT FROM PlayerStats TeamMascot table The TeamMascot table includes a list of unique school IDs ( SchoolID ) and the mascot for that school ( Mascot ). / ---------------------+ SchoolID Mascot +---------------------+ 50 Jaguars 51 Knights 52 Lakers 53 Mustangs +--------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH TeamMascot AS ( SELECT 50 as SchoolID , 'Jaguars' as Mascot UNION ALL SELECT 51 , 'Knights' UNION ALL SELECT 52 , 'Lakers' UNION ALL SELECT 53 , 'Mustangs' ) SELECT FROM TeamMascot GROUP BY clause Example: SELECT LastName , SUM ( PointsScored ) FROM PlayerStats GROUP BY LastName ; LastName SUM Adams 7 Buchanan 13 Coolidge 1 UNION The UNION operator combines the result sets of two or more SELECT statements by pairing columns from the result set of each SELECT statement and vertically concatenating them.
- The MEASURES clause aggregates the data in each match and computes total sales and software sales: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES ARRAY AGG ( STRUCT ( sale date , product category , amount )) AS sales , SUM ( amount ) AS total sale amount , SUM ( software . amount ) AS software sale amount PATTERN ( electronics + any category ? software + ) DEFINE electronics AS product category = 'Electronics' , software AS product category = 'Software' , any category AS TRUE ); / ----------+-----------------+------------------------+--------------+-------------------+----------------------+ customer sales.sale date sales.product category sales.amount total sale amount software sale amount +----------+-----------------+------------------------+--------------+-------------------+----------------------+ Daisy 2024-01-03 Electronics 500 570 70 2024-01-04 Software 30 2024-03-15 Software 40 Daisy 2024-06-28 Electronics 400 530 30 2024-06-29 Clothing 100 2024-06-30 Software 30 Ian 2024-03-15 Electronics 300 730 30 2024-03-15 Electronics 400 2024-03-21 Software 30 +----------+-----------------+------------------------+--------------+-------------------+---------------------- / The following example, like the previous example, matches electronics purchases that were eventually followed by software purchases.
- Examples The following examples reference a table called Produce that looks like this: WITH Produce AS ( SELECT 'Kale' as product , 51 as sales , 'Q1' as quarter , 2020 as year UNION ALL SELECT 'Kale' , 23 , 'Q2' , 2020 UNION ALL SELECT 'Kale' , 45 , 'Q3' , 2020 UNION ALL SELECT 'Kale' , 3 , 'Q4' , 2020 UNION ALL SELECT 'Kale' , 70 , 'Q1' , 2021 UNION ALL SELECT 'Kale' , 85 , 'Q2' , 2021 UNION ALL SELECT 'Apple' , 77 , 'Q1' , 2020 UNION ALL SELECT 'Apple' , 0 , 'Q2' , 2020 UNION ALL SELECT 'Apple' , 1 , 'Q1' , 2021 ) SELECT FROM Produce / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / With the PIVOT operator, the rows in the quarter column are rotated into these new columns: Q1 , Q2 , Q3 , Q4 .
- LastName = 'Buchanan' / ------------+----------+----------+------------+--------------+ LastName SchoolID LastName OpponentID PointsScored +------------+----------+----------+------------+--------------+ Adams 50 Buchanan 50 13 Eisenhower 77 Buchanan 77 0 +------------+----------+----------+------------+-------------- / A common pattern for a correlated LEFT JOIN is to have an UNNEST operation on the right side that references an array from some column introduced by input on the left side.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- FLATTEN operator (FLATTEN( [project name:]datasetId.tableId , field to be flattened)) (FLATTEN(( subquery ), field to be flattened)) Unlike typical SQL-processing systems, BigQuery is designed to handle repeated data.
- Comma as UNION ALL Unlike GoogleSQL, legacy SQL uses the comma as a UNION ALL operator rather than a CROSS JOIN operator.
- JOIN operator BigQuery supports multiple JOIN operators in each FROM clause.
- Example: legacySQL SELECT page title , / Populate these columns as True or False, / / depending on the condition / IF ( page title CONTAINS 'search' , INTEGER ( total ), 0 ) AS search , IF ( page title CONTAINS 'Earth' OR page title CONTAINS 'Maps' , INTEGER ( total ), 0 ) AS geo , FROM / Subselect to return top revised Wikipedia articles / / containing 'Google', followed by additional text. / ( SELECT TOP ( title , 5 ) as page title , COUNT ( ) as total FROM [ bigquery - public - data : samples . wikipedia ] WHERE REGEXP MATCH ( title , r '^Google.+' ) AND wp namespace = 0 ); Returns: +---------------+--------+------+ page title search geo +---------------+--------+------+ Google search 4261 0 Google Earth 0 3874 Google Chrome 0 0 Google Maps 0 2617 Google bomb 0 0 +---------------+--------+------+ Using HASH to select a random sample of your data Some queries can provide a useful result using random subsampling of the result set.

