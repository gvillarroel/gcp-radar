---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.286Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation array unnesting"
feature_slug: "bigquery-data-preparation-array-unnesting"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arrays"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "bigquery"
  - "preparation"
  - "array"
  - "unnesting"
  - "can"
  - "unnest"
  - "arrays"
  - "expanding"
---

# BigQuery data preparation array unnesting

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparation can unnest arrays by expanding each array element into its own row.

## Extended Definition

BigQuery data preparation can unnest arrays by expanding each array element into its own row.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is equivalent to using an explicit CROSS JOIN , or the following example which uses an explicit INNER JOIN : WITH Races AS ( SELECT "800M" AS race , [ STRUCT ( "Rudisha" AS name , [ 23.4 , 26.3 , 26.4 , 26.1 ] AS laps ), STRUCT ( "Makhloufi" AS name , [ 24.5 , 25.4 , 26.6 , 26.1 ] AS laps ), STRUCT ( "Murphy" AS name , [ 23.9 , 26.0 , 27.0 , 26.0 ] AS laps ), STRUCT ( "Bosse" AS name , [ 23.6 , 26.2 , 26.5 , 27.1 ] AS laps ), STRUCT ( "Rotich" AS name , [ 24.7 , 25.6 , 26.9 , 26.4 ] AS laps ), STRUCT ( "Lewandowski" AS name , [ 25.0 , 25.7 , 26.3 , 27.2 ] AS laps ), STRUCT ( "Kipketer" AS name , [ 23.2 , 26.1 , 27.3 , 29.4 ] AS laps ), STRUCT ( "Berian" AS name , [ 23.7 , 26.1 , 27.0 , 29.3 ] AS laps ) ] AS participants ) SELECT race , ( SELECT name FROM UNNEST ( participants ) INNER JOIN UNNEST ( laps ) AS duration ORDER BY duration ASC LIMIT 1 ) AS runner with fastest lap FROM Races ; / ------+-------------------------+ race runner with fastest lap +------+-------------------------+ 800M Kipketer +------+------------------------- / Flattening arrays with INNER JOIN excludes rows that have empty or NULL arrays.
- WITH Combinations AS ( SELECT [ 'a' , 'b' ] AS letters , [ 1 , 2 , 3 ] AS numbers ) SELECT ARRAY ( SELECT AS STRUCT letters [ SAFE OFFSET ( index ) ] AS letter , numbers [ SAFE OFFSET ( index ) ] AS number FROM Combinations INNER JOIN UNNEST ( GENERATE ARRAY ( 0 , LEAST ( ARRAY LENGTH ( letters ), ARRAY LENGTH ( numbers )) - 1 )) AS index ORDER BY index ) AS pairs ; / ------------------------------+ pairs +------------------------------+ [{ letter: "a", number: 1 }, { letter: "b", number: 2 }] +------------------------------ / You can use input arrays of different lengths as long as the first array is equal to or less than the length of the second array.
- WITH Combinations AS ( SELECT [ 'a' , 'b' ] AS letters , [ 1 , 2 , 3 ] AS numbers ) SELECT ARRAY ( SELECT AS STRUCT letters [ SAFE OFFSET ( index ) ] AS letter , numbers [ SAFE OFFSET ( index ) ] AS number FROM Combinations INNER JOIN UNNEST ( GENERATE ARRAY ( 0 , GREATEST ( ARRAY LENGTH ( letters ), ARRAY LENGTH ( numbers )) - 1 )) AS index ORDER BY index ) AS pairs ; / -------------------------------+ pairs +-------------------------------+ [{ letter: "a", number: 1 }, { letter: "b", number: 2 }, { letter: null, number: 3 }] +------------------------------- / Building arrays of arrays GoogleSQL doesn't support building arrays of arrays directly.
- WITH Sequences AS ( SELECT 1 AS id , [ STRUCT ( 0 AS a , 1 AS b ) ] AS some numbers UNION ALL SELECT 2 AS id , [ STRUCT ( 2 AS a , 4 AS b ) ] AS some numbers UNION ALL SELECT 3 AS id , [ STRUCT ( 5 AS a , 3 AS b ), STRUCT ( 7 AS a , 4 AS b ) ] AS some numbers ) SELECT id AS matching rows FROM Sequences WHERE EXISTS ( SELECT 1 FROM UNNEST ( some numbers ) WHERE b > 3 ); / ---------------+ matching rows +---------------+ 2 3 +--------------- / Arrays and aggregation With GoogleSQL, you can aggregate values into an array using ARRAY AGG() .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Example: SELECT , struct value FROM UNNEST ( ARRAY < STRUCT < x INT64 , y STRING >> [ ( 1 , 'foo' ), ( 3 , 'bar' ) ] ) AS struct value ; / ---+-----+--------------+ x y struct value +---+-----+--------------+ 3 bar {3, bar} 1 foo {1, foo} +---+-----+-------------- / Explicit and implicit UNNEST Array unnesting can be either explicit or implicit.
- For example: WITH Coordinates AS ( SELECT [ 1 , 2 ] AS position ) SELECT results FROM Coordinates , UNNEST ( Coordinates . position ) AS results ; This example and the following examples use the array path called Coordinates.position to illustrate unnesting.
- For example: WITH Coordinates AS ( SELECT [ 1 , 2 ] AS position ) SELECT results FROM Coordinates , Coordinates . position AS results ; Tables and implicit unnesting When you use array path with implicit UNNEST , array path must be prepended with the table.
- For example: WITH Coordinates AS ( SELECT [ 1 , 2 ] AS position ) SELECT results FROM Coordinates , Coordinates . position AS results ; UNNEST and NULL values UNNEST treats NULL values as follows: NULL and empty arrays produce zero rows.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON EXTRACT ARRAY ( JSON '{"fruits":["apples","oranges","grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON EXTRACT ARRAY ( '[1,2,3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON EXTRACT ARRAY ( '[1,2,3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON EXTRACT ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON EXTRACT SCALAR ( string element , '$' ) FROM UNNEST ( JSON EXTRACT ARRAY ( '["apples","oranges","grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON EXTRACT ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON EXTRACT ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$[fruits]' ) AS string array ; SELECT JSON EXTRACT ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using single quotes and brackets, [' '] .
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON QUERY ARRAY ( JSON '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON QUERY ARRAY ( '[1, 2, 3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON QUERY ARRAY ( '[1, 2, 3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON VALUE ( string element , '$' ) FROM UNNEST ( JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON QUERY ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$."fruits"' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using double quotes: " " .
- For example: SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ 10 , NULL ] ) AS json data / -------------------+ json data +-------------------+ {"a":10,"b":null} +------------------- / SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ JSON '10' , JSON '"foo"' ] ) AS json data / --------------------+ json data +--------------------+ {"a":10,"b":"foo"} +-------------------- / SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ STRUCT ( 10 AS id , 'Red' AS color ), STRUCT ( 20 AS id , 'Blue' AS color ) ] ) AS json data / ------------------------------------------------------------+ json data +------------------------------------------------------------+ {"a":{"color":"Red","id":10},"b":{"color":"Blue","id":20}} +------------------------------------------------------------ / SELECT JSON OBJECT ( [ 'a' , 'b' ] , [ TO JSON ( 10 ), TO JSON ( [ 'foo' , 'bar' ] ) ] ) AS json data / ----------------------------+ json data +----------------------------+ {"a":10,"b":["foo","bar"]} +---------------------------- / The following query groups by id and then creates an array of keys and values from the rows with the same id : WITH Fruits AS ( SELECT 0 AS id , 'color' AS json key , 'red' AS json value UNION ALL SELECT 0 , 'fruit' , 'apple' UNION ALL SELECT 1 , 'fruit' , 'banana' UNION ALL SELECT 1 , 'ripe' , 'true' ) SELECT JSON OBJECT ( ARRAY AGG ( json key ), ARRAY AGG ( json value )) AS json data FROM Fruits GROUP BY id / ----------------------------------+ json data +----------------------------------+ {"color":"red","fruit":"apple"} {"fruit":"banana","ripe":"true"} +---------------------------------- / An error is produced if the size of the JSON keys and values arrays don't match: -- Error: The number of keys and values must match.
- SELECT JSON EXTRACT ARRAY ( '["apples", "oranges"]' ) AS json array , JSON EXTRACT STRING ARRAY ( '["apples", "oranges"]' ) AS string array ; / -----------------------+-------------------+ json array string array +-----------------------+-------------------+ ["apples", "oranges"] [apples, oranges] +-----------------------+------------------- / This extracts the items in a JSON-formatted string to a string array: -- Strips the double quotes SELECT JSON EXTRACT STRING ARRAY ( '["foo", "bar", "baz"]' , '$' ) AS string array ; / -----------------+ string array +-----------------+ [foo, bar, baz] +----------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON EXTRACT STRING ARRAY ( '[1, 2, 3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / These are equivalent: SELECT JSON EXTRACT STRING ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$[fruits]' ) AS string array ; SELECT JSON EXTRACT STRING ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; -- The queries above produce the following result: / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using single quotes and brackets: [' '] .

