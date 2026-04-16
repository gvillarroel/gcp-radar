---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.478Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Collation support for STRUCT comparisons"
feature_slug: "collation-support-for-struct-comparisons"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "collation"
  - "struct"
  - "comparisons"
  - "bigquery"
  - "supports"
  - "case"
---

# Collation support for STRUCT comparisons

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery collation supports STRUCT comparisons with =, !=, IN, and CASE.

## Extended Definition

BigQuery collation supports STRUCT comparisons with =, !=, IN, and CASE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String comparisons Yes However, string comparisons are case-insensitive in collations that are case-insensitive.
- ALL AND ANY ARRAY AS ASC ASSERT ROWS MODIFIED AT BETWEEN BY CASE CAST COLLATE CONTAINS CREATE CROSS CUBE CURRENT DEFAULT DEFINE DESC DISTINCT ELSE END ENUM ESCAPE EXCEPT EXCLUDE EXISTS EXTRACT FALSE FETCH FOLLOWING FOR FROM FULL GRAPH TABLE GROUP GROUPING GROUPS HASH HAVING IF IGNORE IN INNER INTERSECT INTERVAL INTO IS JOIN LATERAL LEFT LIKE LIMIT LOOKUP MERGE NATURAL NEW NO NOT NULL NULLS OF ON OR ORDER OUTER OVER PARTITION PRECEDING PROTO QUALIFY RANGE RECURSIVE RESPECT RIGHT ROLLUP ROWS SELECT SET SOME STRUCT TABLESAMPLE THEN TO TREAT TRUE UNBOUNDED UNION UNNEST USING WHEN WHERE WINDOW WITH WITHIN Terminating semicolons You can optionally use a terminating semicolon ( ; ) when you submit a query string statement through an Application Programming Interface (API).
- Home Documentation Data analytics BigQuery Reference Send feedback Lexical structure and syntax Stay organized with collections Save and categorize content based on your preferences.
- The table name is unquoted and isn't a valid -- dashed identifier, as the part after the dash is neither a number nor -- an identifier starting with a letter or an underscore. mytable - 287a -- Valid table path. my - project . mydataset . mytable -- Valid table name. my - table -- Invalid table path because the dash isn't in the first part -- of the path. myproject . mydataset . my - table -- Invalid table path because a dataset name can't contain dashes. my - dataset . mytable Path expressions A path expression describes how to navigate to an object in a graph of objects and generally follows this structure: path: [path expression][. ...] path expression: [first part]/subsequent part[ { / : - } subsequent part ][...] first part: { unquoted identifier quoted identifier } subsequent part: { unquoted identifier quoted identifier number } path : A graph of one or more objects. path expression : An object in a graph of objects. first part : A path expression can start with a quoted or unquoted identifier.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The STRING is formatted as follows: Type %t %T NULL of any type NULL NULL INT64 123 123 NUMERIC 123.0 (always with .0) NUMERIC "123.0" FLOAT64 123.0 (always with .0) 123e+10 inf -inf NaN 123.0 (always with .0) 123e+10 CAST("inf" AS <type>) CAST("-inf" AS <type>) CAST("nan" AS <type>) STRING unquoted string value quoted string literal BYTES unquoted escaped bytes e.g., abc\x01\x02 quoted bytes literal e.g., b"abc\x01\x02" BOOL boolean value boolean value DATE 2011-02-03 DATE "2011-02-03" TIMESTAMP 2011-02-03 04:05:06+00 TIMESTAMP "2011-02-03 04:05:06+00" INTERVAL 1-2 3 4:5:6.789 INTERVAL "1-2 3 4:5:6.789" YEAR TO SECOND ARRAY [value, value, ...] where values are formatted with %t [value, value, ...] where values are formatted with %T STRUCT (value, value, ...) where fields are formatted with %t (value, value, ...) where fields are formatted with %T Special cases: Zero fields: STRUCT() One field: STRUCT(value) JSON one-line printable string representing JSON. { "name" : "apple" , "stock" : 3 } one-line printable string representing a JSON literal.
- NORMALIZE AND CASEFOLD supports four optional normalization modes: Value Name Description NFC Normalization Form Canonical Composition Decomposes and recomposes characters by canonical equivalence.
- GoogleSQL for BigQuery supports string functions.
- This function supports specifying collation .

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- This is equivalent to: IN ( SELECT element FROM UNNEST ( array expression ) AS element ) This operator supports collation , but these limitations apply: [NOT] IN UNNEST doesn't support collation.
- This operator supports collation , but caveats apply: Each % character in pattern represents an arbitrary string specifier .
- This operator supports specifying collation .

