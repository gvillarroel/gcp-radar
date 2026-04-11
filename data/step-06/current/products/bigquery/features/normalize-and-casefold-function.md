---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.890Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NORMALIZE_AND_CASEFOLD function"
feature_slug: "normalize-and-casefold-function"
latest_feature_date: "2017-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "NORMALIZE_AND_CASEFOLD function"
  - "Unicode case normalization"
  - "NORMALIZE_AND_CASEFOLD()"
  - "NORMALIZE_AND_CASEFOLD"
  - "normalize_and_casefold"
  - "normalize and casefold"
  - "casefolding function"
---

# NORMALIZE_AND_CASEFOLD function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The NORMALIZE_AND_CASEFOLD string function is now supported in BigQuery Standard SQL.

## Extended Definition

The NORMALIZE_AND_CASEFOLD string function is now supported in BigQuery Standard SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING Examples SELECT NORMALIZE ( 'The red barn' ) = NORMALIZE ( 'The Red Barn' ) AS normalized , NORMALIZE AND CASEFOLD ( 'The red barn' ) = NORMALIZE AND CASEFOLD ( 'The Red Barn' ) AS normalized with case folding ; / ------------+------------------------------+ normalized normalized with case folding +------------+------------------------------+ FALSE TRUE +------------+------------------------------ / SELECT ' \ u2168' AS a , 'IX' AS b , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKD ) AS nfkd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKC ) AS nfkc ; / ---+----+-------+-------+------+------+ a b nfd nfc nfkd nfkc +---+----+-------+-------+------+------+ Ⅸ IX false false true true +---+----+-------+-------+------+------ / SELECT ' \ u0041 \ u030A' AS a , ' \ u00C5' AS b , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKD ) AS nkfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKC ) AS nkfc ; / ---+----+-------+-------+------+------+ a b nfd nfc nkfd nkfc +---+----+-------+-------+------+------+ Å Å true true true true +---+----+-------+-------+------+------ / OCTET LENGTH OCTET LENGTH ( value ) Alias for BYTE LENGTH .
- Return type STRING Examples The following example normalizes different language characters: SELECT NORMALIZE ( ' \ u00ea' ) as a , NORMALIZE ( ' \ u0065 \ u0302' ) as b , NORMALIZE ( ' \ u00ea' ) = NORMALIZE ( ' \ u0065 \ u0302' ) as normalized ; / ---+---+------------+ a b normalized +---+---+------------+ ê ê TRUE +---+---+------------ / The following examples normalize different space characters: SELECT NORMALIZE ( 'Raha \ u2004Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2005Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2006Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / NORMALIZE AND CASEFOLD NORMALIZE AND CASEFOLD ( value [ , normalization mode ] ) Description Takes a string value and returns it as a normalized string.
- NORMALIZE AND CASEFOLD supports four optional normalization modes: Value Name Description NFC Normalization Form Canonical Composition Decomposes and recomposes characters by canonical equivalence.
- If you need to compare strings and case shouldn't be considered, use NORMALIZE AND CASEFOLD , otherwise use NORMALIZE .

