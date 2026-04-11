---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.389Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation array unnesting"
feature_slug: "bigquery-data-preparation-array-unnesting"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
keywords:
  - "unnest arrays"
  - "array unnesting"
  - "array flatten"
  - "array unnest"
  - "array element expansion"
  - "one row per array element"
  - "array flattening"
  - "data preparation"
---

# BigQuery data preparation array unnesting

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds support in BigQuery data preparation for unnesting arrays into one row per array element.

## Extended Definition

BigQuery data preparation is an AI-assisted feature in BigQuery that provides context-aware, AI-generated transformation recommendations (including join-related recommendations) to help cleanse and transform data before analysis, and it is accessed through the BigQuery data preparation editor. The documentation excerpts confirm role and permission requirements (for example, BigQuery Studio User and Gemini for Google Cloud User roles) as part of using this feature, but they do not explicitly document array unnesting behavior.

## Evidence Summary

The cited Google Cloud pages describe BigQuery data preparation capabilities and IAM/access context, but they do not provide explicit evidence that the feature performs array unnesting or one-row-per-element expansion.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2025 Libraries Go 1.66.1 (2025-02-03) Bug Fixes bigquery: Move MaxStaleness field to table level ( #10066 ) ( 164492d ) Libraries Go 1.66.2 (2025-02-04) Bug Fixes bigquery: Broken github.com/envoyproxy/go-control-plane/envoy dep ( #11556 ) ( e70d63b ), refs #11542 Feature BigQuery data preparation provides context-aware join operation recommendations from Gemini .
- BigQuery data preparation no longer requires that you have the permissions granted by the following IAM roles: BigQuery Data Editor ( roles/bigquery.dataEditor ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about the required roles, see Manage data preparations .
- Change You can get the required permissions to use BigQuery data preparation through the BigQuery Studio User ( roles/bigquery.studioUser ) and Gemini for Google Cloud User ( roles/cloudaicompanion.user ) roles, and permission to access the data you're preparing.
- Feature On the Scheduling page, you can now view existing schedules, create new schedules, and perform other actions for data preparations, notebooks, BigQuery pipelines, and scheduled queries.

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Data preparation in BigQuery gives you context aware, AI-generated transformation recommendations to cleanse data for analysis.
- To prepare data for analysis, in the Create new list, select Data preparation .
- For more information, see Open the data preparation editor in BigQuery .

