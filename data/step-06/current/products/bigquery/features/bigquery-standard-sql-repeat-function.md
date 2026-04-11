---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.921Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL REPEAT function"
feature_slug: "bigquery-standard-sql-repeat-function"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "REPEAT(str, n)"
  - "REPEAT(string, count)"
  - "string repeat function"
  - "Standard SQL REPEAT"
  - "REPEAT function"
  - "string REPEAT"
  - "REPEAT()"
  - "repeat()"
---

# BigQuery Standard SQL REPEAT function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added the REPEAT string function.

## Extended Definition

BigQuery Standard SQL added the REPEAT string function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- It would be visible to a HAVING clause. legacySQL SELECT word AS word alias , LENGTH ( word ) AS len FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS 'th' ORDER BY len ; WITHIN modifier for aggregate functions aggregate function WITHIN RECORD [ [ AS ] alias ] The WITHIN keyword causes the aggregate function to aggregate across repeated values within each record.
- FLATTEN operator (FLATTEN( [project name:]datasetId.tableId , field to be flattened)) (FLATTEN(( subquery ), field to be flattened)) Unlike typical SQL-processing systems, BigQuery is designed to handle repeated data.
- If you use OMIT...IF to exclude a portion of a record in a repeating field, and the query also selects other independently repeating fields, BigQuery omits a portion of the other repeated records in the query.
- If you see the error Cannot perform OMIT IF on repeated scope <scope> with independently repeating pass through field <field>, we recommend that you switch to GoogleSQL.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING or BYTES Examples WITH example AS ( SELECT 'Hello World Helloo' AS value , 'H?ello+' AS regex , 1 AS position , 1 AS occurrence ) SELECT value , regex , position , occurrence , REGEXP SUBSTR ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------+---------+----------+------------+--------------+ Hello World Helloo H?ello+ 1 1 Hello +--------------------+---------+----------+------------+-------------- / REPEAT REPEAT ( original value , repetitions ) Description Returns a STRING or BYTES value that consists of original value , repeated.
- Return type STRING or BYTES Examples SELECT REPEAT ( 'abc' , 3 ) AS results / -----------+ results ----------- abcabcabc +----------- / SELECT REPEAT ( 'abc' , NULL ) AS results / ---------+ results --------- NULL +--------- / SELECT REPEAT ( NULL , 3 ) AS results / ---------+ results --------- NULL +--------- / REPLACE REPLACE ( original value , from pattern , to pattern ) Description Replaces all occurrences of from pattern with to pattern in original value .
- REPEAT Produces a STRING or BYTES value that consists of an original value, repeated.
- The repetitions parameter specifies the number of times to repeat original value .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Examples Creating a new table The following example creates a partitioned table named newtable in mydataset : CREATE TABLE mydataset . newtable ( x INT64 OPTIONS ( description = "An optional INTEGER field" ), y STRUCT < a ARRAY < STRING > OPTIONS ( description = "A repeated STRING field" ), b BOOL ) PARTITION BY PARTITIONDATE OPTIONS ( expiration timestamp = TIMESTAMP "2025-01-01 00:00:00 UTC" , partition expiration days = 1 , description = "a table that expires in 2025, with each partition living for 24 hours" , labels =[ ( "org unit" , "development" ) ] ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 2 columns: corpus: Name of a Shakespeare corpus top words: An ARRAY of STRUCT s containing 2 fields: word (a STRING ) and word count (an INT64 with the word count) Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.

