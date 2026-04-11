---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.799Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SUBSTRING function"
feature_slug: "bigquery-substring-function"
latest_feature_date: "2020-10-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "SUBSTRING function"
  - "SUBSTRING"
  - "SUBSTR"
  - "string function"
  - "Standard SQL"
---

# BigQuery SUBSTRING function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL gained GA support for the SUBSTRING function.

## Extended Definition

BigQuery standard SQL gained GA support for the SUBSTRING function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a string-function reference that could include substring-related functions, but the provided excerpt does not explicitly document SUBSTRING.

Evidence snippets:
- Due to regular expression operator precedence, it's good practice to use parentheses around everything between ^ and $ . googlesql SELECT 'a@foo.com' AS email , REGEXP CONTAINS ( 'a@foo.com' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.com' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.com true true +----------------+---------------------+--------------------- / SELECT 'a@foo.computer' AS email , REGEXP CONTAINS ( 'a@foo.computer' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.computer' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.computer false true +----------------+---------------------+--------------------- / SELECT 'b@bar.org' AS email , REGEXP CONTAINS ( 'b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ b@bar.org true true +----------------+---------------------+--------------------- / SELECT '!b@bar.org' AS email , REGEXP CONTAINS ( '!b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( '!b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ !b@bar.org false true +----------------+---------------------+--------------------- / SELECT 'c@buz.net' AS email , REGEXP CONTAINS ( 'c@buz.net' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'c@buz.net' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ c@buz.net false false +----------------+---------------------+--------------------- / REGEXP EXTRACT REGEXP EXTRACT ( value , regexp [ , position [ , occurrence ]] ) Description Returns the substring in value that matches the re2 regular expression , regexp .
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group The position isn't a positive integer The occurrence isn't a positive integer Return type STRING or BYTES Examples SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+' ) AS user name / -----------+ user name +-----------+ foo +----------- / SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+@[a-zA-Z0-9-]+ \ .([a-zA-Z0-9-.]+$)' ) / ------------------+ top level domain +------------------+ com +------------------ / SELECT REGEXP EXTRACT ( 'ab' , '.b' ) AS result a , REGEXP EXTRACT ( 'ab' , '(.)b' ) AS result b , REGEXP EXTRACT ( 'xyztb' , '(.)+b' ) AS result c , REGEXP EXTRACT ( 'ab' , '(z)?b' ) AS result d / -------------------------------------------+ result a result b result c result d +-------------------------------------------+ ab a t NULL +------------------------------------------- / WITH example AS ( SELECT 'Hello Helloo and Hellooo' AS value , 'H?ello+' AS regex , 1 as position , 1 AS occurrence UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 4 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 2 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 20 , 1 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 1 , 2 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 2 , 3 ) SELECT value , regex , position , occurrence , REGEXP EXTRACT ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------------+---------+----------+------------+--------------+ Hello Helloo and Hellooo H?ello+ 1 1 Hello Hello Helloo and Hellooo H?ello+ 1 2 Helloo Hello Helloo and Hellooo H?ello+ 1 3 Hellooo Hello Helloo and Hellooo H?ello+ 1 4 NULL Hello Helloo and Hellooo H?ello+ 2 1 ello Hello Helloo and Hellooo H?ello+ 3 1 Helloo Hello Helloo and Hellooo H?ello+ 3 2 Hellooo Hello Helloo and Hellooo H?ello+ 3 3 NULL Hello Helloo and Hellooo H?ello+ 20 1 NULL cats&dogs&rabbits \w+& 1 2 dogs& cats&dogs&rabbits \w+& 2 3 NULL +--------------------------+---------+----------+------------+-------------- / REGEXP EXTRACT ALL REGEXP EXTRACT ALL ( value , regexp ) Description Returns an array of all substrings of value that match the re2 regular expression , regexp .
- Return type INT64 Examples SELECT REGEXP INSTR ( 'ab@cd-ef' , '@[^-] ' ) AS instr a , REGEXP INSTR ( 'ab@d-ef' , '@[^-] ' ) AS instr b , REGEXP INSTR ( 'abc@cd-ef' , '@[^-] ' ) AS instr c , REGEXP INSTR ( 'abc-ef' , '@[^-] ' ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 3 3 4 0 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 3 ) AS instr c , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 4 ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 2 2 10 10 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 3 ) AS instr c / -----------------------------+ instr a instr b instr c +-----------------------------+ 2 10 18 +----------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 0 ) AS instr a , REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 1 ) AS instr b / -------------------+ instr a instr b +-------------------+ 2 5 +------------------- / REGEXP REPLACE REGEXP REPLACE ( value , regexp , replacement ) Description Returns a STRING where all substrings of value that match regular expression regexp are replaced with replacement .
- Bar +--------------------- / SELECT CONCAT ( 'Summer' , ' ' , 1923 ) as release date ; / ---------------------+ release date +---------------------+ Summer 1923 +--------------------- / With Employees AS ( SELECT 'John' AS first name , 'Doe' AS last name UNION ALL SELECT 'Jane' AS first name , 'Smith' AS last name UNION ALL SELECT 'Joe' AS first name , 'Jackson' AS last name ) SELECT CONCAT ( first name , ' ' , last name ) AS full name FROM Employees ; / ---------------------+ full name +---------------------+ John Doe Jane Smith Joe Jackson +--------------------- / CONTAINS SUBSTR CONTAINS SUBSTR ( expression , search value literal [ , json scope = > json scope value ] ) Description Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers general Legacy SQL functions and operators, but the provided content does not specifically define SUBSTRING.

Evidence snippets:
- Example: legacySQL SELECT REGEXP EXTRACT ( word , r '(\w\w\' \ w \ w ) ' ) AS fragment FROM [ bigquery - public - data : samples . shakespeare ] GROUP BY fragment ORDER BY fragment LIMIT 3 ; Returns: +----------+ fragment +----------+ NULL Al'ce As'es +----------+ REGEXP REPLACE(' orig str ', ' reg exp ', 'replace str') Returns a string where any substring of orig str that matches reg exp is replaced with replace str .
- If delimiter is specified, the SPLIT function breaks str into substrings, using delimiter as the delimiter.
- SUBSTR(' str ', index [, max len ]) Returns a substring of str , starting at index .
- If index is -4 , the substring begins with the 4th character from the right in str .

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: The page likely includes SUBSTRING in its alphabetical function list, but it does not provide release-status or detailed GA-specific evidence for that function.

Evidence snippets:
- REGEXP REPLACE Produces a STRING value where all substrings that match a regular expression are replaced with a specified value.
- CONTAINS SUBSTR Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.
- ST LINESUBSTRING Gets a segment of a single linestring at a specific starting and ending fraction.
- REGEXP EXTRACT ALL Produces an array of all substrings that match a regular expression.

