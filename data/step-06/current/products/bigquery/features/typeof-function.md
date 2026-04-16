---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.376Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TYPEOF function"
feature_slug: "typeof-function"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "typeof"
  - "returns"
  - "type"
  - "expression"
  - "bigquery"
---

# TYPEOF function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The TYPEOF function returns the data type of an expression in BigQuery.

## Extended Definition

The TYPEOF function returns the data type of an expression in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, this query returns the current DATE and the following DATE s at 1 WEEK intervals up to and including a later DATE : SELECT GENERATE DATE ARRAY ( '2017-11-21' , '2017-12-31' , INTERVAL 1 WEEK ) AS date array ; / --------------------------------------------------------------------------+ date array +--------------------------------------------------------------------------+ [2017-11-21, 2017-11-28, 2017-12-05, 2017-12-12, 2017-12-19, 2017-12-26] +-------------------------------------------------------------------------- / Boolean type Name Description BOOL BOOLEAN Boolean values are represented by the keywords TRUE and FALSE (case-insensitive).
- FinGraph MATCH ( n : Person ) RETURN TYPEOF ( n ) AS t LIMIT 1 / --------------------------------------------------------+ t +--------------------------------------------------------+ GRAPH NODE(myproject.graph db.FinGraph)<id INT64, ...> +-------------------------------------------------------- / Graph path type Name Description GRAPH PATH A path in a property graph.
- For example: SELECT [ a , b , c ] FROM ( SELECT 5 AS a , 37 AS b , 406 AS c ); SELECT [ a , b , c ] FROM ( SELECT CAST ( 5 AS INT64 ) AS a , CAST ( 37 AS FLOAT64 ) AS b , 406 AS c ); Notice that the second example contains three expressions: one that returns an INT64 , one that returns a FLOAT64 , and one that declares a literal.
- This syntax can also be used with struct comparison for comparison expressions using multi-part keys, e.g., in a WHERE clause: WHERE ( Key1 , Key2 ) IN ( ( 12 , 34 ), ( 56 , 78 ) ) Typeless struct syntax STRUCT ( expr1 [ AS field name ] [ , ... ] ) Duplicate field names are allowed.

### Conditional expressions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples SELECT COALESCE ( 'A' , 'B' , 'C' ) as result / --------+ result +--------+ A +-------- / SELECT COALESCE ( NULL , 'B' , 'C' ) as result / --------+ result +--------+ B +-------- / IF IF ( expr , true result , else result ) Description If expr evaluates to TRUE , returns true result , else returns the evaluation for else result . else result isn't evaluated if expr evaluates to TRUE . true result isn't evaluated if expr evaluates to FALSE or NULL . expr must be a boolean expression. true result and else result must be coercible to a common supertype .
- Example WITH Numbers AS ( SELECT 90 as A , 2 as B UNION ALL SELECT 50 , 6 UNION ALL SELECT 20 , 10 ) SELECT A , B , CASE WHEN A > 60 THEN 'red' WHEN B = 6 THEN 'blue' ELSE 'green' END AS result FROM Numbers / ------------------+ A B result +------------------+ 90 2 red 50 6 blue 20 10 green +------------------ / COALESCE COALESCE ( expr [ , ... ] ) Description Returns the value of the first non- NULL expression, if any, otherwise NULL .
- Examples SELECT IFNULL ( NULL , 0 ) as result / --------+ result +--------+ 0 +-------- / SELECT IFNULL ( 10 , 0 ) as result / --------+ result +--------+ 10 +-------- / NULLIF NULLIF ( expr , expr to match ) Description Returns NULL if expr = expr to match evaluates to TRUE , otherwise returns expr . expr and expr to match must be implicitly coercible to a common supertype , and must be comparable.
- Home Documentation Data analytics BigQuery Reference Send feedback Conditional expressions Stay organized with collections Save and categorize content based on your preferences.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- TYPEOF Gets the name of the data type for an expression.
- CAST Convert the results of an expression to the given type.
- Home Documentation Data analytics BigQuery Reference Send feedback Functions (alphabetical) Stay organized with collections Save and categorize content based on your preferences.
- REGEXP INSTR Finds the position of a regular expression match in a value, optionally starting the search at a given offset or occurrence.

