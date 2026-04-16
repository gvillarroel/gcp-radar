---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.765Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TRANSLATE function"
feature_slug: "translate-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
keywords:
  - "translate"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "string"
  - "replacement"
---

# TRANSLATE function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the TRANSLATE string replacement function.

## Extended Definition

BigQuery Standard SQL supports the TRANSLATE string replacement function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports string functions.
- Return type INT64 Examples SELECT REGEXP INSTR ( 'ab@cd-ef' , '@[^-] ' ) AS instr a , REGEXP INSTR ( 'ab@d-ef' , '@[^-] ' ) AS instr b , REGEXP INSTR ( 'abc@cd-ef' , '@[^-] ' ) AS instr c , REGEXP INSTR ( 'abc-ef' , '@[^-] ' ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 3 3 4 0 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 3 ) AS instr c , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 4 ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 2 2 10 10 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 3 ) AS instr c / -----------------------------+ instr a instr b instr c +-----------------------------+ 2 10 18 +----------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 0 ) AS instr a , REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 1 ) AS instr b / -------------------+ instr a instr b +-------------------+ 2 5 +------------------- / REGEXP REPLACE REGEXP REPLACE ( value , regexp , replacement ) Description Returns a STRING where all substrings of value that match regular expression regexp are replaced with replacement .
- Return type STRING Example SELECT b ' \ x00 \ x01 \ x02 \ x03 \ xAA \ xEE \ xEF \ xFF' AS byte string , TO HEX ( b ' \ x00 \ x01 \ x02 \ x03 \ xAA \ xEE \ xEF \ xFF' ) AS hex string / ----------------------------------+------------------+ byte string hex string +----------------------------------+------------------+ \x00\x01\x02\x03\xaa\xee\xef\xff 00010203aaeeefff +----------------------------------+------------------ / TRANSLATE TRANSLATE ( expression , source characters , target characters ) Description In expression , replaces each character in source characters with the corresponding character in target characters .
- Return type STRING or BYTES Examples SELECT TRANSLATE ( 'This is a cookie' , 'sco' , 'zku' ) AS translate / ------------------+ translate +------------------+ Thiz iz a kuukie +------------------ / TRIM TRIM ( value to trim [ , set of characters to remove ] ) Description Takes a STRING or BYTES value to trim.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The following configuration YAML changes the output names of all objects (database, schema, relation, and attributes) in the script according to the configured rules. type : experimental object rewriter global : outputName : regex : - match : '\s' replaceWith : ' ' - match : '>=' replaceWith : 'gte' - match : '^[^a-zA-Z ]. ' replaceWith : ' $0' A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table "test special chars >= 12" ( "42eid" int , "custom column" varchar ( 10 )); bq-output.sql CREATE TABLE test special chars employees gte 12 ( 42eid INT64 , custom column STRING ) ; Optimize and improve the performance of translated SQL Optional transformations can be applied to translated SQL in order to introduce changes that can improve performance or cost.
- BigQuery supports the following data type conversions: DATETIME to TIMESTAMP TIMESTAMP to DATETIME (accepts optional time zone) TIMESTAMP WITH TIME ZONE to DATETIME (accepts optional time zone) CHAR to VARCHAR In the following example, the configuration YAML converts a TIMESTAMP data type to DATETIME . type : experimental object rewriter global : typeConvert : timestamp : DATETIME Setting default time zone Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- This optimization ensures that a Snowflake INTEGER , which is implicitly represented as NUMBER(38,0) in Snowflake, translates to a BigQuery INT64 instead of a BIGNUMERIC(38) .

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.
- BigQuery Graph supports additional features in the ISO standards.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.

