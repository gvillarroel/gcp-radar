---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.518Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Operational Health administrative resource charts"
feature_slug: "operational-health-administrative-resource-charts"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "operational"
  - "health"
  - "administrative"
  - "resource"
  - "charts"
  - "provides"
  - "slot"
  - "usage"
---

# Operational Health administrative resource charts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Operational Health provides administrative resource charts for slot usage, shuffle usage, concurrency, errors, and related metrics.

## Extended Definition

Operational Health provides administrative resource charts for slot usage, shuffle usage, concurrency, errors, and related metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.
- For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery provides job details and insights through the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS BY PROJECT INFORMATION SCHEMA.JOBS BY ORGANIZATION INFORMATION SCHEMA.JOBS BY USER Note: If you use organization restrictions, see Enable access to Google-owned resources .
- Jobs explorer removes the need for you to have a deep understanding of INFORMATION SCHEMA , and lets you quickly view job information such as owner, project, slot usage, duration, and more, without the need to write INFORMATION SCHEMA queries.
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- For example, if a job received fewer slots than previous executions, it might be impacted by resource constraints in the system.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Quotas Google Cloud sets limits on the use of resources, including BigQuery resources, both to ensure fair usage of shared resources, and to protect you from runaway costs.
- Administration charts and alerts You can use Cloud Monitoring to create custom charts based on the resources, metrics, and any aggregation that you specify.
- You can view your usage of BigQuery resources that have quotas , and request a higher quota , if needed, by using the Google Cloud console.
- Monitor resources Google Cloud provides the capability to monitor and audit your resources, including BigQuery resources.

