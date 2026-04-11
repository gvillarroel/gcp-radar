---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.592Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery custom data masking"
feature_slug: "bigquery-custom-data-masking"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "salt-based hashing"
  - "salt-based hash"
  - "user-defined masking routines"
  - "CREATE MASKING POLICY"
  - "MASKING routine"
  - "masking routine"
  - "custom data masking"
  - "custom masking"
---

# BigQuery custom data masking

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Introduces custom data masking in BigQuery with user-defined masking routines, including options such as salt-based hashing.

## Extended Definition

In BigQuery, a DATA MASKING POLICY is a DDL-defined data policy that includes a `masking expression`, which may reference either a predefined masking rule or a custom masking routine. When a data policy uses a custom masking routine, creating that policy requires the caller to have the necessary routine permissions.

## Evidence Summary

The cited BigQuery DDL reference confirms that data masking policies can use custom masking routines as masking expressions, and that referencing a custom masking routine requires routine permissions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- The following options are supported: NAME VALUE Details data policy type STRING Set it to DATA MASKING POLICY . masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- DATA MASKING POLICY type should come with masking expression set. masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- If you are creating a data policy that references a custom masking routine, you also need routine permissions .

