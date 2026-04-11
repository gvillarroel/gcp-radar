---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.633Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery custom masking routines with REGEX_REPLACE"
feature_slug: "bigquery-custom-masking-routines-with-regex-replace"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "REGEX_REPLACE scalar function"
  - "sensitive value obfuscation"
  - "REGEX_REPLACE masking"
  - "custom obfuscation routine"
  - "data masking UDF"
  - "BigQuery masking routine"
  - "custom masking routine"
  - "CREATE FUNCTION for masking"
---

# BigQuery custom masking routines with REGEX_REPLACE

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery allows custom masking routines using the REGEX_REPLACE scalar function to obfuscate sensitive data.

## Extended Definition

BigQuery custom masking routines are SQL user-defined functions (UDFs) used to implement masking logic and must accept either zero or one input (except that GEOGRAPHY and STRUCT inputs are not supported). Once created, the routine is available as a masking rule in data policies, and the supported function allowlist for these routines includes a REGEXP/REGEX replacement string function (reported as "REGEXP REPLACE" in the source), which can be used for value transformation-based masking.

## Evidence Summary

The BigQuery UDF documentation provides the requirements for custom masking routines, their availability as masking rules, and the allowed function set (including REGEXP REPLACE).

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- Create custom masking routines Note: This feature may not be available when using reservations that are created with certain BigQuery editions.
- Custom masking routines must meet the following requirements: The custom masking routine must be a SQL UDF.
- After you create the custom masking routine, it's available as a masking rule in Create data policies .

