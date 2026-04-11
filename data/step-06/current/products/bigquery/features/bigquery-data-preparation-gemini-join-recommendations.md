---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.454Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Preparation Gemini join recommendations"
feature_slug: "bigquery-data-preparation-gemini-join-recommendations"
latest_feature_date: "2025-02-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "join suggestion"
  - "join operation recommendations"
  - "Gemini-powered suggestions"
  - "context-aware join"
  - "Data Preparation recommendations"
  - "Gemini join recommendations"
  - "BigQuery Data Preparation"
  - "join recommendations"
---

# BigQuery Data Preparation Gemini join recommendations

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Data Preparation now provides Gemini-powered, context-aware join operation recommendations.

## Extended Definition

BigQuery Data Preparation includes a feature that provides context-aware join operation recommendations generated with Gemini. According to the BigQuery release notes, this feature is part of Data Preparation and is positioned as Gemini-powered guidance for join design decisions. The feature’s IAM guidance indicates it no longer requires the BigQuery Data Editor or Service Usage Consumer roles, and can be accessed via the BigQuery Studio User and Gemini for Google Cloud User roles together with permission to access the data being prepared.

## Evidence Summary

The cited BigQuery release notes both announce the Gemini-based join recommendation capability in Data Preparation and specify the role/permission updates for using it.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2025 Libraries Go 1.66.1 (2025-02-03) Bug Fixes bigquery: Move MaxStaleness field to table level ( #10066 ) ( 164492d ) Libraries Go 1.66.2 (2025-02-04) Bug Fixes bigquery: Broken github.com/envoyproxy/go-control-plane/envoy dep ( #11556 ) ( e70d63b ), refs #11542 Feature BigQuery data preparation provides context-aware join operation recommendations from Gemini .
- BigQuery data preparation no longer requires that you have the permissions granted by the following IAM roles: BigQuery Data Editor ( roles/bigquery.dataEditor ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about the required roles, see Manage data preparations .
- Change You can get the required permissions to use BigQuery data preparation through the BigQuery Studio User ( roles/bigquery.studioUser ) and Gemini for Google Cloud User ( roles/cloudaicompanion.user ) roles, and permission to access the data you're preparing.
- Change BigQuery data preparations are now represented in the SQLX format and in the pipe query syntax to simplify the CI/CD code review process.

