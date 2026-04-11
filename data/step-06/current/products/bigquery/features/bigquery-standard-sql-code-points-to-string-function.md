---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.925Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL CODE_POINTS_TO_STRING function"
feature_slug: "bigquery-standard-sql-code-points-to-string-function"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "codepoint to string"
  - "BigQuery Standard SQL string from code points"
  - "code point to string conversion"
  - "CODE_POINTS_TO_STRING function"
  - "CODE_POINTS_TO_STRING usage"
  - "CODE_POINTS_TO_STRING()"
  - "CODE_POINTS_TO_STRING"
  - "code points to string"
---

# BigQuery Standard SQL CODE_POINTS_TO_STRING function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added the CODE_POINTS_TO_STRING function for converting code points to strings.

## Extended Definition

BigQuery Standard SQL added the CODE_POINTS_TO_STRING function for converting code points to strings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- SELECT CODE POINTS TO BYTES ( ARRAY AGG ( ( SELECT CASE WHEN chr BETWEEN b 'a' and b 'z' THEN TO CODE POINTS ( b 'a' ) [ offset ( 0 ) ] + MOD ( code + 13 - TO CODE POINTS ( b 'a' ) [ offset ( 0 ) ] , 26 ) WHEN chr BETWEEN b 'A' and b 'Z' THEN TO CODE POINTS ( b 'A' ) [ offset ( 0 ) ] + MOD ( code + 13 - TO CODE POINTS ( b 'A' ) [ offset ( 0 ) ] , 26 ) ELSE code END FROM ( SELECT code , CODE POINTS TO BYTES ( [ code ] ) chr ) ) ORDER BY OFFSET )) AS encoded string FROM UNNEST ( TO CODE POINTS ( b 'Test String!' )) code WITH OFFSET ; -- Note that the result of CODE POINTS TO BYTES is of type BYTES, displayed as a base64-encoded string. -- In BYTES format, b'Grfg Fgevat!' is the result. / ------------------+ encoded string +------------------+ R3JmZyBGZ2V2YXQh +------------------ / CODE POINTS TO STRING CODE POINTS TO STRING ( unicode code points ) Description Takes an array of Unicode code points as ARRAY<INT64> and returns a STRING .
- To work with an array of Unicode code points, see CODE POINTS TO STRING Return type STRING Examples SELECT CHR ( 65 ) AS A , CHR ( 255 ) AS B , CHR ( 513 ) AS C , CHR ( 1024 ) AS D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ A ÿ ȁ Ѐ +-------+-------+-------+------- / SELECT CHR ( 97 ) AS A , CHR ( 0xF9B5 ) AS B , CHR ( 0 ) AS C , CHR ( NULL ) AS D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ a 例 NULL +-------+-------+-------+------- / CODE POINTS TO BYTES CODE POINTS TO BYTES ( ascii code points ) Description Takes an array of extended ASCII code points as ARRAY<INT64> and returns BYTES .
- WITH Words AS ( SELECT word FROM UNNEST ( [ 'foo' , 'bar' , 'baz' , 'giraffe' , 'llama' ] ) AS word ) SELECT CODE POINTS TO STRING ( [ code point ] ) AS letter , COUNT ( ) AS letter count FROM Words , UNNEST ( TO CODE POINTS ( word )) AS code point GROUP BY 1 ORDER BY 2 DESC ; / --------+--------------+ letter letter count +--------+--------------+ a 5 f 3 r 2 b 2 l 2 o 2 g 1 z 1 e 1 m 1 i 1 +--------+-------------- / COLLATE COLLATE ( value , collate specification ) Takes a STRING and a collation specification .
- SELECT CODE POINTS TO STRING ( [ 65 , 255 , 513 , 1024 ] ) AS string ; / --------+ string +--------+ AÿȁЀ +-------- / SELECT CODE POINTS TO STRING ( [ 97 , 0 , 0xF9B5 ] ) AS string ; / --------+ string +--------+ a例 +-------- / SELECT CODE POINTS TO STRING ( [ 65 , 255 , NULL , 1024 ] ) AS string ; / --------+ string +--------+ NULL +-------- / The following example computes the frequency of letters in a set of words.

