---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.895Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TO_HEX function"
feature_slug: "to-hex-function"
latest_feature_date: "2017-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "bytes to hexadecimal"
  - "TO_HEX expression"
  - "TO_HEX function"
  - "TO_HEX()"
  - "TO_HEX"
  - "to_hex"
---

# TO_HEX function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The TO_HEX function is now available in BigQuery Standard SQL.

## Extended Definition

The TO_HEX function is now available in BigQuery Standard SQL.

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
- Return type STRING Example SELECT b ' \ x00 \ x01 \ x02 \ x03 \ xAA \ xEE \ xEF \ xFF' AS byte string , TO HEX ( b ' \ x00 \ x01 \ x02 \ x03 \ xAA \ xEE \ xEF \ xFF' ) AS hex string / ----------------------------------+------------------+ byte string hex string +----------------------------------+------------------+ \x00\x01\x02\x03\xaa\xee\xef\xff 00010203aaeeefff +----------------------------------+------------------ / TRANSLATE TRANSLATE ( expression , source characters , target characters ) Description In expression , replaces each character in source characters with the corresponding character in target characters .
- SELECT TO CODE POINTS ( b 'Ā' ) AS b result , TO CODE POINTS ( 'Ā' ) AS s result ; / ------------+----------+ b result s result +------------+----------+ [196, 128] [256] +------------+---------- / TO HEX TO HEX ( bytes ) Description Converts a sequence of BYTES into a hexadecimal STRING .
- To convert BYTES to a hexadecimal-encoded STRING , use TO HEX .
- TO HEX Converts a BYTES value to a hexadecimal STRING value.

