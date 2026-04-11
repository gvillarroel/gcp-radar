---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.916Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL LPAD function"
feature_slug: "bigquery-standard-sql-lpad-function"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "left padding"
  - "left pad"
  - "Standard SQL LPAD"
  - "LPAD function"
  - "string LPAD"
  - "LPAD()"
  - "lpad"
---

# BigQuery Standard SQL LPAD function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added the LPAD string function.

## Extended Definition

BigQuery Standard SQL added the LPAD string function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- This function returns an error if: return length is negative pattern is empty Return type STRING or BYTES Examples SELECT FORMAT ( '%T' , LPAD ( 'c' , 5 )) AS results / ---------+ results +---------+ " c" +--------- / SELECT LPAD ( 'b' , 5 , 'a' ) AS results / ---------+ results +---------+ aaaab +--------- / SELECT LPAD ( 'abc' , 10 , 'ghd' ) AS results / ------------+ results +------------+ ghdghdgabc +------------ / SELECT LPAD ( 'abc' , 2 , 'd' ) AS results / ---------+ results +---------+ ab +--------- / SELECT FORMAT ( '%T' , LPAD ( b 'abc' , 10 , b 'ghd' )) AS results / ---------------+ results +---------------+ b"ghdghdgabc" +--------------- / LTRIM LTRIM ( value1 [ , value2 ] ) Description Identical to TRIM , but only removes leading characters.
- Return type STRING or BYTES Examples SELECT LOWER ( 'FOO BAR BAZ' ) AS example FROM items ; / -------------+ example +-------------+ foo bar baz +------------- / LPAD LPAD ( original value , return length [ , pattern ] ) Description Returns a STRING or BYTES value that consists of original value prepended with pattern .
- For example, LPAD('hello world', 7); returns 'hello w' .
- LPAD Prepends a STRING or BYTES value with a pattern.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY Setting the VALUE replaces the existing value of that option for the column, if there was one.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- LPAD(' str1 ', numeric expr , ' str2 ') Pads str1 on the left with str2 , repeating str2 until the result string is exactly numeric expr characters.
- LPAD() Inserts characters to the left of a string.
- LPAD() Inserts characters to the left of a string.
- Example: LPAD('1', 7, '?') returns ??????1 .

