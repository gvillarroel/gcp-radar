---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.941Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery BYTES data type"
feature_slug: "bigquery-bytes-data-type"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "binary data fields"
  - "bytes literal"
  - "byte values in tables"
  - "CAST AS BYTES"
  - "byte string"
  - "BYTES data type"
  - "BYTES functions"
  - "BYTES"
---

# BigQuery BYTES data type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for the BYTES data type.

## Extended Definition

BigQuery added support for the BYTES data type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly lists BYTES with SQL type name BYTES and defines its behavior as variable-length binary data.

Evidence snippets:
- To learn more about the literal representation of a bytes type, see Bytes literals .
- BIGNUMERIC 32 logical bytes BOOL 1 logical byte BYTES 2 logical bytes + the number of logical bytes in the value DATE 8 logical bytes DATETIME 8 logical bytes FLOAT64 8 logical bytes GEOGRAPHY 16 logical bytes + 24 logical bytes the number of vertices in the geography type.
- NUMERIC 16 logical bytes RANGE 16 logical bytes STRING 2 logical bytes + the UTF-8 encoded string size STRUCT 0 logical bytes + the size of the contained fields TIME 8 logical bytes TIMESTAMP 8 logical bytes A NULL value for any data type is calculated as 0 logical bytes.
- Parameterized data types Syntax: DATA TYPE ( param [ , ... ] ) You can use parameters to specify constraints for the following data types: STRING BYTES NUMERIC BIGNUMERIC A data type that's declared with parameters is called a parameterized data type.

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: It directly defines BYTES in BigQuery Legacy SQL and explains encoding and import/export behavior.

Evidence snippets:
- BYTES data read from a BigQuery table are base64-encoded, unless you export to Avro format, in which case the Avro bytes data type applies.
- Imported BYTES data must be base64-encoded, except for Avro BYTES data, which BigQuery can read and convert.
- BYTES Variable-length binary data.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: The page repeatedly references BYTES as a supported data type for string functions, giving contextual evidence of its use in standard SQL.

Evidence snippets:
- The STRING is formatted as follows: Type %t %T NULL of any type NULL NULL INT64 123 123 NUMERIC 123.0 (always with .0) NUMERIC "123.0" FLOAT64 123.0 (always with .0) 123e+10 inf -inf NaN 123.0 (always with .0) 123e+10 CAST("inf" AS <type>) CAST("-inf" AS <type>) CAST("nan" AS <type>) STRING unquoted string value quoted string literal BYTES unquoted escaped bytes e.g., abc\x01\x02 quoted bytes literal e.g., b"abc\x01\x02" BOOL boolean value boolean value DATE 2011-02-03 DATE "2011-02-03" TIMESTAMP 2011-02-03 04:05:06+00 TIMESTAMP "2011-02-03 04:05:06+00" INTERVAL 1-2 3 4:5:6.789 INTERVAL "1-2 3 4:5:6.789" YEAR TO SECOND ARRAY [value, value, ...] where values are formatted with %t [value, value, ...] where values are formatted with %T STRUCT (value, value, ...) where fields are formatted with %t (value, value, ...) where fields are formatted with %T Special cases: Zero fields: STRUCT() One field: STRUCT(value) JSON one-line printable string representing JSON. { "name" : "apple" , "stock" : 3 } one-line printable string representing a JSON literal.
- These string functions work on two different values: STRING and BYTES data types.
- Return type INT64 Examples SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 1 2 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 2 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 3 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 3 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 3 0 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -1 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'ann' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'ann' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana ann 1 1 0 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 1 5 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 2 6 +--------------+--------------+----------+------------+------- / LEFT LEFT ( value , length ) Description Returns a STRING or BYTES value that consists of the specified number of leftmost characters or bytes from value .
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group The position isn't a positive integer The occurrence isn't a positive integer Return type STRING or BYTES Examples SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+' ) AS user name / -----------+ user name +-----------+ foo +----------- / SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+@[a-zA-Z0-9-]+ \ .([a-zA-Z0-9-.]+$)' ) / ------------------+ top level domain +------------------+ com +------------------ / SELECT REGEXP EXTRACT ( 'ab' , '.b' ) AS result a , REGEXP EXTRACT ( 'ab' , '(.)b' ) AS result b , REGEXP EXTRACT ( 'xyztb' , '(.)+b' ) AS result c , REGEXP EXTRACT ( 'ab' , '(z)?b' ) AS result d / -------------------------------------------+ result a result b result c result d +-------------------------------------------+ ab a t NULL +------------------------------------------- / WITH example AS ( SELECT 'Hello Helloo and Hellooo' AS value , 'H?ello+' AS regex , 1 as position , 1 AS occurrence UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 4 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 2 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 20 , 1 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 1 , 2 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 2 , 3 ) SELECT value , regex , position , occurrence , REGEXP EXTRACT ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------------+---------+----------+------------+--------------+ Hello Helloo and Hellooo H?ello+ 1 1 Hello Hello Helloo and Hellooo H?ello+ 1 2 Helloo Hello Helloo and Hellooo H?ello+ 1 3 Hellooo Hello Helloo and Hellooo H?ello+ 1 4 NULL Hello Helloo and Hellooo H?ello+ 2 1 ello Hello Helloo and Hellooo H?ello+ 3 1 Helloo Hello Helloo and Hellooo H?ello+ 3 2 Hellooo Hello Helloo and Hellooo H?ello+ 3 3 NULL Hello Helloo and Hellooo H?ello+ 20 1 NULL cats&dogs&rabbits \w+& 1 2 dogs& cats&dogs&rabbits \w+& 2 3 NULL +--------------------------+---------+----------+------------+-------------- / REGEXP EXTRACT ALL REGEXP EXTRACT ALL ( value , regexp ) Description Returns an array of all substrings of value that match the re2 regular expression , regexp .

