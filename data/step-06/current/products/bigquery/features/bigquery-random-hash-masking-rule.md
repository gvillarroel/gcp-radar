---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.345Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery RANDOM_HASH masking rule"
feature_slug: "bigquery-random-hash-masking-rule"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "salted hash rule"
  - "salted hashing"
  - "SHA-256"
  - "predefined masking rule"
  - "masking rule"
  - "RANDOM_HASH()"
  - "RANDOM_HASH"
  - "data policy masking"
---

# BigQuery RANDOM_HASH masking rule

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery added a predefined RANDOM_HASH masking rule that uses salted hashing to provide stronger security than the standard SHA-256 hash rule.

## Extended Definition

BigQuery supports a predefined data masking rule named RANDOM_HASH that can be specified in a DATA MASKING POLICY as the masking expression for a column. The rule returns a salted hash of the column value and is described as providing stronger security than the standard Hash (SHA-256) masking rule. Google’s release notes indicate this rule was added on January 29, 2026.

## Evidence Summary

The release note explicitly introduces RANDOM_HASH as a new predefined masking rule and explains its salted-hash behavior compared with SHA-256, while the DDL reference confirms predefined masking rules are used via masking expressions in DATA MASKING POLICY definitions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- January 29, 2026 Feature BigQuery now supports a RANDOM HASH predefined masking rule.
- This rule returns a hash of the column's value using a salted hash algorithm, and it provides stronger security than the standard Hash (SHA-256) rule.
- For more information, see Data masking rules .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- The following options are supported: NAME VALUE Details data policy type STRING Set it to DATA MASKING POLICY . masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- DATA MASKING POLICY type should come with masking expression set. masking expression STRING Specifies the predefined masking rule or a custom masking routine .

