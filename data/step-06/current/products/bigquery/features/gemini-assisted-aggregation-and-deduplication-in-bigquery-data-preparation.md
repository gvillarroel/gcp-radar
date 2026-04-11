---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.365Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-assisted aggregation and deduplication in BigQuery Data Preparation"
feature_slug: "gemini-assisted-aggregation-and-deduplication-in-bigquery-data-preparation"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "deduplicating tables with Gemini"
  - "aggregation and dedupe"
  - "Gemini-assisted deduplication"
  - "Gemini dedupe"
  - "aggregating with Gemini"
  - "Gemini-assisted aggregation"
  - "BigQuery Data Preparation"
  - "Gemini Data Preparation"
---

# Gemini-assisted aggregation and deduplication in BigQuery Data Preparation

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Data Preparation can aggregate and deduplicate table data with Gemini assistance.

## Extended Definition

BigQuery Data Preparation includes a Gemini-assisted capability that provides context-aware recommendations for join operations, helping users improve how table data is prepared. The provided excerpt only documents this recommendation support and does not explicitly confirm Gemini-assisted aggregation or deduplication, so that specific behavior is not directly evidenced here.

## Evidence Summary

The cited release note confirms Gemini-powered context-aware join recommendations in BigQuery Data Preparation and mentions updated IAM guidance for using Data Preparation.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

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

