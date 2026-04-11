---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.738Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Column-level data masking"
feature_slug: "column-level-data-masking"
latest_feature_date: "2022-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "data masking policy tag"
  - "dynamic data masking"
  - "dynamic masking"
  - "policy tags masking"
  - "column-level data masking"
  - "column-level security"
  - "masking expression"
  - "data masking policies"
---

# Column-level data masking

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports column-level data masking to selectively obscure column data for different user groups while preserving access to the column itself.

## Extended Definition

BigQuery exposes a DDL-based **data policy** option with a policy type of `DATA MASKING POLICY` for defining how column data should be masked. The policy requires a `masking expression`, which can be either a predefined masking rule or a custom masking routine.

## Evidence Summary

The referenced BigQuery DDL documentation confirms supported policy metadata for masking, including the `DATA MASKING POLICY` type and a required masking expression.

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

