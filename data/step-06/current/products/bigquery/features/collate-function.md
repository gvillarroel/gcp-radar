---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.688Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "COLLATE function"
feature_slug: "collate-function"
latest_feature_date: "2022-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "collate"
  - "returns"
  - "string"
  - "value"
  - "collation"
  - "specification"
  - "applied"
---

# COLLATE function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The COLLATE function returns a STRING value with a collation specification applied.

## Extended Definition

The COLLATE function returns a STRING value with a collation specification applied.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If collate specification is empty, returns a value with collation removed from the STRING .
- WITH Words AS ( SELECT word FROM UNNEST ( [ 'foo' , 'bar' , 'baz' , 'giraffe' , 'llama' ] ) AS word ) SELECT CODE POINTS TO STRING ( [ code point ] ) AS letter , COUNT ( ) AS letter count FROM Words , UNNEST ( TO CODE POINTS ( word )) AS code point GROUP BY 1 ORDER BY 2 DESC ; / --------+--------------+ letter letter count +--------+--------------+ a 5 f 3 r 2 b 2 l 2 o 2 g 1 z 1 e 1 m 1 i 1 +--------+-------------- / COLLATE COLLATE ( value , collate specification ) Takes a STRING and a collation specification .
- COLLATE Combines a STRING value and a collation specification into a collation specification-supported STRING value.
- Returns a STRING with a collation specification.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The syntax looks like this: STRING COLLATE collate specification If you have DEFAULT COLLATE collate specification assigned to the table, the collation specification for a column overrides the specification for the table. default expression : The default value assigned to the column.
- For example, collation is added to characters when you create the mytable b table in the mydataset dataset: CREATE TABLE mydataset . mytable b ( amount INT64 , characters STRING ) +--------------------------------------+ mydataset.mytable b amount INT64 characters STRING COLLATE 'und:ci' +--------------------------------------+ However, although you have updated the collation specification for the dataset, your existing table, mytable a , continues to use the previous collation specification.
- ALTER TABLE mydataset . mytable SET DEFAULT COLLATE '' Although you have updated the collation specification, your existing column, word , continues to use the previous collation specification. +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' +--------------------------------+ However, if you create a new column for your table, the new column includes the new collation specification.
- The resulting table has this structure: +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' +--------------------------------+ At a later time, you decide to change the collation specification for your table.

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- For example: -- Returns FALSE 'MASSE' LIKE 'Maße' ; -- Returns FALSE COLLATE ( 'MASSE' , 'und:ci' ) LIKE '%Maße%' ; -- Returns FALSE COLLATE ( 'MASSE' , 'und:ci' ) = COLLATE ( 'Maße' , 'und:ci' ); The kana differences in Japanese are considered as tertiary or quaternary differences, and should be considered as equal in the und:ci collator with secondary strength. '\u3042' is 'あ' (hiragana) '\u30A2' is 'ア' (katakana) For example: -- Returns FALSE ' \ u3042' LIKE '% \ u30A2%' ; -- Returns TRUE COLLATE ( ' \ u3042' , 'und:ci' ) LIKE COLLATE ( '% \ u30A2%' , 'und:ci' ); -- Returns TRUE COLLATE ( ' \ u3042' , 'und:ci' ) = COLLATE ( ' \ u30A2' , 'und:ci' ); When comparing two strings, the und:ci collator compares the collation units based on the specification of the collation.
- Clarity and security. +------------------------ / The following queries illustrate some of the semantic rules for the quantified LIKE operator: SELECT NULL LIKE ANY ( 'a' , 'b' ), -- NULL 'a' LIKE ANY ( 'a' , 'c' ), -- TRUE 'a' LIKE ANY ( 'b' , 'c' ), -- FALSE 'a' LIKE ANY ( 'a' , NULL ), -- TRUE 'a' LIKE ANY ( 'b' , NULL ), -- NULL NULL NOT LIKE ANY ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ANY ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE ANY ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE ANY ( 'a' , NULL ), -- NULL 'a' NOT LIKE ANY ( 'b' , NULL ); -- TRUE SELECT NULL LIKE SOME ( 'a' , 'b' ), -- NULL 'a' LIKE SOME ( 'a' , 'c' ), -- TRUE 'a' LIKE SOME ( 'b' , 'c' ), -- FALSE 'a' LIKE SOME ( 'a' , NULL ), -- TRUE 'a' LIKE SOME ( 'b' , NULL ), -- NULL NULL NOT LIKE SOME ( 'a' , 'b' ), -- NULL 'a' NOT LIKE SOME ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE SOME ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE SOME ( 'a' , NULL ), -- NULL 'a' NOT LIKE SOME ( 'b' , NULL ); -- TRUE SELECT NULL LIKE ALL ( 'a' , 'b' ), -- NULL 'a' LIKE ALL ( 'a' , '%a%' ), -- TRUE 'a' LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' LIKE ALL ( 'a' , NULL ), -- NULL 'a' LIKE ALL ( 'b' , NULL ), -- FALSE NULL NOT LIKE ALL ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ALL ( 'b' , 'c' ), -- TRUE 'a' NOT LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' NOT LIKE ALL ( 'a' , NULL ), -- FALSE 'a' NOT LIKE ALL ( 'b' , NULL ); -- NULL The following queries illustrate some of the semantic rules for the quantified LIKE operator and collation: SELECT COLLATE ( 'a' , 'und:ci' ) LIKE ALL ( 'a' , 'A' ), -- TRUE 'a' LIKE ALL ( COLLATE ( 'a' , 'und:ci' ), 'A' ), -- TRUE 'a' LIKE ALL ( '%A%' , COLLATE ( 'a' , 'und:ci' )); -- TRUE -- ERROR: BYTES and STRING values can't be used together.
- Return type BOOL Examples The following examples illustrate how you can check to see if the string in the first operand matches a pattern specified by the second operand. -- Returns TRUE SELECT 'apple' LIKE 'a%' ; -- Returns FALSE SELECT '%a' LIKE 'apple' ; -- Returns FALSE SELECT 'apple' NOT LIKE 'a%' ; -- Returns TRUE SELECT '%a' NOT LIKE 'apple' ; -- Produces an error SELECT NULL LIKE 'a%' ; -- Produces an error SELECT 'apple' LIKE NULL ; The following example illustrates how to search multiple patterns in an array to find a match with the LIKE operator: WITH Words AS ( SELECT 'Intend with clarity.' as value UNION ALL SELECT 'Secure with intention.' UNION ALL SELECT 'Clarity and security.' ) SELECT value FROM Words WHERE EXISTS ( SELECT value FROM UNNEST ( [ '%ity%' , '%and%' ] ) AS pattern WHERE value LIKE pattern ); / ------------------------+ value +------------------------+ Intend with clarity.

