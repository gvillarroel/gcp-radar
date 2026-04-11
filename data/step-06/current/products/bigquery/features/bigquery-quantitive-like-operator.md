---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.638Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery quantitive LIKE operator"
feature_slug: "bigquery-quantitive-like-operator"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "quantitative LIKE operator"
  - "quantitative LIKE"
  - "LIKE ANY/SOME/ALL"
  - "LIKE SOME"
  - "matching mode"
  - "LIKE ANY"
  - "LIKE ALL"
---

# BigQuery quantitive LIKE operator

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced the quantitive LIKE operator in preview with LIKE ANY, LIKE SOME, and LIKE ALL matching modes.

## Extended Definition

BigQuery introduced the quantitive LIKE operator in preview with LIKE ANY, LIKE SOME, and LIKE ALL matching modes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: It confirms the existence and behavior of quantified LIKE matching, but does not provide the ANY/SOME/ALL or preview-specific details.

Evidence snippets:
- Clarity and security. +------------------------ / The following queries illustrate some of the semantic rules for the quantified LIKE operator: SELECT NULL LIKE ANY ( 'a' , 'b' ), -- NULL 'a' LIKE ANY ( 'a' , 'c' ), -- TRUE 'a' LIKE ANY ( 'b' , 'c' ), -- FALSE 'a' LIKE ANY ( 'a' , NULL ), -- TRUE 'a' LIKE ANY ( 'b' , NULL ), -- NULL NULL NOT LIKE ANY ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ANY ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE ANY ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE ANY ( 'a' , NULL ), -- NULL 'a' NOT LIKE ANY ( 'b' , NULL ); -- TRUE SELECT NULL LIKE SOME ( 'a' , 'b' ), -- NULL 'a' LIKE SOME ( 'a' , 'c' ), -- TRUE 'a' LIKE SOME ( 'b' , 'c' ), -- FALSE 'a' LIKE SOME ( 'a' , NULL ), -- TRUE 'a' LIKE SOME ( 'b' , NULL ), -- NULL NULL NOT LIKE SOME ( 'a' , 'b' ), -- NULL 'a' NOT LIKE SOME ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE SOME ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE SOME ( 'a' , NULL ), -- NULL 'a' NOT LIKE SOME ( 'b' , NULL ); -- TRUE SELECT NULL LIKE ALL ( 'a' , 'b' ), -- NULL 'a' LIKE ALL ( 'a' , '%a%' ), -- TRUE 'a' LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' LIKE ALL ( 'a' , NULL ), -- NULL 'a' LIKE ALL ( 'b' , NULL ), -- FALSE NULL NOT LIKE ALL ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ALL ( 'b' , 'c' ), -- TRUE 'a' NOT LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' NOT LIKE ALL ( 'a' , NULL ), -- FALSE 'a' NOT LIKE ALL ( 'b' , NULL ); -- NULL The following queries illustrate some of the semantic rules for the quantified LIKE operator and collation: SELECT COLLATE ( 'a' , 'und:ci' ) LIKE ALL ( 'a' , 'A' ), -- TRUE 'a' LIKE ALL ( COLLATE ( 'a' , 'und:ci' ), 'A' ), -- TRUE 'a' LIKE ALL ( '%A%' , COLLATE ( 'a' , 'und:ci' )); -- TRUE -- ERROR: BYTES and STRING values can't be used together.
- Clarity and security. +------------------------ / The following example checks to see if the Intend% or %intention% pattern exists in a value and produces that value if either pattern is found: SELECT FROM Words WHERE value LIKE ANY ( 'Intend%' , '%intention%' ); / ------------------------+ value +------------------------+ Intend with clarity.
- For example: SELECT FROM Words WHERE value LIKE ANY UNNEST ( [ '%ion%' , '%and%' ] ); / ------------------------+ value +------------------------+ Secure with intention.
- Example with LIKE ALL : SELECT FROM Words WHERE value LIKE ALL ( '%ity%' ); / -----------------------+ value +-----------------------+ Intend with clarity.

