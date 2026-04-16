---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.932Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Aggregate functions"
feature_slug: "aggregate-functions"
latest_feature_date: "2013-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "aggregate"
  - "functions"
  - "provide"
  - "additional"
  - "built"
  - "aggregating"
  - "query"
  - "results"
---

# Aggregate functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Aggregate functions provide additional built-in functions for aggregating query results in BigQuery.

## Extended Definition

Aggregate functions provide additional built-in functions for aggregating query results in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It's also okay for recursive entries to depend on non-recursive entries and vice-versa: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT FROM T0 ) UNION ALL ( SELECT n + 1 FROM T1 WHERE n < 4 )), T2 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T2 WHERE n < 4 )), T3 AS ( SELECT FROM T1 INNER JOIN T2 USING ( n )) SELECT FROM T3 ORDER BY n / ---+ n +---+ 1 2 3 4 +--- / Aggregate functions can be invoked in subqueries, as long as they aren't aggregating on the table being defined: WITH RECURSIVE T0 AS ( SELECT FROM UNNEST ( [ 60 , 20 , 30 ] )), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + ( SELECT COUNT ( ) FROM T0 ) FROM T1 WHERE n < 4 )) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 4 +--- / INNER JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 INNER JOIN T0 USING ( n ))) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 2 +--- / CROSS JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 2 AS p ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT T1 . n + T0 . p FROM T1 CROSS JOIN T0 WHERE T1 . n < 4 )) SELECT FROM T1 CROSS JOIN T0 ORDER BY n / ---+---+ n p +---+---+ 1 2 3 2 5 2 +---+--- / Recursive CTEs can be used inside CREATE TABLE AS SELECT statements.
- Smaller epsilons and more noise will provide greater privacy protection. -- This gets the average number of items requested per professor and adds -- noise to the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- These results will change each time you run the query. -- The scissors group was removed this time, but might not be -- removed the next time. / ----------+------------------+ item average quantity +----------+------------------+ pencil 38.5038356810269 pen 13.4725028762032 +----------+------------------ / Remove noise Removing noise removes privacy protection.
- Additionally, if implicit clamping is used for an aggregate differentially private function, then half of the function's epsilon is applied towards computing implicit bounds, and half of the function's epsilon is applied towards the differentially private aggregation itself. delta The delta differential privacy parameter represents the probability that any row fails to be epsilon -differentially private in the result of a differentially private query. max groups contributed The max groups contributed differential privacy parameter is a positive integer that, if specified, scales the noise and limits the number of groups that each entity can contribute to. max groups contributed is set by default, even if you don't specify it.
- The query uses the MATCH NUMBER , MATCH ROW NUMBER , and CLASSIFIER functions in the MEASURES clause to identify matches and their symbols in the results.

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Approximate aggregate functions Stay organized with collections Save and categorize content based on your preferences.
- Approximate aggregate functions are scalable in terms of memory usage and time, but produce approximate results instead of exact results.
- GoogleSQL for BigQuery supports approximate aggregate functions.
- The approximate aggregate functions in this section work directly on the input data, rather than an intermediate estimation of the data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.
- The JavaScript function body must include four JavaScript functions that initialize, aggregate, merge, and finalize the results for the JavaScript UDAF.
- If all of the invoked functions are DETERMINISTIC , BigQuery tries to cache the result, unless the results can't be cached for other reasons.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.

