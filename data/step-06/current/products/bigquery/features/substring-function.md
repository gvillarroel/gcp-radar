---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.752Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SUBSTRING function"
feature_slug: "substring-function"
latest_feature_date: "2020-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "substring"
  - "extracts"
  - "portions"
  - "strings"
  - "bigquery"
  - "sql"
---

# SUBSTRING function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The SUBSTRING function extracts portions of strings in BigQuery SQL.

## Extended Definition

The SUBSTRING function extracts portions of strings in BigQuery SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- REGEXP REPLACE Produces a STRING value where all substrings that match a regular expression are replaced with a specified value.
- REGEXP EXTRACT ALL Produces an array of all substrings that match a regular expression.
- Home Documentation Data analytics BigQuery Reference Send feedback Functions (alphabetical) Stay organized with collections Save and categorize content based on your preferences.
- JSON EXTRACT ARRAY (Deprecated) Extracts a JSON array and converts it to a SQL ARRAY<JSON-formatted STRING> or ARRAY<JSON> value.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Example: legacySQL SELECT REGEXP EXTRACT ( word , r '(\w\w\' \ w \ w ) ' ) AS fragment FROM [ bigquery - public - data : samples . shakespeare ] GROUP BY fragment ORDER BY fragment LIMIT 3 ; Returns: +----------+ fragment +----------+ NULL Al'ce As'es +----------+ REGEXP REPLACE(' orig str ', ' reg exp ', 'replace str') Returns a string where any substring of orig str that matches reg exp is replaced with replace str .
- BigQuery supports writing IPv4 and IPv6 addresses in packed strings, as 4- or 16-byte binary data in network byte order.
- If delimiter is specified, the SPLIT function breaks str into substrings, using delimiter as the delimiter.
- SPLIT(' str ' [, 'delimiter']) Splits a string into repeated substrings.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group The position isn't a positive integer The occurrence isn't a positive integer Return type STRING or BYTES Examples SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+' ) AS user name / -----------+ user name +-----------+ foo +----------- / SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+@[a-zA-Z0-9-]+ \ .([a-zA-Z0-9-.]+$)' ) / ------------------+ top level domain +------------------+ com +------------------ / SELECT REGEXP EXTRACT ( 'ab' , '.b' ) AS result a , REGEXP EXTRACT ( 'ab' , '(.)b' ) AS result b , REGEXP EXTRACT ( 'xyztb' , '(.)+b' ) AS result c , REGEXP EXTRACT ( 'ab' , '(z)?b' ) AS result d / -------------------------------------------+ result a result b result c result d +-------------------------------------------+ ab a t NULL +------------------------------------------- / WITH example AS ( SELECT 'Hello Helloo and Hellooo' AS value , 'H?ello+' AS regex , 1 as position , 1 AS occurrence UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 4 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 2 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 20 , 1 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 1 , 2 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 2 , 3 ) SELECT value , regex , position , occurrence , REGEXP EXTRACT ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------------+---------+----------+------------+--------------+ Hello Helloo and Hellooo H?ello+ 1 1 Hello Hello Helloo and Hellooo H?ello+ 1 2 Helloo Hello Helloo and Hellooo H?ello+ 1 3 Hellooo Hello Helloo and Hellooo H?ello+ 1 4 NULL Hello Helloo and Hellooo H?ello+ 2 1 ello Hello Helloo and Hellooo H?ello+ 3 1 Helloo Hello Helloo and Hellooo H?ello+ 3 2 Hellooo Hello Helloo and Hellooo H?ello+ 3 3 NULL Hello Helloo and Hellooo H?ello+ 20 1 NULL cats&dogs&rabbits \w+& 1 2 dogs& cats&dogs&rabbits \w+& 2 3 NULL +--------------------------+---------+----------+------------+-------------- / REGEXP EXTRACT ALL REGEXP EXTRACT ALL ( value , regexp ) Description Returns an array of all substrings of value that match the re2 regular expression , regexp .
- Return type INT64 Examples SELECT REGEXP INSTR ( 'ab@cd-ef' , '@[^-] ' ) AS instr a , REGEXP INSTR ( 'ab@d-ef' , '@[^-] ' ) AS instr b , REGEXP INSTR ( 'abc@cd-ef' , '@[^-] ' ) AS instr c , REGEXP INSTR ( 'abc-ef' , '@[^-] ' ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 3 3 4 0 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 3 ) AS instr c , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 4 ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 2 2 10 10 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 3 ) AS instr c / -----------------------------+ instr a instr b instr c +-----------------------------+ 2 10 18 +----------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 0 ) AS instr a , REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 1 ) AS instr b / -------------------+ instr a instr b +-------------------+ 2 5 +------------------- / REGEXP REPLACE REGEXP REPLACE ( value , regexp , replacement ) Description Returns a STRING where all substrings of value that match regular expression regexp are replaced with replacement .
- If the regular expression contains a capturing group ( (...) ), the function returns an array of substrings that are matched by the capturing group.
- REGEXP REPLACE Produces a STRING value where all substrings that match a regular expression are replaced with a specified value.

