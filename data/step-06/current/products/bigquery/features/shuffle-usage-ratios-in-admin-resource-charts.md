---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.655Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Shuffle usage ratios in admin resource charts"
feature_slug: "shuffle-usage-ratios-in-admin-resource-charts"
latest_feature_date: "2022-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "shuffle"
  - "usage"
  - "ratios"
  - "admin"
  - "resource"
  - "charts"
  - "can"
  - "display"
---

# Shuffle usage ratios in admin resource charts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Admin resource charts can display shuffle usage ratios for BigQuery workloads.

## Extended Definition

Admin resource charts can display shuffle usage ratios for BigQuery workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.
- For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- For information about viewing your slot usage, see View administrative resource charts .

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to work with BigQuery job details and system-level details, ask your administrator to grant you the following IAM roles on your organization or project: View job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run View system-level details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Before you begin To get the permissions that you need to work with BigQuery job details and system-level details, ask your administrator to grant you the following IAM roles on your organization or project: View job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run View system-level details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Administration charts and alerts You can use Cloud Monitoring to create custom charts based on the resources, metrics, and any aggregation that you specify.
- Quotas Google Cloud sets limits on the use of resources, including BigQuery resources, both to ensure fair usage of shared resources, and to protect you from runaway costs.
- You can view your usage of BigQuery resources that have quotas , and request a higher quota , if needed, by using the Google Cloud console.
- BigQuery administrators typically do the following types of tasks: Manage resources, such as projects, datasets, and tables.

