---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.928Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL TO_CODE_POINTS function"
feature_slug: "bigquery-standard-sql-to-code-points-function"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "convert string to code points"
  - "Unicode code points"
  - "TO_CODE_POINTS function"
  - "string to code points"
  - "TO_CODE_POINTS()"
  - "to_code_points()"
  - "code point array"
  - "TO_CODE_POINTS"
---

# BigQuery Standard SQL TO_CODE_POINTS function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added the TO_CODE_POINTS function for converting strings to code points.

## Extended Definition

BigQuery Standard SQL added the TO_CODE_POINTS function for converting strings to code points.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions code-point related functions, but not the TO_CODE_POINTS function name directly.

Evidence snippets:
- SELECT CODE POINTS TO BYTES ( ARRAY AGG ( ( SELECT CASE WHEN chr BETWEEN b 'a' and b 'z' THEN TO CODE POINTS ( b 'a' ) [ offset ( 0 ) ] + MOD ( code + 13 - TO CODE POINTS ( b 'a' ) [ offset ( 0 ) ] , 26 ) WHEN chr BETWEEN b 'A' and b 'Z' THEN TO CODE POINTS ( b 'A' ) [ offset ( 0 ) ] + MOD ( code + 13 - TO CODE POINTS ( b 'A' ) [ offset ( 0 ) ] , 26 ) ELSE code END FROM ( SELECT code , CODE POINTS TO BYTES ( [ code ] ) chr ) ) ORDER BY OFFSET )) AS encoded string FROM UNNEST ( TO CODE POINTS ( b 'Test String!' )) code WITH OFFSET ; -- Note that the result of CODE POINTS TO BYTES is of type BYTES, displayed as a base64-encoded string. -- In BYTES format, b'Grfg Fgevat!' is the result. / ------------------+ encoded string +------------------+ R3JmZyBGZ2V2YXQh +------------------ / CODE POINTS TO STRING CODE POINTS TO STRING ( unicode code points ) Description Takes an array of Unicode code points as ARRAY<INT64> and returns a STRING .
- SELECT 'foo' AS word , TO CODE POINTS ( 'foo' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ foo [102, 111, 111] +---------+------------------------------------ / SELECT 'bar' AS word , TO CODE POINTS ( 'bar' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ bar [98, 97, 114] +---------+------------------------------------ / SELECT 'baz' AS word , TO CODE POINTS ( 'baz' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ baz [98, 97, 122] +---------+------------------------------------ / SELECT 'giraffe' AS word , TO CODE POINTS ( 'giraffe' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ giraffe [103, 105, 114, 97, 102, 102, 101] +---------+------------------------------------ / SELECT 'llama' AS word , TO CODE POINTS ( 'llama' ) AS code points / ---------+------------------------------------+ word code points +---------+------------------------------------+ llama [108, 108, 97, 109, 97] +---------+------------------------------------ / The following examples convert integer representations of BYTES to their corresponding ASCII character values.
- SELECT b ' \ x66 \ x6f \ x6f' AS bytes value , TO CODE POINTS ( b ' \ x66 \ x6f \ x6f' ) AS bytes value as integer / ------------------+------------------------+ bytes value bytes value as integer +------------------+------------------------+ foo [102, 111, 111] +------------------+------------------------ / SELECT b ' \ x00 \ x01 \ x10 \ xff' AS bytes value , TO CODE POINTS ( b ' \ x00 \ x01 \ x10 \ xff' ) AS bytes value as integer / ------------------+------------------------+ bytes value bytes value as integer +------------------+------------------------+ \x00\x01\x10\xff [0, 1, 16, 255] +------------------+------------------------ / The following example demonstrates the difference between a BYTES result and a STRING result.
- WITH Words AS ( SELECT word FROM UNNEST ( [ 'foo' , 'bar' , 'baz' , 'giraffe' , 'llama' ] ) AS word ) SELECT CODE POINTS TO STRING ( [ code point ] ) AS letter , COUNT ( ) AS letter count FROM Words , UNNEST ( TO CODE POINTS ( word )) AS code point GROUP BY 1 ORDER BY 2 DESC ; / --------+--------------+ letter letter count +--------+--------------+ a 5 f 3 r 2 b 2 l 2 o 2 g 1 z 1 e 1 m 1 i 1 +--------+-------------- / COLLATE COLLATE ( value , collate specification ) Takes a STRING and a collation specification .

