---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.625Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery array subscript operator index access"
feature_slug: "bigquery-array-subscript-operator-index-access"
latest_feature_date: "2023-09-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arrays"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "SAFE_OFFSET"
  - "ORDINAL access"
  - "OFFSET access"
  - "array subscript operator"
  - "array indexing"
  - "array[index] syntax"
  - "array[] operator"
---

# BigQuery array subscript operator index access

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery SQL now supports direct array value access by index with the array subscript operator.

## Extended Definition

BigQuery supports an array subscript operator that retrieves a single value from an array using bracket syntax: `array_expression[index]`. It also supports positional subscript specifiers `OFFSET`, `ORDINAL`, and their safe variants (`SAFE OFFSET`, `SAFE ORDINAL`) to control bounds behavior, where safe variants return `NULL` when the position is out of range and non-safe variants produce an error. In positional access, index and `OFFSET` are zero-based (e.g., `0`), while `ORDINAL` is one-based (e.g., `1`).

## Evidence Summary

The Arrays guide provides practical array subscript examples and safe access behavior, while the Operators reference page defines the operator syntax, supported position keywords, and out-of-range semantics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents direct array element access using brackets and OFFSET/ORDINAL index forms with examples.

Evidence snippets:
- WITH Combinations AS ( SELECT [ 'a' , 'b' ] AS letters , [ 1 , 2 , 3 ] AS numbers ) SELECT ARRAY ( SELECT AS STRUCT letters [ SAFE OFFSET ( index ) ] AS letter , numbers [ SAFE OFFSET ( index ) ] AS number FROM Combinations INNER JOIN UNNEST ( GENERATE ARRAY ( 0 , LEAST ( ARRAY LENGTH ( letters ), ARRAY LENGTH ( numbers )) - 1 )) AS index ORDER BY index ) AS pairs ; / ------------------------------+ pairs +------------------------------+ [{ letter: "a", number: 1 }, { letter: "b", number: 2 }] +------------------------------ / You can use input arrays of different lengths as long as the first array is equal to or less than the length of the second array.
- WITH Combinations AS ( SELECT [ 'a' , 'b' ] AS letters , [ 1 , 2 , 3 ] AS numbers ) SELECT ARRAY ( SELECT AS STRUCT letters [ SAFE OFFSET ( index ) ] AS letter , numbers [ SAFE OFFSET ( index ) ] AS number FROM Combinations INNER JOIN UNNEST ( GENERATE ARRAY ( 0 , GREATEST ( ARRAY LENGTH ( letters ), ARRAY LENGTH ( numbers )) - 1 )) AS index ORDER BY index ) AS pairs ; / -------------------------------+ pairs +-------------------------------+ [{ letter: "a", number: 1 }, { letter: "b", number: 2 }, { letter: null, number: 3 }] +------------------------------- / Building arrays of arrays GoogleSQL doesn't support building arrays of arrays directly.
- The query returns NULL values for any empty arrays instead of an error: SELECT some numbers , some numbers [ SAFE OFFSET ( ARRAY LENGTH ( some numbers ) - 1 ) ] AS last element FROM Sequences ; / --------------------+--------------+ some numbers last element +--------------------+--------------+ [0, 1, 1, 2, 3, 5] 5 [2, 4, 8, 16, 32] 32 [] NULL +--------------------+-------------- / ARRAY LENGTH(array) returns the number of elements in the array.
- To handle empty arrays when accessing first and last elements, you can use the ARRAY LENGTH function within a SAFE OFFSET of -1 .

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- SELECT STRUCT ( STRUCT ( 'Yonge Street' AS street , 'Canada' AS country ) AS address ). address . country / ---------+ country +---------+ Canada +--------- / Array subscript operator Note: Syntax characters enclosed in double quotes ( "" ) are literal and required. array expression "[" array subscript specifier "]" array subscript specifier : { index position keyword ( index ) } position keyword : { OFFSET SAFE OFFSET ORDINAL SAFE ORDINAL } Description Gets a value from an array at a specific position.
- SELECT [ "coffee" , "tea" , "milk" ] AS item array , [ "coffee" , "tea" , "milk" ][ 0 ] AS item index , [ "coffee" , "tea" , "milk" ][ OFFSET ( 0 ) ] AS item offset , [ "coffee" , "tea" , "milk" ][ ORDINAL ( 1 ) ] AS item ordinal , [ "coffee" , "tea" , "milk" ][ SAFE OFFSET ( 6 ) ] AS item safe offset / ---------------------+------------+-------------+--------------+------------------+ item array item index item offset item ordinal item safe offset +---------------------+------------+-------------+--------------+------------------+ [coffee, tea, milk] coffee coffee coffee NULL +----------------------------------+-------------+--------------+------------------ / When you reference an index that's out of range in an array, and a positional keyword that begins with SAFE isn't included, an error is produced.
- Order of Precedence Operator Input Data Types Name Operator Arity 1 Field access operator STRUCT JSON Field access operator Binary Array subscript operator ARRAY Array position.
- Examples In following query, the array subscript operator is used to return values at specific position in item array .

