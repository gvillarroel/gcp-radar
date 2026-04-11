---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.560Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "quantified LIKE operator"
feature_slug: "quantified-like-operator"
latest_feature_date: "2024-04-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "quantified pattern matching"
  - "quantified LIKE"
  - "ANY/SOME/ALL LIKE"
  - "pattern set matching"
  - "LIKE SOME"
  - "SOME LIKE"
  - "LIKE ANY"
  - "ANY LIKE"
---

# quantified LIKE operator

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery introduced the quantified LIKE operator to match values against one or more patterns using ANY, SOME, and ALL.

## Extended Definition

The quantified LIKE operator in BigQuery evaluates a single search value against multiple patterns using the syntax `search value [ NOT ] LIKE quantifier patterns`, where quantifier is `ANY`, `SOME`, or `ALL`. Its pattern input can be either a parenthesized expression list or an `UNNEST(array_expression)`, and it is supported for both `STRING` and `BYTES` values. The operator supports `NOT LIKE` form and includes documented semantic examples for match behavior with `ANY`/`SOME` and `ALL`, including NULL-result edge cases and collation-aware matching.

## Evidence Summary

The cited BigQuery operators page defines the quantified LIKE grammar and examples showing how `[NOT] LIKE` with ANY/SOME/ALL is used and behaves with multiple patterns, including NULL and collation examples.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly lists a "Quantified LIKE" operator and describes it as matching a value against several patterns.

Evidence snippets:
- Clarity and security. +------------------------ / The following queries illustrate some of the semantic rules for the quantified LIKE operator: SELECT NULL LIKE ANY ( 'a' , 'b' ), -- NULL 'a' LIKE ANY ( 'a' , 'c' ), -- TRUE 'a' LIKE ANY ( 'b' , 'c' ), -- FALSE 'a' LIKE ANY ( 'a' , NULL ), -- TRUE 'a' LIKE ANY ( 'b' , NULL ), -- NULL NULL NOT LIKE ANY ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ANY ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE ANY ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE ANY ( 'a' , NULL ), -- NULL 'a' NOT LIKE ANY ( 'b' , NULL ); -- TRUE SELECT NULL LIKE SOME ( 'a' , 'b' ), -- NULL 'a' LIKE SOME ( 'a' , 'c' ), -- TRUE 'a' LIKE SOME ( 'b' , 'c' ), -- FALSE 'a' LIKE SOME ( 'a' , NULL ), -- TRUE 'a' LIKE SOME ( 'b' , NULL ), -- NULL NULL NOT LIKE SOME ( 'a' , 'b' ), -- NULL 'a' NOT LIKE SOME ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE SOME ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE SOME ( 'a' , NULL ), -- NULL 'a' NOT LIKE SOME ( 'b' , NULL ); -- TRUE SELECT NULL LIKE ALL ( 'a' , 'b' ), -- NULL 'a' LIKE ALL ( 'a' , '%a%' ), -- TRUE 'a' LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' LIKE ALL ( 'a' , NULL ), -- NULL 'a' LIKE ALL ( 'b' , NULL ), -- FALSE NULL NOT LIKE ALL ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ALL ( 'b' , 'c' ), -- TRUE 'a' NOT LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' NOT LIKE ALL ( 'a' , NULL ), -- FALSE 'a' NOT LIKE ALL ( 'b' , NULL ); -- NULL The following queries illustrate some of the semantic rules for the quantified LIKE operator and collation: SELECT COLLATE ( 'a' , 'und:ci' ) LIKE ALL ( 'a' , 'A' ), -- TRUE 'a' LIKE ALL ( COLLATE ( 'a' , 'und:ci' ), 'A' ), -- TRUE 'a' LIKE ALL ( '%A%' , COLLATE ( 'a' , 'und:ci' )); -- TRUE -- ERROR: BYTES and STRING values can't be used together.
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- Clarity and security. +------------------------ / The following example checks to see if the Intend% or %intention% pattern exists in a value and produces that value if either pattern is found: SELECT FROM Words WHERE value LIKE ANY ( 'Intend%' , '%intention%' ); / ------------------------+ value +------------------------+ Intend with clarity.
- Not equal Binary [NOT] LIKE STRING and BYTES Value does [not] match the pattern specified Binary Quantified LIKE STRING and BYTES Checks a search value for matches against several patterns.

