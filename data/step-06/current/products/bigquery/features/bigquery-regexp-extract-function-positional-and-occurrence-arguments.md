---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.808Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery REGEXP_EXTRACT function positional and occurrence arguments"
feature_slug: "bigquery-regexp-extract-function-positional-and-occurrence-arguments"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "REGEXP_EXTRACT(string_expr, regexp, position, occurrence)"
  - "positional arguments"
  - "occurrence argument"
  - "standard SQL regex functions"
  - "regex extract function"
  - "position argument"
  - "REGEXP_EXTRACT()"
  - "REGEXP_EXTRACT"
---

# BigQuery REGEXP_EXTRACT function positional and occurrence arguments

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for REGEXP_EXTRACT with additional position and occurrence parameters.

## Extended Definition

BigQuery standard SQL added support for REGEXP_EXTRACT with additional position and occurrence parameters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Due to regular expression operator precedence, it's good practice to use parentheses around everything between ^ and $ . googlesql SELECT 'a@foo.com' AS email , REGEXP CONTAINS ( 'a@foo.com' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.com' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.com true true +----------------+---------------------+--------------------- / SELECT 'a@foo.computer' AS email , REGEXP CONTAINS ( 'a@foo.computer' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.computer' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.computer false true +----------------+---------------------+--------------------- / SELECT 'b@bar.org' AS email , REGEXP CONTAINS ( 'b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ b@bar.org true true +----------------+---------------------+--------------------- / SELECT '!b@bar.org' AS email , REGEXP CONTAINS ( '!b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( '!b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ !b@bar.org false true +----------------+---------------------+--------------------- / SELECT 'c@buz.net' AS email , REGEXP CONTAINS ( 'c@buz.net' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'c@buz.net' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ c@buz.net false false +----------------+---------------------+--------------------- / REGEXP EXTRACT REGEXP EXTRACT ( value , regexp [ , position [ , occurrence ]] ) Description Returns the substring in value that matches the re2 regular expression , regexp .
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group The position isn't a positive integer The occurrence isn't a positive integer Return type STRING or BYTES Examples SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+' ) AS user name / -----------+ user name +-----------+ foo +----------- / SELECT REGEXP EXTRACT ( 'foo@example.com' , r '^[a-zA-Z0-9 .+-]+@[a-zA-Z0-9-]+ \ .([a-zA-Z0-9-.]+$)' ) / ------------------+ top level domain +------------------+ com +------------------ / SELECT REGEXP EXTRACT ( 'ab' , '.b' ) AS result a , REGEXP EXTRACT ( 'ab' , '(.)b' ) AS result b , REGEXP EXTRACT ( 'xyztb' , '(.)+b' ) AS result c , REGEXP EXTRACT ( 'ab' , '(z)?b' ) AS result d / -------------------------------------------+ result a result b result c result d +-------------------------------------------+ ab a t NULL +------------------------------------------- / WITH example AS ( SELECT 'Hello Helloo and Hellooo' AS value , 'H?ello+' AS regex , 1 as position , 1 AS occurrence UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 1 , 4 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 2 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 1 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 2 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 3 , 3 UNION ALL SELECT 'Hello Helloo and Hellooo' , 'H?ello+' , 20 , 1 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 1 , 2 UNION ALL SELECT 'cats&dogs&rabbits' , ' \\ w+&' , 2 , 3 ) SELECT value , regex , position , occurrence , REGEXP EXTRACT ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------------+---------+----------+------------+--------------+ Hello Helloo and Hellooo H?ello+ 1 1 Hello Hello Helloo and Hellooo H?ello+ 1 2 Helloo Hello Helloo and Hellooo H?ello+ 1 3 Hellooo Hello Helloo and Hellooo H?ello+ 1 4 NULL Hello Helloo and Hellooo H?ello+ 2 1 ello Hello Helloo and Hellooo H?ello+ 3 1 Helloo Hello Helloo and Hellooo H?ello+ 3 2 Hellooo Hello Helloo and Hellooo H?ello+ 3 3 NULL Hello Helloo and Hellooo H?ello+ 20 1 NULL cats&dogs&rabbits \w+& 1 2 dogs& cats&dogs&rabbits \w+& 2 3 NULL +--------------------------+---------+----------+------------+-------------- / REGEXP EXTRACT ALL REGEXP EXTRACT ALL ( value , regexp ) Description Returns an array of all substrings of value that match the re2 regular expression , regexp .
- Returns an error if: The regular expression is invalid The regular expression has more than one capturing group Return type ARRAY<STRING> or ARRAY<BYTES> Examples SELECT REGEXP EXTRACT ALL ( 'Try func(x) or func(y)' , '(.+?)' ) AS example / --------------------+ example +--------------------+ [func(x), func(y)] +-------------------- / The following example demonstrates non-overlapping matches with a capturing group: SELECT REGEXP EXTRACT ALL ( '123456' , r ' \ d( \ d) \ d' ) AS example ; / -----------+ example +-----------+ ['2', '5'] +----------- / The pattern r'\d(\d)\d' matches '123' and captures '2' .
- Return type STRING or BYTES Examples SELECT REGEXP REPLACE ( '# Heading' , r '^# ([a-zA-Z0-9 \ s]+$)' , '<h1> \\ 1</h1>' ) AS html / --------------------------+ html +--------------------------+ <h1>Heading</h1> +-------------------------- / REGEXP SUBSTR REGEXP SUBSTR ( value , regexp [ , position [ , occurrence ]] ) Description Synonym for REGEXP EXTRACT .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Example: legacySQL SELECT word , COUNT ( word ) AS count FROM [ bigquery - public - data : samples . shakespeare ] WHERE ( REGEXP MATCH ( word , r '\w\w\' \ w \ w ' )) GROUP BY word ORDER BY count DESC LIMIT 3 ; Returns: +-------+-------+ word count +-------+-------+ ne'er 42 we'll 35 We'll 33 +-------+-------+ REGEXP EXTRACT(' str ', ' reg exp ') Returns the portion of str that matches the capturing group within the regular expression.
- Example: legacySQL SELECT REGEXP EXTRACT ( word , r '(\w\w\' \ w \ w ) ' ) AS fragment FROM [ bigquery - public - data : samples . shakespeare ] GROUP BY fragment ORDER BY fragment LIMIT 3 ; Returns: +----------+ fragment +----------+ NULL Al'ce As'es +----------+ REGEXP REPLACE(' orig str ', ' reg exp ', 'replace str') Returns a string where any substring of orig str that matches reg exp is replaced with replace str .
- REGEXP EXTRACT() Returns the portion of the argument that matches the capturing group within the regular expression.
- REGEXP EXTRACT() Returns the portion of the argument that matches the capturing group within the regular expression.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- MAKE REF ( CONCAT ( 'gs:// BUCKET /cymbal-pets-images/grayscale/' , REGEXP EXTRACT ( image . uri , r '([^/]+)$' )), 'us.cymbal conn' ) AS gray image FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

