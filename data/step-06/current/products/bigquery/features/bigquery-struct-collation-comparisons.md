---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.573Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery STRUCT collation comparisons"
feature_slug: "bigquery-struct-collation-comparisons"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "collated STRUCT compare"
  - "comparison operators !="
  - "comparison operators ="
  - "STRUCT comparison"
  - "CASE with STRUCT"
  - "STRUCT collation"
  - "STRUCT IN"
  - "STRUCT ="
---

# BigQuery STRUCT collation comparisons

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery collation now supports comparison of STRUCT values using =, !=, IN, and CASE.

## Extended Definition

BigQuery documents that STRUCT values can participate in comparison operations using only `=` (equal), `!=` (and `<>`) (not equal), and `IN` operators. It also documents that CASE expressions support comparison operators including `=`, `!=`, and `IN`, so comparisons over values in CASE logic can use those operators. The provided excerpts do not explicitly confirm collation-specific behavior, so that aspect is not evidenced here.

## Evidence Summary

The Operators page provides direct evidence of supported STRUCT comparison operators, while the query syntax and UDF pages provide supporting context on general comparison usage and CASE-supported operators.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: The page only provides operator-level STRUCT context (field access) and generic comparisons, not STRUCT-specific collation or IN/CASE comparison behavior.

Evidence snippets:
- Struct operands support only these comparison operators: equal ( = ), not equal ( != and <> ), and IN .
- Binary 2 + All numeric types Unary plus Unary - All numeric types Unary minus Unary Integer or BYTES Bitwise not Unary 3 All numeric types Multiplication Binary / All numeric types Division Binary STRING , BYTES , or ARRAY<T> Concatenation operator Binary 4 + All numeric types, DATE with INT64 , INTERVAL Addition Binary - All numeric types, DATE with INT64 , INTERVAL Subtraction Binary 5 << Integer or BYTES Bitwise left-shift Binary > Integer or BYTES Bitwise right-shift Binary 6 & Integer or BYTES Bitwise and Binary 7 ^ Integer or BYTES Bitwise xor Binary 8 Integer or BYTES Bitwise or Binary 9 (Comparison Operators) = Any comparable type.
- For example: -- Error: Field ordinal 6 is out of bounds in STRUCT SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ 6 ] AS field offset -- Error: Field ordinal 6 is out of bounds in STRUCT SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ OFFSET ( 6 ) ] AS field offset JSON subscript operator Note: Syntax characters enclosed in double quotes ( "" ) are literal and required. json expression "[" array element id "]" json expression "[" field name "]" Description Gets a value of an array element or field in a JSON expression.
- SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ 0 ] AS field index , STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ OFFSET ( 0 ) ] AS field offset , STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ ORDINAL ( 1 ) ] AS field ordinal / -------------+--------------+---------------+ field index field offset field ordinal +-------------+--------------+---------------+ 23 23 23 +-------------+--------------+--------------- / When you reference an index that's out of range in a struct, an error is produced.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For these ARRAY element types, SELECT against the value table column returns multiple columns: STRUCT Input values: array expression : An expression that produces an array and that's not an array path. array path : The path to an ARRAY type.
- If you reference the range variable in the SELECT list, the query returns a struct containing all of the fields of the original struct in the input table.
- This is frequently a comparison operation or logical combination of comparison operators.
- SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / The following example is similar to the previous one, except it allows overlapping matches: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-02-08 Clothing 2 mid 2024-02-10 Clothing 3 high 2024-03-15 Electronics 4 high 2024-03-15 Electronics Ian 3 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / Best practices To scale the performance of queries that contain the MATCH RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Following operators can be used with CASE and CASE expr statements: Comparison Operators - < , <= , > , >= , = , != , IN Logical Operators - AND , OR , NOT IS Operator For example, a masking routine that replaces a user's social security number with XXX-XX-XXXX might look as follows: CREATE OR REPLACE FUNCTION SSN Mask ( ssn STRING ) RETURNS STRING OPTIONS ( data governance type = "DATA MASKING" ) AS ( SAFE .
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- CREATE TEMP FUNCTION SumFieldsNamedFoo ( json row STRING ) RETURNS FLOAT64 LANGUAGE js AS r " "" function SumFoo(obj) { var sum = 0; for (var field in obj) { if (obj.hasOwnProperty(field) && obj[field] != null) { if (typeof obj[field] == " object ") { sum += SumFoo(obj[field]); } else if (field == " foo ") { sum += obj[field]; } } } return sum; } var row = JSON.parse(json row); return SumFoo(row); "" " ; WITH Input AS ( SELECT STRUCT ( 1 AS foo , 2 AS bar , STRUCT ( 'foo' AS x , 3.14 AS foo ) AS baz ) AS s , 10 AS foo UNION ALL SELECT NULL , 4 AS foo UNION ALL SELECT STRUCT ( NULL , 2 AS bar , STRUCT ( 'fizz' AS x , 1.59 AS foo ) AS baz ) AS s , NULL AS foo ) SELECT TO JSON STRING ( t ) AS json row , SumFieldsNamedFoo ( TO JSON STRING ( t )) AS foo sum FROM Input AS t ; The example produces the following output: +---------------------------------------------------------------------+---------+ json row foo sum +---------------------------------------------------------------------+---------+ { "s" :{ "foo" : 1 , "bar" : 2 , "baz" :{ "x" : "foo" , "foo" : 3.14 }} , "foo" : 10 } 14.14 { "s" : null , "foo" : 4 } 4 { "s" :{ "foo" : null , "bar" : 2 , "baz" :{ "x" : "fizz" , "foo" : 1.59 }} , "foo" : null } 1.59 +---------------------------------------------------------------------+---------+ Supported JavaScript UDF data types Some SQL types have a direct mapping to JavaScript types, but others don't.
- This rule must enable the following operations: bigquery.routines.get (for using routines) bigquery.tables.getData (for querying BigQuery tables) The following code shows an example YAML config: - egressFrom : identityType : ANY IDENTITY egressTo : operations : - serviceName : 'bigquery.googleapis.com' methodSelectors : - permission : 'bigquery.routines.get' - permission : 'bigquery.tables.getData' resources : - projects/1057666841514 # bigquery-public-data If you want to contribute to the UDFs in this repository, see Contributing UDFs for instructions.

