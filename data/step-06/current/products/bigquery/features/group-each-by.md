---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.935Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP EACH BY"
feature_slug: "group-each-by"
latest_feature_date: "2013-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "group"
  - "each"
  - "supports"
  - "aggregations"
  - "over"
  - "more"
  - "distributed"
  - "values"
---

# GROUP EACH BY

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

GROUP EACH BY supports aggregations over more distributed values in BigQuery queries.

## Extended Definition

GROUP EACH BY supports aggregations over more distributed values in BigQuery queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify one or more comma-separated column names; one partition will be created for each distinct set of values for these columns, similar to a GROUP BY clause.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- In the example query, the ORDER BY clause causes the window to be computed from the start of the partition to the current row, which generates a cumulative sum for that year. legacySQL SELECT corpus date , corpus , word count , SUM ( word count ) OVER ( PARTITION BY corpus date ORDER BY word count ) annual total FROM [ bigquery - public - data : samples . shakespeare ] WHERE word = 'love' ORDER BY corpus date , word count Returns: corpus date corpus word count annual total 0 various 37 37 0 sonnets 157 194 1590 2kinghenryvi 18 18 1590 1kinghenryvi 24 42 1590 3kinghenryvi 40 82 CUME DIST() Returns a double that indicates the cumulative distribution of a value in a group of values, calculated using the formula <number of rows preceding or tied with the current row> / <total rows> .
- Example Referring back to the example used for the WITHIN modifier, OMIT RECORD IF can be used to accomplish the same thing WITHIN and HAVING were used to do in that example. legacySQL SELECT repository . url FROM [ bigquery - public - data : samples . github nested ] OMIT RECORD IF COUNT ( payload . pages . page name ) < = 80 ; GROUP BY clause The GROUP BY clause lets you group rows that have the same values for a given field or set of fields so that you can compute aggregations of related fields.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- The budget must be larger than the delta for any differentially private query on the view. value is a JSON number from 1e-15 to 1000. max groups contributed : The maximum number of groups to which each protected entity can contribute in a differentially private query. value is a non-negative JSON integer.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group Return type ARRAY<STRING> or ARRAY<BYTES> Examples SELECT REGEXP EXTRACT ALL ( 'Try func(x) or func(y)' , '(.+?)' ) AS example / --------------------+ example +--------------------+ [func(x), func(y)] +-------------------- / The following example demonstrates non-overlapping matches with a capturing group: SELECT REGEXP EXTRACT ALL ( '123456' , r ' \ d( \ d) \ d' ) AS example ; / -----------+ example +-----------+ ['2', '5'] +----------- / The pattern r'\d(\d)\d' matches '123' and captures '2' .
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group The position isn't a positive integer The occurrence isn't a positive integer Return type STRING or BYTES Examples SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+' ) AS user name / -----------+ user name +-----------+ foo +----------- / SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+@[a-zA-Z0-9-]+ \ .([a-zA-Z0-9-.]+$)' ) / ------------------+ top level domain +------------------+ com +------------------ / SELECT REGEXP EXTRACT ( 'ab' , '.b' ) AS result a , REGEXP EXTRACT ( 'ab' , '(.)b' ) AS result b , REGEXP EXTRACT ( 'xyztb' , '(.)+b' ) AS result c , REGEXP EXTRACT ( 'ab' , '(z)?b' ) AS result d / -------------------------------------------+ result a result b result c result d +-------------------------------------------+ ab a t NULL +------------------------------------------- / WITH example AS ( SELECT 'Hello Helloo and Hellooo' AS value , 'H?ello+' AS regex , 1 as position , 1 AS occurrence UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 4 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 2 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 20 , 1 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 1 , 2 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 2 , 3 ) SELECT value , regex , position , occurrence , REGEXP EXTRACT ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------------+---------+----------+------------+--------------+ Hello Helloo and Hellooo H?ello+ 1 1 Hello Hello Helloo and Hellooo H?ello+ 1 2 Helloo Hello Helloo and Hellooo H?ello+ 1 3 Hellooo Hello Helloo and Hellooo H?ello+ 1 4 NULL Hello Helloo and Hellooo H?ello+ 2 1 ello Hello Helloo and Hellooo H?ello+ 3 1 Helloo Hello Helloo and Hellooo H?ello+ 3 2 Hellooo Hello Helloo and Hellooo H?ello+ 3 3 NULL Hello Helloo and Hellooo H?ello+ 20 1 NULL cats&dogs&rabbits \w+& 1 2 dogs& cats&dogs&rabbits \w+& 2 3 NULL +--------------------------+---------+----------+------------+-------------- / REGEXP EXTRACT ALL REGEXP EXTRACT ALL ( value , regexp ) Description Returns an array of all substrings of value that match the re2 regular expression , regexp .
- Return type ARRAY<STRING> or ARRAY<BYTES> Examples WITH letters AS ( SELECT '' as letter group UNION ALL SELECT 'a' as letter group UNION ALL SELECT 'b c d' as letter group ) SELECT SPLIT ( letter group , ' ' ) as example FROM letters ; / ----------------------+ example +----------------------+ [] [a] [b, c, d] +---------------------- / STARTS WITH STARTS WITH ( value , prefix ) Description Takes two STRING or BYTES values.
- WITH Words AS ( SELECT 'a' AS char1 , 'Z' AS char2 ) SELECT ( Words . char1 < Words . char2 ) AS a less than Z FROM Words ; / ----------------+ a less than Z +----------------+ FALSE +---------------- / CONCAT CONCAT ( value1 [ , ... ] ) Description Concatenates one or more values into a single result.

