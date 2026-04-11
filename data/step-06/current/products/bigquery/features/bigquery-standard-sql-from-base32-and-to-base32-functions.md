---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.873Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL FROM_BASE32 and TO_BASE32 functions"
feature_slug: "bigquery-standard-sql-from-base32-and-to-base32-functions"
latest_feature_date: "2018-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "base32 decode"
  - "base32 encode"
  - "FROM_BASE32() TO_BASE32()"
  - "Standard SQL FROM_BASE32"
  - "Standard SQL TO_BASE32"
  - "Base32 functions"
  - "FROM_BASE32"
  - "TO_BASE32"
---

# BigQuery Standard SQL FROM_BASE32 and TO_BASE32 functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added support for the FROM_BASE32 and TO_BASE32 functions.

## Extended Definition

BigQuery Standard SQL added support for the FROM_BASE32 and TO_BASE32 functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly documents FROM BASE32 conversion, but the excerpt does not show TO BASE32, so it only partially covers this paired feature.

Evidence snippets:
- Return type BYTES Example SELECT FROM BASE32 ( 'MFRGGZDF74======' ) AS byte data ; -- Note that the result of FROM BASE32 is of type BYTES, displayed as a base64-encoded string. / -----------+ byte data +-----------+ YWJjZGX/ +----------- / FROM BASE64 FROM BASE64 ( string expr ) Description Converts the base64-encoded input string expr into BYTES format.
- Return type STRING Example SELECT TO BASE32 ( b 'abcde \ xFF' ) AS base32 string ; / ------------------+ base32 string +------------------+ MFRGGZDF74====== +------------------ / TO BASE64 TO BASE64 ( bytes expr ) Description Converts a sequence of BYTES into a base64-encoded STRING .
- FROM BASE32 FROM BASE32 ( string expr ) Description Converts the base32-encoded input string expr into BYTES format.
- TO BASE32 TO BASE32 ( bytes expr ) Description Converts a sequence of BYTES into a base32-encoded STRING .

