---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.688Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "COLLATE clause"
feature_slug: "collate-clause"
latest_feature_date: "2022-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "collate"
  - "clause"
  - "applies"
  - "collation"
  - "specification"
  - "specific"
  - "table"
  - "column"
---

# COLLATE clause

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The COLLATE clause applies a collation specification to a specific table column in supported DDL statements.

## Extended Definition

The COLLATE clause applies a collation specification to a specific table column in supported DDL statements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- ALTER TABLE mydataset . mytable SET DEFAULT COLLATE '' Although you have updated the collation specification, your existing column, word , continues to use the previous collation specification. +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' +--------------------------------+ However, if you create a new column for your table, the new column includes the new collation specification.
- The syntax looks like this: STRING COLLATE collate specification If you have DEFAULT COLLATE collate specification assigned to the table, the collation specification for a column overrides the specification for the table. default expression : The default value assigned to the column.
- DEFAULT COLLATE collate specification : When a new table is created in the dataset, the table inherits a default collation specification unless a collation specification is explicitly specified for a table or a column .
- DEFAULT COLLATE collate specification : When a new table is created in the dataset, the table inherits a default collation specification unless a collation specification is explicitly specified for a column .

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: -- Returns FALSE 'MASSE' LIKE 'Maße' ; -- Returns FALSE COLLATE ( 'MASSE' , 'und:ci' ) LIKE '%Maße%' ; -- Returns FALSE COLLATE ( 'MASSE' , 'und:ci' ) = COLLATE ( 'Maße' , 'und:ci' ); The kana differences in Japanese are considered as tertiary or quaternary differences, and should be considered as equal in the und:ci collator with secondary strength. '\u3042' is 'あ' (hiragana) '\u30A2' is 'ア' (katakana) For example: -- Returns FALSE ' \ u3042' LIKE '% \ u30A2%' ; -- Returns TRUE COLLATE ( ' \ u3042' , 'und:ci' ) LIKE COLLATE ( '% \ u30A2%' , 'und:ci' ); -- Returns TRUE COLLATE ( ' \ u3042' , 'und:ci' ) = COLLATE ( ' \ u30A2' , 'und:ci' ); When comparing two strings, the und:ci collator compares the collation units based on the specification of the collation.
- If a collation-supported input contains no collation specification or an empty collation specification and another input contains an explicitly defined collation, the explicitly defined collation is used for all of the inputs.
- All inputs with a non-empty, explicitly defined collation specification must have the same type of collation specification, otherwise an error is thrown.
- Return Data Type BOOL Examples You can use these WITH clauses to emulate temporary tables for Words and Items in the following examples: WITH Words AS ( SELECT 'Intend' as value UNION ALL SELECT 'Secure' UNION ALL SELECT 'Clarity' UNION ALL SELECT 'Peace' UNION ALL SELECT 'Intend' ) SELECT FROM Words ; / ----------+ value +----------+ Intend Secure Clarity Peace Intend +---------- / WITH Items AS ( SELECT STRUCT ( 'blue' AS color , 'round' AS shape ) AS info UNION ALL SELECT STRUCT ( 'blue' , 'square' ) UNION ALL SELECT STRUCT ( 'red' , 'round' ) ) SELECT FROM Items ; / ----------------------------+ info +----------------------------+ {blue color, round shape} {blue color, square shape} {red color, round shape} +---------------------------- / Example with IN and an expression: SELECT FROM Words WHERE value IN ( 'Intend' , 'Secure' ); / ----------+ value +----------+ Intend Secure Intend +---------- / Example with NOT IN and an expression: SELECT FROM Words WHERE value NOT IN ( 'Intend' ); / ----------+ value +----------+ Secure Clarity Peace +---------- / Example with IN , a scalar subquery, and an expression: SELECT FROM Words WHERE value IN (( SELECT 'Intend' ), 'Clarity' ); / ----------+ value +----------+ Intend Clarity Intend +---------- / Example with IN and an UNNEST operation: SELECT FROM Words WHERE value IN UNNEST ( [ 'Secure' , 'Clarity' ] ); / ----------+ value +----------+ Secure Clarity +---------- / Example with IN and a struct: SELECT ( SELECT AS STRUCT Items . info ) as item FROM Items WHERE ( info . shape , info . color ) IN (( 'round' , 'blue' )); / ------------------------------------+ item +------------------------------------+ { {blue color, round shape} info } +------------------------------------ / IS operators IS operators return TRUE or FALSE for the condition they are testing.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- WITH Words AS ( SELECT word FROM UNNEST ( [ 'foo' , 'bar' , 'baz' , 'giraffe' , 'llama' ] ) AS word ) SELECT CODE POINTS TO STRING ( [ code point ] ) AS letter , COUNT ( ) AS letter count FROM Words , UNNEST ( TO CODE POINTS ( word )) AS code point GROUP BY 1 ORDER BY 2 DESC ; / --------+--------------+ letter letter count +--------+--------------+ a 5 f 3 r 2 b 2 l 2 o 2 g 1 z 1 e 1 m 1 i 1 +--------+-------------- / COLLATE COLLATE ( value , collate specification ) Takes a STRING and a collation specification .
- COLLATE Combines a STRING value and a collation specification into a collation specification-supported STRING value.
- If collate specification is empty, returns a value with collation removed from the STRING .
- SELECT CONTAINS SUBSTR ( 'hello' , NULL ) AS result ; -- Throws an error The following examples reference a table called Recipes that you can emulate with a WITH clause like this: WITH Recipes AS ( SELECT 'Blueberry pancakes' as Breakfast , 'Egg salad sandwich' as Lunch , 'Potato dumplings' as Dinner UNION ALL SELECT 'Potato pancakes' , 'Toasted cheese sandwich' , 'Beef stroganoff' UNION ALL SELECT 'Ham scramble' , 'Steak avocado salad' , 'Tomato pasta' UNION ALL SELECT 'Avocado toast' , 'Tomato soup' , 'Blueberry salmon' UNION ALL SELECT 'Corned beef hash' , 'Lentil potato soup' , 'Glazed ham' ) SELECT FROM Recipes ; / -------------------+-------------------------+------------------+ Breakfast Lunch Dinner +-------------------+-------------------------+------------------+ Bluberry pancakes Egg salad sandwich Potato dumplings Potato pancakes Toasted cheese sandwich Beef stroganoff Ham scramble Steak avocado salad Tomato pasta Avocado toast Tomato soup Blueberry samon Corned beef hash Lentil potato soup Glazed ham +-------------------+-------------------------+------------------ / The following query searches across all columns of the Recipes table for the value toast and returns the rows that contain this value.

