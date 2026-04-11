---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.694Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery session temporary function persistence"
feature_slug: "bigquery-session-temporary-function-persistence"
latest_feature_date: "2023-01-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "session-scoped temporary function"
  - "temporary function persistence"
  - "persistent temp function"
  - "session temp function"
  - "CREATE TEMP FUNCTION"
  - "session end"
  - "function lifetime"
  - "session scope"
---

# BigQuery session temporary function persistence

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Temporary functions in BigQuery sessions now persist until the session ends.

## Extended Definition

BigQuery allows defining temporary user-defined functions with the `CREATE TEMP FUNCTION` syntax (including SQL and JavaScript forms), which are shown as lightweight, transient UDFs used in queries. The provided excerpts confirm temporary UDF syntax and usage but do not provide explicit documentation text that these functions persist until the session ends, so the session-lifetime behavior is not directly evidenced here.

## Evidence Summary

The source page documents how to create and use `CREATE TEMP FUNCTION` in BigQuery SQL, but it does not explicitly confirm session-end persistence in the supplied excerpts.

## Source Links

- [https://cloud.google.com/bigquery/docs/user-defined-functions](https://cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TEMP FUNCTION SumFieldsNamedFoo ( json row STRING ) RETURNS FLOAT64 LANGUAGE js AS r " "" function SumFoo(obj) { var sum = 0; for (var field in obj) { if (obj.hasOwnProperty(field) && obj[field] != null) { if (typeof obj[field] == " object ") { sum += SumFoo(obj[field]); } else if (field == " foo ") { sum += obj[field]; } } } return sum; } var row = JSON.parse(json row); return SumFoo(row); "" " ; WITH Input AS ( SELECT STRUCT ( 1 AS foo , 2 AS bar , STRUCT ( 'foo' AS x , 3.14 AS foo ) AS baz ) AS s , 10 AS foo UNION ALL SELECT NULL , 4 AS foo UNION ALL SELECT STRUCT ( NULL , 2 AS bar , STRUCT ( 'fizz' AS x , 1.59 AS foo ) AS baz ) AS s , NULL AS foo ) SELECT TO JSON STRING ( t ) AS json row , SumFieldsNamedFoo ( TO JSON STRING ( t )) AS foo sum FROM Input AS t ; The example produces the following output: +---------------------------------------------------------------------+---------+ json row foo sum +---------------------------------------------------------------------+---------+ { "s" :{ "foo" : 1 , "bar" : 2 , "baz" :{ "x" : "foo" , "foo" : 3.14 }} , "foo" : 10 } 14.14 { "s" : null , "foo" : 4 } 4 { "s" :{ "foo" : null , "bar" : 2 , "baz" :{ "x" : "fizz" , "foo" : 1.59 }} , "foo" : null } 1.59 +---------------------------------------------------------------------+---------+ Supported JavaScript UDF data types Some SQL types have a direct mapping to JavaScript types, but others don't.
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.
- For one line code snippets, you can use a standard quoted string: CREATE TEMP FUNCTION plusOne ( x FLOAT64 ) RETURNS FLOAT64 LANGUAGE js AS "return x+1;" ; SELECT val , plusOne ( val ) AS result FROM UNNEST ( [ 1 , 2 , 3 , 4 , 5 ] ) AS val ; This example produces the following output: +-----------+-----------+ val result +-----------+-----------+ 1 2.0 2 3.0 3 4.0 4 5.0 5 6.0 +-----------+-----------+ In cases where the snippet contains quotes, or consists of multiple lines, use triple-quoted blocks: CREATE TEMP FUNCTION customGreeting ( a STRING ) RETURNS STRING LANGUAGE js AS r " "" var d = new Date(); if (d.getHours() < 12) { return 'Good Morning, ' + a + '!'; } else { return 'Good Evening, ' + a + '!'; } "" " ; SELECT customGreeting ( names ) AS everyone FROM UNNEST ( [ 'Hannah' , 'Max' , 'Jakob' ] ) AS names ; This example produces the following output: +-----------------------+ everyone +-----------------------+ Good Morning, Hannah!
- CREATE TEMP FUNCTION addFourAndDivideAny ( x ANY TYPE , y ANY TYPE ) AS ( ( x + 4 ) / y ); SELECT addFourAndDivideAny ( 3 , 4 ) AS integer input , addFourAndDivideAny ( 1.59 , 3.14 ) AS floating point input ; This example produces the following output: +----------------+-----------------------+ integer input floating point input +----------------+-----------------------+ 1.75 1.7802547770700636 +----------------+-----------------------+ The next example uses a templated parameter to return the last element of an array of any type: CREATE TEMP FUNCTION lastArrayElement ( arr ANY TYPE ) AS ( arr [ ORDINAL ( ARRAY LENGTH ( arr )) ] ); SELECT lastArrayElement ( x ) AS last element FROM ( SELECT [ 2 , 3 , 5 , 8 , 13 ] AS x ); This example produces the following output: +--------------+ last element +--------------+ 13 +--------------+ Scalar subqueries A SQL UDF can return the value of a scalar subquery .

