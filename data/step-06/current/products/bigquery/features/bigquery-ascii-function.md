---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.801Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ASCII function"
feature_slug: "bigquery-ascii-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "character code function"
  - "ASCII(string)"
  - "ASCII function"
  - "ASCII()"
  - "ASCII"
  - "string functions"
---

# BigQuery ASCII function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the ASCII function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the ASCII function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents ASCII as a supported string function and includes its purpose in the function reference.

Evidence snippets:
- SELECT 'foo' AS word , TO CODE POINTS ( 'foo' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ foo [102, 111, 111] +---------+------------------------------------ / SELECT 'bar' AS word , TO CODE POINTS ( 'bar' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ bar [98, 97, 114] +---------+------------------------------------ / SELECT 'baz' AS word , TO CODE POINTS ( 'baz' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ baz [98, 97, 122] +---------+------------------------------------ / SELECT 'giraffe' AS word , TO CODE POINTS ( 'giraffe' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ giraffe [103, 105, 114, 97, 102, 102, 101] +---------+------------------------------------ / SELECT 'llama' AS word , TO CODE POINTS ( 'llama' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ llama [108, 108, 97, 109, 97] +---------+------------------------------------ / The following examples convert integer representations of BYTES to their corresponding ASCII character values.
- To work with an array of Unicode code points, see CODE POINTS TO STRING Return type STRING Examples SELECT CHR ( 65 ) AS A , CHR ( 255 ) AS B , CHR ( 513 ) AS C , CHR ( 1024 ) AS D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ A ÿ ȁ Ѐ +-------+-------+-------+------- / SELECT CHR ( 97 ) AS A , CHR ( 0xF9B5 ) AS B , CHR ( 0 ) AS C , CHR ( NULL ) AS D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ a 例 NULL +-------+-------+-------+------- / CODE POINTS TO BYTES CODE POINTS TO BYTES ( ascii code points ) Description Takes an array of extended ASCII code points as ARRAY<INT64> and returns BYTES .
- Return type INT64 Examples SELECT ASCII ( 'abcd' ) as A , ASCII ( 'a' ) as B , ASCII ( '' ) as C , ASCII ( NULL ) as D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ 97 97 0 NULL +-------+-------+-------+------- / BYTE LENGTH BYTE LENGTH ( value ) Description Gets the number of BYTES in a STRING or BYTES value, regardless of whether the value is a STRING or BYTES type.
- SELECT REPLACE ( REPLACE ( TO BASE64 ( b ' \ 377 \ 340' ), '+' , '-' ), '/' , ' ' ) as websafe base64 ; / ----------------+ websafe base64 +----------------+ -A= +---------------- / TO CODE POINTS TO CODE POINTS ( value ) Description Takes a STRING or BYTES value and returns an array of INT64 values that represent code points or extended ASCII character values.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- IGNORE CASE works only on ASCII characters and only at the top level of the query.
- Example: legacySQL SELECT corpus date , / Cast the corpus date to a string value / REGEXP REPLACE ( STRING ( corpus date ), '^16' , 'Written in the sixteen hundreds, in the year \'' ) AS date string FROM [bigquery-public-data:samples.shakespeare] / Cast the corpus date to string, / / match values that begin with ' 16 ' / WHERE REGEXP MATCH(STRING(corpus date), ' ^ 16 ' ) GROUP BY corpus date , date string ORDER BY date string DESC LIMIT 5 ; String functions String functions operate on string data.
- Syntax String functions CONCAT() Returns the concatenation of two or more strings, or NULL if any of the values are NULL. expr CONTAINS ' str ' Returns true if expr contains the specified string argument.
- String functions CONCAT() Returns the concatenation of two or more strings, or NULL if any of the values are NULL. expr CONTAINS ' str ' Returns true if expr contains the specified string argument.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- TO CODE POINTS Converts a STRING or BYTES value into an array of extended ASCII code points.
- CODE POINTS TO STRING Converts an array of extended ASCII code points to a STRING value.
- CODE POINTS TO BYTES Converts an array of extended ASCII code points to a BYTES value.
- ASCII Gets the ASCII code for the first character or byte in a STRING or BYTES value.

