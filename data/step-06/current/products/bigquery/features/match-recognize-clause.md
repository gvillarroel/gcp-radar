---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.320Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "MATCH_RECOGNIZE clause"
feature_slug: "match-recognize-clause"
latest_feature_date: "2025-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax"
keywords:
  - "match"
  - "recognize"
  - "clause"
  - "filters"
  - "aggregates"
  - "pattern"
  - "matches"
  - "across"
---

# MATCH_RECOGNIZE clause

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The MATCH_RECOGNIZE clause filters and aggregates pattern matches across rows in SQL queries.

## Extended Definition

The MATCH_RECOGNIZE clause filters and aggregates pattern matches across rows in SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax)

## Supporting Pages

### Query syntax | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `feature-recovery-http`
- Final score: 375
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The MEASURES clause aggregates the data in each match and computes total sales and software sales: SELECT * FROM Sales MATCH_RECOGNIZE ( PARTITION BY customer ORDER BY sale_date MEASURES ARRAY_AGG ( STRUCT ( sale_date , product_category , amount )) AS sales , SUM ( amount ) AS total_sale_amount , SUM ( software . amount ) AS software_sale_amount PATTERN ( electronics + any_category * ? software + ) DEFINE electronics AS product_category = 'Electronics' , software AS product_category = 'Software' , any_category AS TRUE ); /*----------+-----------------+------------------------+--------------+-------------------+----------------------+ | customer | sales.sale_date | sales.product_category | sales.amount | total_sale_amount | software_sale_amount | +----------+-----------------+------------------------+--------------+-------------------+----------------------+ | Daisy | 2024-01-03 | Electronics | 500 | 570 | 70 | | | 2024-01-04 | Software | 30 | | | | | 2024-03-15 | Software | 40 | | | | Daisy | 2024-06-28 | Electronics | 400 | 530 | 30 | | | 2024-06-29 | Clothing | 100 | | | | | 2024-06-30 | Software | 30 | | | | Ian | 2024-03-15 | Electronics | 300 | 730 | 30 | | | 2024-03-15 | Electronics | 400 | | | | | 2024-03-21 | Software | 30 | | | +----------+-----------------+------------------------+--------------+-------------------+----------------------*/ The following example, like the previous example, matches electronics purchases that were eventually followed by software purchases.
- SELECT * FROM Sales MATCH_RECOGNIZE ( PARTITION BY customer ORDER BY sale_date MEASURES MATCH_NUMBER () AS match_number , ARRAY_AGG ( STRUCT ( MATCH_ROW_NUMBER () AS row , CLASSIFIER () AS symbol , sale_date , product_category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); /*----------+--------------+-----------+--------------+-----------------+------------------------+ | customer | match_number | sales.row | sales.symbol | sales.sale_date | sales.product_category | +----------+--------------+-----------+--------------+-----------------+------------------------+ | Ian | 1 | 1 | low | 2024-02-01 | Books | | | | 2 | low | 2024-02-08 | Clothing | | | | 3 | mid | 2024-02-10 | Clothing | | | | 4 | high | 2024-03-15 | Electronics | | | | 5 | high | 2024-03-15 | Electronics | | Ian | 2 | 1 | low | 2024-03-21 | Software | | | | 2 | mid | 2024-04-07 | Books | | | | 3 | high | 2024-07-07 | Clothing | +----------+--------------+-----------+--------------+-----------------+------------------------*/ The following example is similar to the previous one, except it allows overlapping matches: SELECT * FROM Sales MATCH_RECOGNIZE ( PARTITION BY customer ORDER BY sale_date MEASURES MATCH_NUMBER () AS match_number , ARRAY_AGG ( STRUCT ( MATCH_ROW_NUMBER () AS row , CLASSIFIER () AS symbol , sale_date , product_category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); /*----------+--------------+-----------+--------------+-----------------+------------------------+ | customer | match_number | sales.row | sales.symbol | sales.sale_date | sales.product_category | +----------+--------------+-----------+--------------+-----------------+------------------------+ | Ian | 1 | 1 | low | 2024-02-01 | Books | | | | 2 | low | 2024-02-08 | Clothing | | | | 3 | mid | 2024-02-10 | Clothing | | | | 4 | high | 2024-03-15 | Electronics | | | | 5 | high | 2024-03-15 | Electronics | | Ian | 2 | 1 | low | 2024-02-08 | Clothing | | | | 2 | mid | 2024-02-10 | Clothing | | | | 3 | high | 2024-03-15 | Electronics | | | | 4 | high | 2024-03-15 | Electronics | | Ian | 3 | 1 | low | 2024-03-21 | Software | | | | 2 | mid | 2024-04-07 | Books | | | | 3 | high | 2024-07-07 | Clothing | +----------+--------------+-----------+--------------+-----------------+------------------------*/ Best practices To scale the performance of queries that contain the MATCH_RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.
- The query uses the LAST and FIRST functions that are unique to the MEASURES clause to compute the number of days between the final electronics purchase in a match and the first following software purchase: SELECT * FROM Sales MATCH_RECOGNIZE ( PARTITION BY customer ORDER BY sale_date MEASURES LAST ( electronics . sale_date ) AS last_electronics_sale_date , FIRST ( software . sale_date ) AS first_software_sale_date , DATE_DIFF ( FIRST ( software . sale_date ), LAST ( electronics . sale_date ), day ) AS date_gap PATTERN ( electronics + any_category * ? software + ) DEFINE electronics AS product_category = 'Electronics' , software AS product_category = 'Software' , any_category AS TRUE ); /*----------+----------------------------+--------------------------+----------+ | customer | last_electronics_sale_date | first_software_sale_date | date_gap | +----------+----------------------------+--------------------------+----------+ | Daisy | 2024-01-03 | 2024-01-04 | 1 | | Daisy | 2024-06-28 | 2024-06-30 | 2 | | Ian | 2024-03-15 | 2024-03-21 | 6 | +----------+----------------------------+--------------------------+----------*/ The following example matches a sequence of rows where amount is less than 50, followed by rows where amount is between 50 and 100, followed by rows where amount is greater than 100.
- For example, you can use the following pattern and symbols in a MATCH_RECOGNIZE clause to match pairs of adjacent rows in which the value of sales is less than 100 in the first row and greater than 200 in the following row: PATTERN ( low_sales high_sales ) DEFINE low_sales AS sales < 100 , high_sales AS sales > 200 The following example matches one or more rows with sales less than 100, followed by at most one row with sales greater than 200, followed by any number of rows with sales less than 100: PATTERN ( low_sales + high_sales ? low_sales * ) DEFINE low_sales AS sales < 100 , high_sales AS sales > 200 There are two functions unique to the DEFINE clause, PREV() and NEXT() , that you can use to define a symbol in relation to rows around the current row.

### Pipe query syntax | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax)
- Source ID: `feature-recovery-http`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example ( SELECT 'kale' as product , 55 AS Q1 , 45 AS Q2 UNION ALL SELECT 'apple' , 8 , 10 ) | > UNPIVOT ( sales FOR quarter IN ( Q1 , Q2 )); /*---------+-------+---------+ | product | sales | quarter | +---------+-------+---------+ | kale | 55 | Q1 | | kale | 45 | Q2 | | apple | 8 | Q1 | | apple | 10 | Q2 | +---------+-------+---------*/ MATCH_RECOGNIZE pipe operator |> MATCH_RECOGNIZE ( [ PARTITION BY partition_expr [, ... ] ] ORDER BY order_expr [ { ASC | DESC } ] [ { NULLS FIRST | NULLS LAST } ] [, ...] MEASURES { measures_expr [ AS ] alias } [, ... ] [ AFTER MATCH SKIP { PAST LAST ROW | TO NEXT ROW } ] PATTERN ( pattern ) DEFINE symbol AS boolean_expr [, ... ] [ OPTIONS ( [ use_longest_match = { TRUE | FALSE } ] ) ] ) Description Filters and aggregates rows based on matches.
- MATCH_RECOGNIZE Filters and aggregates rows based on matches.
- Matching rows works similarly to matching with regular expressions, but instead of matching characters in a string, the MATCH_RECOGNIZE operator finds matches across rows in a table.
- Example ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ) | > MATCH_RECOGNIZE ( ORDER BY x MEASURES ARRAY_AGG ( high . x ) AS high_agg , ARRAY_AGG ( low . x ) AS low_agg AFTER MATCH SKIP TO NEXT ROW PATTERN ( low | high ) DEFINE low AS x < = 2 , high AS x > = 2 ); /*----------+---------+ | high_agg | low_agg | +----------+---------+ | NULL | [1] | | NULL | [2] | | [3] | NULL | +----------+---------*/ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Querying nested and repeated fields in legacy SQL \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated](https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the WITHIN clause to aggregate across one particular node: SELECT fullName, COUNT(citiesLived.place) WITHIN RECORD AS numberOfPlacesLived, citiesLived.place, COUNT(citiesLived.yearsLived) WITHIN citiesLived AS numberOfTimesInEachCity, FROM [dataset.tableId]; +---------------+---------------------+-------------------+-------------------------+ fullName numberOfPlacesLived citiesLived place numberOfTimesInEachCity +---------------+---------------------+-------------------+-------------------------+ John Doe 2 Seattle 1 John Doe 2 Stockholm 1 Mike Jones 4 Los Angeles 4 Mike Jones 4 Washington DC 4 Mike Jones 4 Portland 4 Mike Jones 4 Austin 4 Anna Karenina 3 Stockholm 4 Anna Karenina 3 Moscow 3 Anna Karenina 3 Austin 2 +---------------+---------------------+-------------------+-------------------------+ This query does the following: Performs a WITHIN RECORD on citiesLived.place and counts the number of places each person has lived in Performs a WITHIN on citiesLived.yearsLived and counts the number of times each person has lived in each city (counting just across citiesLived ).
- For example, if you try to run a legacy SQL query like the following: SELECT fullName, age FROM [dataset.tableId] WHERE (citiesLived.yearsLived > 1995 ) AND (children.age > 3) BigQuery returns an error similar to: Cannot query the cross product of repeated fields children.age and citiesLived.yearsLived To query across more than one repeated field, you need to flatten one of the fields: SELECT fullName, age, gender, citiesLived.place FROM (FLATTEN([dataset.tableId], children)) WHERE (citiesLived.yearsLived > 1995) AND (children.age > 3) GROUP BY fullName, age, gender, citiesLived.place Which returns: +------------+-----+--------+-------------------+ fullName age gender citiesLived place +------------+-----+--------+-------------------+ John Doe 22 Male Stockholm Mike Jones 35 Male Los Angeles Mike Jones 35 Male Washington DC Mike Jones 35 Male Portland Mike Jones 35 Male Austin +------------+-----+--------+-------------------+ WITHIN Clause The WITHIN keyword specifically works with aggregate functions to aggregate across children and repeated fields within records and nested fields.
- To do so, you can count the number of children.name each record has: SELECT fullName, COUNT(children.name) WITHIN RECORD AS numberOfChildren FROM [dataset.tableId]; You get the following result: +---------------+------------------+ fullName numberOfChildren +---------------+------------------+ John Doe 2 Jane Austen 2 Mike Jones 3 Anna Karenina 0 +---------------+------------------+ To compare, try listing all of the children's names: SELECT fullName, children.name FROM [dataset.tableId] +---------------+---------------+ fullName children name +---------------+---------------+ John Doe Jane John Doe John Jane Austen Josh Jane Austen Jim Mike Jones Earl Mike Jones Sam Mike Jones Kit Anna Karenina None +---------------+---------------+ This matches with our WITHIN RECORD query results; John Doe does have two children named Jane and John, Jane Austen has two children named Josh and Jim, Mike Jones has three children named Earl, Sam, and Kit, and Anna Karenina doesn't have any children.
- For example, many SELECT statements can retrieve nested or repeated fields while maintaining the structure of the data, and WHERE clauses can filter data while maintaining its structure.

