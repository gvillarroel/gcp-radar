---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.395Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation file loading from Cloud Storage"
feature_slug: "bigquery-data-preparation-file-loading-from-cloud-storage"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
keywords:
  - "prepare files from GCS"
  - "GCS file loading"
  - "load files from Cloud Storage"
  - "direct file loading"
  - "Cloud Storage import"
  - "Cloud Storage source"
  - "data preparation"
---

# BigQuery data preparation file loading from Cloud Storage

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery data preparation now supports loading files directly from Cloud Storage.

## Extended Definition

BigQuery Data Preparation now supports loading files directly from Google Cloud Storage as part of its preparation workflow. This feature is part of the Gemini-powered Data Preparation experience in BigQuery, which provides context-aware, AI-generated transformation recommendations to cleanse data for analysis.

## Evidence Summary

The release notes explicitly announce Cloud Storage file loading in BigQuery data preparations, while the Gemini overview page defines Data Preparation as an AI-assisted transformation workflow in BigQuery.

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
- September 10, 2025 Feature You can load files from Cloud Storage in BigQuery data preparations .
- February 10, 2025 Libraries Go 1.66.1 (2025-02-03) Bug Fixes bigquery: Move MaxStaleness field to table level ( #10066 ) ( 164492d ) Libraries Go 1.66.2 (2025-02-04) Bug Fixes bigquery: Broken github.com/envoyproxy/go-control-plane/envoy dep ( #11556 ) ( e70d63b ), refs #11542 Feature BigQuery data preparation provides context-aware join operation recommendations from Gemini .
- BigQuery data preparation no longer requires that you have the permissions granted by the following IAM roles: BigQuery Data Editor ( roles/bigquery.dataEditor ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about the required roles, see Manage data preparations .
- Change You can get the required permissions to use BigQuery data preparation through the BigQuery Studio User ( roles/bigquery.studioUser ) and Gemini for Google Cloud User ( roles/cloudaicompanion.user ) roles, and permission to access the data you're preparing.

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Data preparation in BigQuery gives you context aware, AI-generated transformation recommendations to cleanse data for analysis.
- To prepare data for analysis, in the Create new list, select Data preparation .
- For more information, see Open the data preparation editor in BigQuery .

