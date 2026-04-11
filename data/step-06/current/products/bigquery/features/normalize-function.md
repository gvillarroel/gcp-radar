---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.889Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NORMALIZE function"
feature_slug: "normalize-function"
latest_feature_date: "2017-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "NORMALIZE string function"
  - "Standard SQL NORMALIZE"
  - "NORMALIZE function"
  - "string NORMALIZE"
  - "SQL NORMALIZE"
  - "NORMALIZE()"
---

# NORMALIZE function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The NORMALIZE string function is now supported in BigQuery Standard SQL.

## Extended Definition

The NORMALIZE string function is now supported in BigQuery Standard SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING Examples SELECT NORMALIZE ( 'The red barn' ) = NORMALIZE ( 'The Red Barn' ) AS normalized , NORMALIZE AND CASEFOLD ( 'The red barn' ) = NORMALIZE AND CASEFOLD ( 'The Red Barn' ) AS normalized with case folding ; / ------------+------------------------------+ normalized normalized with case folding +------------+------------------------------+ FALSE TRUE +------------+------------------------------ / SELECT ' \ u2168' AS a , 'IX' AS b , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKD ) AS nfkd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKC ) AS nfkc ; / ---+----+-------+-------+------+------+ a b nfd nfc nfkd nfkc +---+----+-------+-------+------+------+ Ⅸ IX false false true true +---+----+-------+-------+------+------ / SELECT ' \ u0041 \ u030A' AS a , ' \ u00C5' AS b , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKD ) AS nkfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKC ) AS nkfc ; / ---+----+-------+-------+------+------+ a b nfd nfc nkfd nkfc +---+----+-------+-------+------+------+ Å Å true true true true +---+----+-------+-------+------+------ / OCTET LENGTH OCTET LENGTH ( value ) Alias for BYTE LENGTH .
- Return type STRING Examples The following example normalizes different language characters: SELECT NORMALIZE ( ' \ u00ea' ) as a , NORMALIZE ( ' \ u0065 \ u0302' ) as b , NORMALIZE ( ' \ u00ea' ) = NORMALIZE ( ' \ u0065 \ u0302' ) as normalized ; / ---+---+------------+ a b normalized +---+---+------------+ ê ê TRUE +---+---+------------ / The following examples normalize different space characters: SELECT NORMALIZE ( 'Raha \ u2004Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2005Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2006Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / NORMALIZE AND CASEFOLD NORMALIZE AND CASEFOLD ( value [ , normalization mode ] ) Description Takes a string value and returns it as a normalized string.
- Bar +--------------------- / SELECT CONCAT ( 'Summer' , ' ' , 1923 ) as release date ; / ---------------------+ release date +---------------------+ Summer 1923 +--------------------- / With Employees AS ( SELECT 'John' AS first name , 'Doe' AS last name UNION ALL SELECT 'Jane' AS first name , 'Smith' AS last name UNION ALL SELECT 'Joe' AS first name , 'Jackson' AS last name ) SELECT CONCAT ( first name , ' ' , last name ) AS full name FROM Employees ; / ---------------------+ full name +---------------------+ John Doe Jane Smith Joe Jackson +--------------------- / CONTAINS SUBSTR CONTAINS SUBSTR ( expression , search value literal [ , json scope = > json scope value ] ) Description Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.
- Return type STRING or BYTES Examples SELECT CONCAT ( '#' , LTRIM ( ' apple ' ), '#' ) AS example / -------------+ example +-------------+ #apple # +------------- / SELECT LTRIM ( ' apple ' , ' ' ) AS example / -----------+ example +-----------+ apple +----------- / SELECT LTRIM ( 'xxxapplexxx' , 'xyz' ) AS example / -----------+ example +-----------+ applexxx +----------- / NORMALIZE NORMALIZE ( value [ , normalization mode ] ) Description Takes a string value and returns it as a normalized string.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- CONTAINS SUBSTR Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.
- NORMALIZE AND CASEFOLD Case-insensitively normalizes the characters in a STRING value.
- JUSTIFY INTERVAL Normalizes the day and time parts of an INTERVAL value.
- NORMALIZE Case-sensitively normalizes the characters in a STRING value.

