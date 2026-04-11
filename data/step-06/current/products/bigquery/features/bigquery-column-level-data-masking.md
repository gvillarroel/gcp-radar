---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.706Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery column-level data masking"
feature_slug: "bigquery-column-level-data-masking"
latest_feature_date: "2022-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "authorized access to masked columns"
  - "masked column values"
  - "group-based column masking"
  - "policy tags masking"
  - "column-level data masking"
  - "column masking policy"
  - "data masking policy"
  - "column masking"
---

# BigQuery column-level data masking

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports column-level data masking to selectively obscure column values for specific user groups while preserving query access.

## Extended Definition

BigQuery column-level data masking is represented as a DDL-defined data policy where the policy `data policy type` is set to `DATA MASKING POLICY`. That policy includes a `masking expression` that can use a predefined masking rule or a custom masking routine.

## Evidence Summary

The referenced DDL documentation shows BigQuery supports a data policy type for data masking and requires a masking expression, but does not, in the provided excerpts, detail group-based access behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- The following options are supported: NAME VALUE Details data policy type STRING Set it to DATA MASKING POLICY . masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- DATA MASKING POLICY type should come with masking expression set. masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- The following options are supported: NAME VALUE Details data policy type STRING The supported values are DATA MASKING POLICY and RAW DATA ACCESS POLICY .

