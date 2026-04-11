---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.811Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery UNICODE function"
feature_slug: "bigquery-unicode-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "UNICODE(string_expr)"
  - "unicode codepoint"
  - "Unicode code point"
  - "UNICODE function"
  - "UNICODE()"
  - "standard SQL function"
---

# BigQuery UNICODE function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the UNICODE function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the UNICODE function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- TRIM Removes the specified leading and trailing Unicode code points or bytes from a STRING or BYTES value.
- UNICODE Gets the Unicode code point for the first character in a value.
- CHR Converts a Unicode code point to a character.
- SAFE CONVERT BYTES TO STRING Converts a BYTES value to a STRING value and replace any invalid UTF-8 characters with the Unicode replacement character, U+FFFD .

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Decodes to a single Unicode character (in string literals) or byte (in bytes literals). \xhh or \Xhh Hex escape, with exactly 2 hex digits (0–9 or A–F or a–f).
- Note that the range D800-DFFF isn't allowed, as these are surrogate unicode values. \Uhhhhhhhh Unicode escape, with uppercase 'U' and exactly 8 hex digits.
- Examples: '\x41' == 'A' '\x41B' is 'AB' '\x4' is an error \uhhhh Unicode escape, with lowercase 'u' and exactly 4 hex digits.
- Decodes to a single Unicode character (in string literals) or byte (in bytes literals).

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Parameterized string type Parameterized Type Description STRING(L) String with a maximum of L Unicode characters allowed in the string, where L is a positive INT64 value.
- All functions and operators that act on string values operate on Unicode characters rather than bytes.
- If a string with more than L Unicode characters is assigned, throws an OUT OF RANGE error.
- Each Unicode character has a numeric value called a code point assigned to it.

