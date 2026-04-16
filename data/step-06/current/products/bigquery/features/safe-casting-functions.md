---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.909Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Safe casting functions"
feature_slug: "safe-casting-functions"
latest_feature_date: "2016-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "safe"
  - "casting"
  - "functions"
  - "bigquery"
  - "standard"
  - "sql"
  - "provides"
  - "return"
---

# Safe casting functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL provides safe casting functions that return NULL instead of errors on invalid casts.

## Extended Definition

BigQuery Standard SQL provides safe casting functions that return NULL instead of errors on invalid casts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT REPLACE ( REPLACE ( TO BASE64 ( b ' \ 377 \ 340' ), '+' , '-' ), '/' , ' ' ) as websafe base64 ; / ----------------+ websafe base64 +----------------+ -A= +---------------- / TO CODE POINTS TO CODE POINTS ( value ) Description Takes a STRING or BYTES value and returns an array of INT64 values that represent code points or extended ASCII character values.
- Return type STRING or BYTES Examples SELECT RTRIM ( ' apple ' , ' ' ) AS example / -----------+ example +-----------+ apple +----------- / SELECT RTRIM ( 'applexxz' , 'xyz' ) AS example / ---------+ example +---------+ apple +--------- / SAFE CONVERT BYTES TO STRING SAFE CONVERT BYTES TO STRING ( value ) Description Converts a sequence of BYTES to a STRING .
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.
- SELECT SAFE CONVERT BYTES TO STRING ( b ' \ xc2' ) as safe convert ; SOUNDEX SOUNDEX ( value ) Description Returns a STRING that represents the Soundex code for value .

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Return type A JSON-formatted STRING Examples The following query converts a STRUCT value to a JSON-formatted string: SELECT TO JSON STRING ( STRUCT ( 1 AS id , [ 10 , 20 ] AS coordinates )) AS json data / --------------------------------+ json data +--------------------------------+ {"id":1,"coordinates":[10,20]} +-------------------------------- / The following query converts a STRUCT value to a JSON-formatted string that is easy to read: SELECT TO JSON STRING ( STRUCT ( 1 AS id , [ 10 , 20 ] AS coordinates ), true ) AS json data / --------------------+ json data +--------------------+ { "id": 1, "coordinates": [ 10, 20 ] } +-------------------- / Supplemental materials Differences between the JSON and JSON-formatted STRING types Many JSON functions accept two input types: JSON type STRING type The STRING version of the extraction functions behaves differently than the JSON version, mainly because JSON type values are always validated whereas JSON-formatted STRING type values aren't.
- Return type ARRAY<STRING> Examples This extracts items in JSON to a string array: SELECT JSON EXTRACT STRING ARRAY ( JSON '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / The following example compares how results are returned for the JSON EXTRACT ARRAY and JSON EXTRACT STRING ARRAY functions.
- Return type ARRAY<STRING> Examples This extracts items in JSON to a string array: SELECT JSON VALUE ARRAY ( JSON '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / The following example compares how results are returned for the JSON QUERY ARRAY and JSON VALUE ARRAY functions.
- SELECT FLOAT64 ( JSON '123.4' , wide number mode = > 'EXACT' ) as result ; SELECT FLOAT64 ( JSON '123.4' , wide number mode = > 'exac' ) as result ; -- An error is thrown because the number can't be converted to DOUBLE without loss of precision SELECT FLOAT64 ( JSON '18446744073709551615' , wide number mode = > 'exact' ) as result ; -- Returns a SQL NULL SELECT SAFE .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- This example displays the top TLDs that are not in a list of common examples. legacySQL SELECT TLD ( repository homepage ) AS user tld , COUNT ( ) AS activity count FROM [ bigquery - public - data : samples . github timeline ] GROUP BY user tld HAVING / Only consider TLDs that are NOT NULL / / or in our list of common TLDs / user tld IS NOT NULL AND NOT user tld IN ( '' , '.com' , '.net' , '.org' , '.info' , '.edu' ) ORDER BY activity count DESC LIMIT 5 ; Returns: +----------+----------------+ user tld activity count +----------+----------------+ .de 22934 .io 17528 .me 13652 .fr 12895 .co.uk 9135 +----------+----------------+ Window functions Window functions, also known as analytic functions, enable calculations on a specific subset, or "window", of a result set.
- Example: legacySQL SELECT / Multiply timestamp by 1000000 and convert / / into a more human-readable format. / TOP ( FORMAT UTC USEC ( timestamp 1000000 ), 5 ) AS top revision time , COUNT ( ) AS revision count FROM [ bigquery - public - data : samples . wikipedia ]; Returns: +----------------------------+----------------+ top revision time revision count +----------------------------+----------------+ 2002-02-25 15:51:15.000000 20976 2002-02-25 15:43:11.000000 15974 2010-02-02 03:34:51.000000 3 2010-02-02 01:04:59.000000 3 2010-02-01 23:55:05.000000 3 +----------------------------+----------------+ Bucketing Results by Timestamp It's useful to use date and time functions to group query results into buckets corresponding to particular years, months, or days.
- Example: legacySQL SELECT REGEXP REPLACE ( word , r 'ne\' er ', ' never ') AS expanded word FROM [bigquery-public-data:samples.shakespeare] WHERE REGEXP MATCH(word, r' ne \ 'er' ) GROUP BY expanded word ORDER BY expanded word LIMIT 5 ; Returns: +---------------+ expanded word +---------------+ Whenever never nevertheless whenever +---------------+ Advanced examples Filter result set by regular expression match BigQuery's regular expression functions can be used to filter results in a WHERE clause, as well as to display results in the SELECT .

