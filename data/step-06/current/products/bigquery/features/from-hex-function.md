---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.895Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "FROM_HEX function"
feature_slug: "from-hex-function"
latest_feature_date: "2017-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "FROM_HEX expression"
  - "hex string to bytes"
  - "FROM_HEX function"
  - "FROM_HEX()"
  - "FROM_HEX"
  - "from_hex"
---

# FROM_HEX function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The FROM_HEX function is now available in BigQuery Standard SQL.

## Extended Definition

The FROM_HEX function is now available in BigQuery Standard SQL.

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
- Return type BYTES Example WITH Input AS ( SELECT '00010203aaeeefff' AS hex str UNION ALL SELECT '0AF' UNION ALL SELECT '666f6f626172' ) SELECT hex str , FROM HEX ( hex str ) AS bytes str FROM Input ; -- Note that the result of FROM HEX is of type BYTES, displayed as a base64-encoded string. / ------------------+--------------+ hex str bytes str +------------------+--------------+ 0AF AK8= 00010203aaeeefff AAECA6ru7/8= 666f6f626172 Zm9vYmFy +------------------+-------------- / INITCAP INITCAP ( value [ , delimiters ] ) Description Takes a STRING and returns it with the first character in each word in uppercase and all other characters in lowercase.
- SELECT FROM BASE64 ( REPLACE ( REPLACE ( ' -A=' , '-' , '+' ), ' ' , '/' )) AS binary ; -- Note that the result of FROM BASE64 is of type BYTES, displayed as a base64-encoded string. / --------+ binary +--------+ /+A= +-------- / FROM HEX FROM HEX ( string ) Description Converts a hexadecimal-encoded STRING into BYTES format.
- FROM HEX Converts a hexadecimal-encoded STRING value into a BYTES value.
- To convert a hexadecimal-encoded STRING to BYTES , use FROM HEX .

