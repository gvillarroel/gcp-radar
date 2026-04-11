---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.566Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "sharing"
feature_slug: "sharing"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "collaborative query work"
  - "code asset sharing"
  - "share Studio assets"
  - "permissions for assets"
  - "share saved queries"
  - "saved query sharing"
  - "share notebooks"
  - "notebook sharing"
---

# sharing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Studio now supports saving, sharing, and managing versions of code assets such as notebooks and saved queries.

## Extended Definition

BigQuery Studio supports collaborative code-asset workflows by letting users save, share, and manage versions of code assets such as notebooks and saved queries. It is a Studio capability applied to those asset types in BigQuery rather than a separate standalone service surface. IAM documentation shows saved queries and related Studio assets (for example, data canvas and repository) as resource types in role scopes, indicating access control is applied at the asset level for these collaborative workflows.

## Evidence Summary

The locations page explicitly defines Studio's save/share/version support for notebooks and saved queries, while access-control pages enumerate those assets and related Studio resources under IAM-scoped resource sets.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

