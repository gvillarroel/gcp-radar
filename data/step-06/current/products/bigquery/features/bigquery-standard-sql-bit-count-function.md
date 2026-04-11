---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.914Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL BIT_COUNT function"
feature_slug: "bigquery-standard-sql-bit-count-function"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "BYTES bit counting"
  - "Standard SQL BIT_COUNT"
  - "BIT_COUNT function"
  - "BIT_COUNT(bytes)"
  - "bit_count()"
  - "bit_count"
  - "BIT_COUNT"
---

# BigQuery Standard SQL BIT_COUNT function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added the BIT_COUNT function for BYTES processing.

## Extended Definition

BigQuery Standard SQL added the BIT_COUNT function for BYTES processing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Syntax Operator Description Example & Bitwise AND SELECT (1 + 3) & 1 Returns: 0 Bitwise OR SELECT 24 12 Returns: 28 ^ Bitwise XOR SELECT 1 ^ 0 Returns: 1 << Bitwise shift left SELECT 1 << (2 + 2) Returns: 16 > Bitwise shift right SELECT (6 + 2) >> 2 Returns: 2 Bitwise NOT SELECT 2 Returns: -3 BIT COUNT( <numeric expr> ) Returns the number of bits that are set in <numeric expr> .
- Arithmetic operators + Addition - Subtraction Multiplication / Division % Modulo Bitwise functions & Bitwise AND Bitwise OR ^ Bitwise XOR << Bitwise shift left > Bitwise shift right Bitwise NOT BIT COUNT() Returns the number of bits ...
- SELECT BIT COUNT(29); Returns: 4 Casting functions Casting functions change the data type of a numeric expression.

