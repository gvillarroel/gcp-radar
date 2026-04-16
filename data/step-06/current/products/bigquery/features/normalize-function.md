---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.874Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NORMALIZE function"
feature_slug: "normalize-function"
latest_feature_date: "2017-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "normalize"
  - "bigquery"
  - "standard"
  - "sql"
  - "includes"
  - "string"
---

# NORMALIZE function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery standard SQL includes the NORMALIZE string function.

## Extended Definition

BigQuery standard SQL includes the NORMALIZE string function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING Examples SELECT NORMALIZE ( 'The red barn' ) = NORMALIZE ( 'The Red Barn' ) AS normalized , NORMALIZE AND CASEFOLD ( 'The red barn' ) = NORMALIZE AND CASEFOLD ( 'The Red Barn' ) AS normalized with case folding ; / ------------+------------------------------+ normalized normalized with case folding +------------+------------------------------+ FALSE TRUE +------------+------------------------------ / SELECT ' \ u2168' AS a , 'IX' AS b , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKD ) AS nfkd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKC ) AS nfkc ; / ---+----+-------+-------+------+------+ a b nfd nfc nfkd nfkc +---+----+-------+-------+------+------+ Ⅸ IX false false true true +---+----+-------+-------+------+------ / SELECT ' \ u0041 \ u030A' AS a , ' \ u00C5' AS b , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKD ) AS nkfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKC ) AS nkfc ; / ---+----+-------+-------+------+------+ a b nfd nfc nkfd nkfc +---+----+-------+-------+------+------+ Å Å true true true true +---+----+-------+-------+------+------ / OCTET LENGTH OCTET LENGTH ( value ) Alias for BYTE LENGTH .
- Return type STRING Examples The following example normalizes different language characters: SELECT NORMALIZE ( ' \ u00ea' ) as a , NORMALIZE ( ' \ u0065 \ u0302' ) as b , NORMALIZE ( ' \ u00ea' ) = NORMALIZE ( ' \ u0065 \ u0302' ) as normalized ; / ---+---+------------+ a b normalized +---+---+------------+ ê ê TRUE +---+---+------------ / The following examples normalize different space characters: SELECT NORMALIZE ( 'Raha \ u2004Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2005Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2006Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / NORMALIZE AND CASEFOLD NORMALIZE AND CASEFOLD ( value [ , normalization mode ] ) Description Takes a string value and returns it as a normalized string.
- Bar +--------------------- / SELECT CONCAT ( 'Summer' , ' ' , 1923 ) as release date ; / ---------------------+ release date +---------------------+ Summer 1923 +--------------------- / With Employees AS ( SELECT 'John' AS first name , 'Doe' AS last name UNION ALL SELECT 'Jane' AS first name , 'Smith' AS last name UNION ALL SELECT 'Joe' AS first name , 'Jackson' AS last name ) SELECT CONCAT ( first name , ' ' , last name ) AS full name FROM Employees ; / ---------------------+ full name +---------------------+ John Doe Jane Smith Joe Jackson +--------------------- / CONTAINS SUBSTR CONTAINS SUBSTR ( expression , search value literal [ , json scope = > json scope value ] ) Description Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.
- Return type STRING or BYTES Examples SELECT CONCAT ( '#' , LTRIM ( ' apple ' ), '#' ) AS example / -------------+ example +-------------+ #apple # +------------- / SELECT LTRIM ( ' apple ' , ' ' ) AS example / -----------+ example +-----------+ apple +----------- / SELECT LTRIM ( 'xxxapplexxx' , 'xyz' ) AS example / -----------+ example +-----------+ applexxx +----------- / NORMALIZE NORMALIZE ( value [ , normalization mode ] ) Description Takes a string value and returns it as a normalized string.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- SQL input: 1.0 JSON output: 1 SQL input: 9007199254740993 JSON output: 9007199254740993 SQL input: "+inf" JSON output: "Infinity" SQL input: "-inf" JSON output: "-Infinity" SQL input: "NaN" JSON output: "NaN" STRING string Encoded as a string, escaped according to the JSON standard.
- String values are escaped according to the JSON standard.
- SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"Jane"}]}} +----------------------------------------------------------- / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[]}} +----------------------------------------------------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"John"},{"name":"Jamie"}]}} +----------------------------------------------------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"Jane"} +----------------- / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ NULL +----------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"John"} +----------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": null}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ "Jamie" +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , "$.class['students']" ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"Jane"}] +------------------------------------ / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , "$.class['students']" ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [] +------------------------------------ / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , "$.class['students']" ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"John"},{"name":"Jamie"}] +------------------------------------ / SELECT JSON EXTRACT ( '{"a": null}' , "$.a" ); -- Returns a SQL NULL SELECT JSON EXTRACT ( '{"a": null}' , "$.b" ); -- Returns a SQL NULL SELECT JSON EXTRACT ( JSON '{"a": null}' , "$.a" ); -- Returns a JSON 'null' SELECT JSON EXTRACT ( JSON '{"a": null}' , "$.b" ); -- Returns a SQL NULL JSON EXTRACT ARRAY Note: This function is deprecated.
- SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"Jane"}]}} +----------------------------------------------------------- / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[]}} +----------------------------------------------------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"},{"name": "Jamie"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"John"},{"name":"Jamie"}]}} +----------------------------------------------------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"Jane"} +----------------- / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ NULL +----------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"John"} +----------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": null}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ "Jamie" +---------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class."students"' ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"Jane"}] +------------------------------------ / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$.class."students"' ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [] +------------------------------------ / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class."students"' ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"John"},{"name":"Jamie"}] +------------------------------------ / In the following examples, the JSON data is extracted in lax mode .

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- CONTAINS SUBSTR Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.
- NORMALIZE AND CASEFOLD Case-insensitively normalizes the characters in a STRING value.
- NORMALIZE Case-sensitively normalizes the characters in a STRING value.
- Home Documentation Data analytics BigQuery Reference Send feedback Functions (alphabetical) Stay organized with collections Save and categorize content based on your preferences.

