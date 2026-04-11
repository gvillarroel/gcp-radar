---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.444Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation pipelines"
feature_slug: "bigquery-data-preparation-pipelines"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "task sequence"
  - "sequential execution"
  - "scheduled data pipeline"
  - "data preparation pipelines"
  - "pipeline scheduling"
  - "preparation pipeline"
  - "scheduled tasks"
  - "code assets"
---

# BigQuery data preparation pipelines

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery pipelines now support running data preparation tasks that execute code assets in sequence on a schedule.

## Extended Definition

BigQuery data preparation pipelines are pipeline workflows in BigQuery that support adding data preparation tasks and executing the associated code assets in a defined sequence. The feature includes pipeline scheduling so those sequential tasks can run automatically at a scheduled time, with support noted for visual data preparation pipelines with Dataform.

## Evidence Summary

The release notes explicitly describe BigQuery pipelines including visual data preparation pipelines with Dataform and the ability to include data preparation tasks that execute code assets sequentially on a schedule.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports visual data preparation pipelines and pipeline scheduling with Dataform.
- November 17, 2025 Feature You can use folders to organize and control access to single file code assets, such as notebooks, saved queries, data canvases, and data preparation files.
- Feature You can include data preparation tasks in BigQuery pipelines that execute your code assets in sequence at a scheduled time.

