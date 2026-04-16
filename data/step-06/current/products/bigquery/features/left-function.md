---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.760Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LEFT function"
feature_slug: "left-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "left"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "string"
---

# LEFT function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the LEFT string function.

## Extended Definition

BigQuery Standard SQL supports the LEFT string function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports string functions.
- Return type INT64 Examples SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 1 2 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 2 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 3 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 3 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 3 0 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -1 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'ann' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'ann' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana ann 1 1 0 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 1 5 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 2 6 +--------------+--------------+----------+------------+------- / LEFT LEFT ( value , length ) Description Returns a STRING or BYTES value that consists of the specified number of leftmost characters or bytes from value .
- Return type STRING Examples Description Statement Result Simple integer FORMAT('%d', 10) 10 Integer with left blank padding FORMAT(' %10d ', 11) 11 Integer with left zero padding FORMAT('+%010d+', 12) +0000000012+ Integer with commas FORMAT("%'d", 123456789) 123,456,789 STRING FORMAT('-%s-', 'abcd efg') -abcd efg- FLOAT64 FORMAT('%f %E', 1.1, 2.2) 1.100000 2.200000E+00 DATE FORMAT('%t', date '2015-09-01') 2015-09-01 TIMESTAMP FORMAT('%t', timestamp '2015-09-01 12:34:56 America/Los Angeles') 2015‑09‑01 19:34:56+00 The FORMAT() function doesn't provide fully customizable formatting for all types and values, nor formatting that's sensitive to locale.
- Return type STRING or BYTES Examples SELECT LEFT ( 'banana' , 3 ) AS results / ---------+ results +--------+ ban +--------- / SELECT LEFT ( b ' \ xab \ xcd \ xef \ xaa \ xbb' , 3 ) AS results -- Note that the result of LEFT is of type BYTES, displayed as a base64-encoded string. / ---------+ results +---------+ q83v +--------- / LENGTH LENGTH ( value ) Description Returns the length of the STRING or BYTES value.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Uses the 'LEFT()' string function to return only the first 7 characters of the formatted timestamp. / LEFT ( FORMAT UTC USEC ( UTC USEC TO MONTH ( timestamp 1000000 )), 7 ) AS month , SUM ( LENGTH ( comment )) as total chars used FROM [ bigquery - public - data : samples . wikipedia ] WHERE ( contributor username != '' AND contributor username IS NOT NULL ) AND timestamp > 1133395200 AND timestamp < 1157068800 GROUP BY contributor username , month ORDER BY total chars used DESC ; Returns (truncated): +--------------------------------+---------+-----------------------+ contributor username month total chars used +--------------------------------+---------+-----------------------+ Kingbotk 2006-08 18015066 SmackBot 2006-03 7838365 SmackBot 2006-05 5148863 Tawkerbot2 2006-05 4434348 Cydebot 2006-06 3380577 etc ...
- BigQuery supports writing IPv4 and IPv6 addresses in packed strings, as 4- or 16-byte binary data in network byte order.
- JOIN types BigQuery supports INNER , [FULL RIGHT LEFT] OUTER and CROSS JOIN operations.
- Example: legacySQL SELECT / Replace white spaces in the title with underscores. / REGEXP REPLACE ( title , r '\s+' , ' ' ) AS regexp title , revisions FROM ( SELECT title , COUNT ( revision id ) as revisions FROM [ bigquery - public - data : samples . wikipedia ] WHERE wp namespace = 0 / Match titles that start with 'G', end with 'e', and contain at least two 'o's. / AND REGEXP MATCH ( title , r '^G. o. o. e$' ) GROUP BY title ORDER BY revisions DESC LIMIT 100 ); Using regular expressions on integer or float data While BigQuery's regular expression functions only work for string data, it's possible to use the STRING() function to cast integer or float data into string format.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- SQL input: 1.0 JSON output: 1 SQL input: 9007199254740993 JSON output: 9007199254740993 SQL input: "+inf" JSON output: "Infinity" SQL input: "-inf" JSON output: "-Infinity" SQL input: "NaN" JSON output: "NaN" STRING string Encoded as a string, escaped according to the JSON standard.
- You can review the GoogleSQL data types that this function supports and their JSON encodings here . stringify wide numbers : A named argument that's either TRUE or FALSE (default).
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.
- String values are escaped according to the JSON standard.

