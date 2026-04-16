---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.556Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "STRUCT subscript operator"
feature_slug: "struct-subscript-operator"
latest_feature_date: "2023-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "struct"
  - "subscript"
  - "operator"
  - "lets"
  - "you"
  - "access"
  - "field"
  - "index"
---

# STRUCT subscript operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The STRUCT subscript operator lets you access a STRUCT field by index, offset, or ordinal.

## Extended Definition

The STRUCT subscript operator lets you access a STRUCT field by index, offset, or ordinal.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT [ "coffee" , "tea" , "milk" ][ OFFSET ( 6 ) ] AS item offset Struct subscript operator Note: Syntax characters enclosed in double quotes ( "" ) are literal and required. struct expression "[" struct subscript specifier "]" struct subscript specifier : { index position keyword ( index ) } position keyword : { OFFSET ORDINAL } Description Gets the value of a field at a selected position in a struct.
- Input values: STRUCT JSON GRAPH ELEMENT Note: If the field to access is within a STRUCT , you can use the struct subscript operator to access the field by its position within the STRUCT instead of by its name.
- Order of Precedence Operator Input Data Types Name Operator Arity 1 Field access operator STRUCT JSON Field access operator Binary Array subscript operator ARRAY Array position.
- For example: -- Error: Field ordinal 6 is out of bounds in STRUCT SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ 6 ] AS field offset -- Error: Field ordinal 6 is out of bounds in STRUCT SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ OFFSET ( 6 ) ] AS field offset JSON subscript operator Note: Syntax characters enclosed in double quotes ( "" ) are literal and required. json expression "[" array element id "]" json expression "[" field name "]" Description Gets a value of an array element or field in a JSON expression.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT JSON REMOVE ( JSON '["a", ["b", "c"], "d"]' , '$[1]' ) AS json data / -----------+ json data +-----------+ ["a","d"] +----------- / You can use the field access operator to pass JSON data into this function.
- JSON-formatted string: '{"class" : {"students" : [{"name" : "Jane"}]}}' JSON path: "$.class.students" JSON result: [{"name":"Jane"}] [] Subscript operator.
- For example: SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ 10 , NULL ] ) AS json data / -------------------+ json data +-------------------+ {"a":10,"b":null} +------------------- / SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ JSON '10' , JSON '"foo"' ] ) AS json data / --------------------+ json data +--------------------+ {"a":10,"b":"foo"} +-------------------- / SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ STRUCT ( 10 AS id , 'Red' AS color ), STRUCT ( 20 AS id , 'Blue' AS color ) ] ) AS json data / ------------------------------------------------------------+ json data +------------------------------------------------------------+ {"a":{"color":"Red","id":10},"b":{"color":"Blue","id":20}} +------------------------------------------------------------ / SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ TO JSON ( 10 ), TO JSON ( [ 'foo' , 'bar' ] ) ] ) AS json data / ----------------------------+ json data +----------------------------+ {"a":10,"b":["foo","bar"]} +---------------------------- / The following query groups by id and then creates an array of keys and values from the rows with the same id : WITH Fruits AS ( SELECT 0 AS id , 'color' AS json key , 'red' AS json value UNION ALL SELECT 0 , 'fruit' , 'apple' UNION ALL SELECT 1 , 'fruit' , 'banana' UNION ALL SELECT 1 , 'ripe' , 'true' ) SELECT JSON OBJECT ( ARRAY AGG ( json key ), ARRAY AGG ( json value )) AS json data FROM Fruits GROUP BY id / ----------------------------------+ json data +----------------------------------+ {"color":"red","fruit":"apple"} {"fruit":"banana","ripe":"true"} +---------------------------------- / An error is produced if the size of the JSON keys and values arrays don't match: -- Error: The number of keys and values must match.
- Return type A JSON-formatted STRING Examples The following query converts a STRUCT value to a JSON-formatted string: SELECT TO JSON STRING ( STRUCT ( 1 AS id , [ 10 , 20 ] AS coordinates )) AS json data / --------------------------------+ json data +--------------------------------+ {"id":1,"coordinates":[10,20]} +-------------------------------- / The following query converts a STRUCT value to a JSON-formatted string that is easy to read: SELECT TO JSON STRING ( STRUCT ( 1 AS id , [ 10 , 20 ] AS coordinates ), true ) AS json data / --------------------+ json data +--------------------+ { "id": 1, "coordinates": [ 10, 20 ] } +-------------------- / Supplemental materials Differences between the JSON and JSON-formatted STRING types Many JSON functions accept two input types: JSON type STRING type The STRING version of the extraction functions behaves differently than the JSON version, mainly because JSON type values are always validated whereas JSON-formatted STRING type values aren't.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- You cannot use this statement to rename the following: Subfields, such as nested columns in a STRUCT Partitioning columns Clustering columns Fields that are part of primary key constraints or foreign key constraints Columns in a table that has row access policies After one or more columns in a table are renamed, you cannot do the following: Query the table with legacy SQL.
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.

