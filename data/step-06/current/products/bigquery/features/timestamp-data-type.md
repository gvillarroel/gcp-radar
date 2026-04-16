---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.936Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TIMESTAMP data type"
feature_slug: "timestamp-data-type"
latest_feature_date: "2013-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "timestamp"
  - "type"
  - "lets"
  - "bigquery"
  - "store"
  - "query"
  - "values"
---

# TIMESTAMP data type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The TIMESTAMP data type lets BigQuery store and query timestamp values.

## Extended Definition

The TIMESTAMP data type lets BigQuery store and query timestamp values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about how BigQuery rounds values stored as a DECIMAL type, see rounding mode .
- For example, this query returns the current DATE and the following DATE s at 1 WEEK intervals up to and including a later DATE : SELECT GENERATE DATE ARRAY ( '2017-11-21' , '2017-12-31' , INTERVAL 1 WEEK ) AS date array ; / --------------------------------------------------------------------------+ date array +--------------------------------------------------------------------------+ [2017-11-21, 2017-11-28, 2017-12-05, 2017-12-12, 2017-12-19, 2017-12-26] +-------------------------------------------------------------------------- / Boolean type Name Description BOOL BOOLEAN Boolean values are represented by the keywords TRUE and FALSE (case-insensitive).
- For example: SELECT CAST ( NULL AS ARRAY<INT64> ) IS NULL AS array is null ; / ---------------+ array is null +---------------+ TRUE +--------------- / GoogleSQL for BigQuery translates a NULL array into an empty array in the query result, although inside the query, NULL and empty arrays are two distinct values.
- SQL type name: TIMESTAMP Data type properties When storing and querying data, it's helpful to keep the following data type properties in mind: Nullable data types For nullable data types, NULL is a valid value.

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery stores TIMESTAMP data internally as a UNIX timestamp with microsecond precision.
- BYTES data read from a BigQuery table are base64-encoded, unless you export to Avro format, in which case the Avro bytes data type applies.
- Legacy SQL data types This document details the data types supported by BigQuery's legacy SQL query syntax.
- If you are using the BigQuery API to load an integer outside the range of [-2 53 +1, 2 53 -1] (in most cases, this means larger than 9,007,199,254,740,991), into an integer (INT64) column, you must pass it as a string to avoid data corruption.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.
- Example Referring back to the example used for the WITHIN modifier, OMIT RECORD IF can be used to accomplish the same thing WITHIN and HAVING were used to do in that example. legacySQL SELECT repository . url FROM [ bigquery - public - data : samples . github nested ] OMIT RECORD IF COUNT ( payload . pages . page name ) < = 80 ; GROUP BY clause The GROUP BY clause lets you group rows that have the same values for a given field or set of fields so that you can compute aggregations of related fields.
- Examples: PARSE PACKED IP('48.49.50.51') returns 'MDEyMw==' PARSE PACKED IP('3031:3233:3435:3637:3839:4041:4243:4445') returns 'MDEyMzQ1Njc4OUBBQkNERQ==' JSON functions BigQuery's JSON functions give you the ability to find values within your stored JSON data, by using JSONPath -like expressions.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...

