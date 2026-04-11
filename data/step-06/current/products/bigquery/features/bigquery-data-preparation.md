---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.439Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Preparation"
feature_slug: "bigquery-data-preparation"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Data Preparation workflow"
  - "Gemini-powered suggestions"
  - "Dataform scheduling"
  - "visual pipelines"
  - "pipeline scheduling"
  - "Gemini suggestions"
  - "BigQuery Data Preparation"
  - "BQ Data Preparation"
---

# BigQuery Data Preparation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Preparation is now generally available with Gemini-powered suggestions and support for visual pipelines and pipeline scheduling with Dataform.

## Extended Definition

BigQuery Data Preparation is a BigQuery capability that provides context-aware join operation recommendations powered by Gemini. The feature is documented as being represented in SQLX format and pipe query syntax to simplify CI/CD code review, and BigQuery’s required access model for using it was updated so the BigQuery Studio User and Gemini for Google Cloud User roles (with data access) can be used instead of the previously required BigQuery Data Editor and Service Usage Consumer roles.

## Evidence Summary

The cited release notes page provides evidence only for specific February 2025 updates to BigQuery Data Preparation (Gemini-powered join recommendations, SQLX/pipe representation, and IAM role changes), but does not confirm the GA claim, visual pipeline support, or Dataform scheduling.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

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
- Change BigQuery data preparations are now represented in the SQLX format and in the pipe query syntax to simplify the CI/CD code review process.

