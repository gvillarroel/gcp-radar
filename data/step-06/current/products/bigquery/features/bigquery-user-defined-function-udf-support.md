---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.949Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery user-defined function (UDF) support"
feature_slug: "bigquery-user-defined-function-udf-support"
latest_feature_date: "2015-08-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "JavaScript UDF"
  - "UDF support"
  - "SQL UDF"
  - "user-defined function"
  - "UDF"
  - "custom function"
  - "CREATE FUNCTION"
---

# BigQuery user-defined function (UDF) support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for user-defined functions in the web UI; BigQuery added support for user-defined functions (UDFs).

## Extended Definition

BigQuery added support for user-defined functions in the web UI; BigQuery added support for user-defined functions (UDFs).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a core BigQuery UDF guide explaining what UDFs are and how to create and use them via SQL.

Evidence snippets:
- To correct the error, include the project ID in the table reference: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project1 . mydataset . mytable ) ); You can also reference an entity in a different project or dataset from the one where you create the function: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project2 . another dataset . another table ) ); Use system variables with SQL UDFs The @@session id and @@location system variables are supported with SQL UDFs.
- SQL UDFs The following example creates a temporary SQL UDF named AddFourAndDivide and calls the UDF from within a SELECT statement: CREATE TEMP FUNCTION AddFourAndDivide ( x INT64 , y INT64 ) RETURNS FLOAT64 AS ( ( x + 4 ) / y ); SELECT val , AddFourAndDivide ( val , 2 ) FROM UNNEST ( [ 2 , 3 , 5 , 8 ] ) AS val ; This example produces the following output: +-----+-----+ val f0 +-----+-----+ 2 3.0 3 3.5 5 4.5 8 6.0 +-----+-----+ The next example creates the same function as a persistent UDF: CREATE FUNCTION mydataset .
- CREATE TEMP FUNCTION SumFieldsNamedFoo ( json row STRING ) RETURNS FLOAT64 LANGUAGE js AS r " "" function SumFoo(obj) { var sum = 0; for (var field in obj) { if (obj.hasOwnProperty(field) && obj[field] != null) { if (typeof obj[field] == " object ") { sum += SumFoo(obj[field]); } else if (field == " foo ") { sum += obj[field]; } } } return sum; } var row = JSON.parse(json row); return SumFoo(row); "" " ; WITH Input AS ( SELECT STRUCT ( 1 AS foo , 2 AS bar , STRUCT ( 'foo' AS x , 3.14 AS foo ) AS baz ) AS s , 10 AS foo UNION ALL SELECT NULL , 4 AS foo UNION ALL SELECT STRUCT ( NULL , 2 AS bar , STRUCT ( 'fizz' AS x , 1.59 AS foo ) AS baz ) AS s , NULL AS foo ) SELECT TO JSON STRING ( t ) AS json row , SumFieldsNamedFoo ( TO JSON STRING ( t )) AS foo sum FROM Input AS t ; The example produces the following output: +---------------------------------------------------------------------+---------+ json row foo sum +---------------------------------------------------------------------+---------+ { "s" :{ "foo" : 1 , "bar" : 2 , "baz" :{ "x" : "foo" , "foo" : 3.14 }} , "foo" : 10 } 14.14 { "s" : null , "foo" : 4 } 4 { "s" :{ "foo" : null , "bar" : 2 , "baz" :{ "x" : "fizz" , "foo" : 1.59 }} , "foo" : null } 1.59 +---------------------------------------------------------------------+---------+ Supported JavaScript UDF data types Some SQL types have a direct mapping to JavaScript types, but others don't.
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: UDFs are listed as a DDL-manageable BigQuery resource, though the page does not focus specifically on web UI implementation details.

Evidence snippets:
- Syntax To create a SQL UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) ( [ named parameter [ , ... ]] ) [ RETURNS data type ] AS ( sql expression ) [ OPTIONS ( function option list ) ] named parameter : param name param type To create a JavaScript UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type [ determinism specifier ] LANGUAGE js [ OPTIONS ( function option list ) ] AS javascript code named parameter : param name param type determinism specifier : { DETERMINISTIC NOT DETERMINISTIC } To create a Python UDF, use the following syntax: Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 AS ( x y ); Create a JavaScript UDF The following example creates a temporary JavaScript UDF named multiplyInputs and calls it from inside a SELECT statement.
- For a SQL UDF, the value of param type can also be ANY TYPE . determinism specifier : Applies only to JavaScript UDFs.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.
- If the configuration setting is not specified, the default value is true ; uses legacy SQL. --view udf resource= FILE Specifies the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource used by a view's SQL query.
- Routines include persistent user-defined functions , table functions ( Preview ), and stored procedures . --row access policies When specified, lists all the row-level access policies on a table.
- A routine can be a persistent user-defined function , a table function ( Preview ), or a stored procedure . --table={true false} or -t={true false} To delete a table or view, set to true .

