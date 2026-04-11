---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.467Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Preparation with Gemini"
feature_slug: "bigquery-data-preparation-with-gemini"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "context-aware transformation suggestions"
  - "data cleansing recommendations"
  - "pre-analysis data transformation"
  - "Gemini transformation recommendations"
  - "AI transform recommendations"
  - "BigQuery Data Preparation"
  - "Data Preparation Gemini"
---

# BigQuery Data Preparation with Gemini

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Introduces context-aware transformation recommendations from Gemini to help cleanse data before analysis.

## Extended Definition

BigQuery Data Preparation with Gemini is a data-preparation capability in BigQuery that uses Gemini to provide context-aware transformation recommendations, explicitly including context-aware join operation recommendations. The feature also supports representing data preparations in SQLX and pipe-query syntax to simplify CI/CD code review workflows, and it can be accessed via BigQuery Studio User and Gemini for Google Cloud User roles (with needed data access) instead of requiring BigQuery Data Editor and Service Usage Consumer roles.

## Evidence Summary

The BigQuery release notes provide evidence that this feature includes Gemini-powered context-aware recommendations and also document IAM and formatting updates tied to Data Preparation.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2025 Libraries Go 1.66.1 (2025-02-03) Bug Fixes bigquery: Move MaxStaleness field to table level ( #10066 ) ( 164492d ) Libraries Go 1.66.2 (2025-02-04) Bug Fixes bigquery: Broken github.com/envoyproxy/go-control-plane/envoy dep ( #11556 ) ( e70d63b ), refs #11542 Feature BigQuery data preparation provides context-aware join operation recommendations from Gemini .
- BigQuery data preparation no longer requires that you have the permissions granted by the following IAM roles: BigQuery Data Editor ( roles/bigquery.dataEditor ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about the required roles, see Manage data preparations .
- Change You can get the required permissions to use BigQuery data preparation through the BigQuery Studio User ( roles/bigquery.studioUser ) and Gemini for Google Cloud User ( roles/cloudaicompanion.user ) roles, and permission to access the data you're preparing.
- Change BigQuery data preparations are now represented in the SQLX format and in the pipe query syntax to simplify the CI/CD code review process.

