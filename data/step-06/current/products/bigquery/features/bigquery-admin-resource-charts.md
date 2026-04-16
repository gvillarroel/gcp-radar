---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.721Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Admin Resource Charts"
feature_slug: "bigquery-admin-resource-charts"
latest_feature_date: "2021-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "bigquery"
  - "admin"
  - "resource"
  - "charts"
  - "provide"
  - "reservation"
  - "administrators"
  - "organization"
---

# BigQuery Admin Resource Charts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Admin Resource Charts provide reservation administrators with organization-wide visibility into slot usage, concurrency, execution time, errors, and processed bytes; BigQuery Admin Resource Charts provide reservation administrators with organization-wide visibility into slot usage, concurrency, and job execution metrics.

## Extended Definition

BigQuery Admin Resource Charts provide reservation administrators with organization-wide visibility into slot usage, concurrency, execution time, errors, and processed bytes; BigQuery Admin Resource Charts provide reservation administrators with organization-wide visibility into slot usage, concurrency, and job execution metrics.

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
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery administrators typically do the following types of tasks: Manage resources, such as projects, datasets, and tables.
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .
- BigQuery lets you control access to your resources at many levels, including access to the organization, folders, projects, datasets, tables, table columns, and table rows.
- Introduction to BigQuery administration This document provides an introduction to BigQuery administration tasks, and the BigQuery features that help you accomplish them.

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To get the permissions that you need to work with BigQuery job details and system-level details, ask your administrator to grant you the following IAM roles on your organization or project: View job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run View system-level details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Before you begin To get the permissions that you need to work with BigQuery job details and system-level details, ask your administrator to grant you the following IAM roles on your organization or project: View job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run View system-level details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- BigQuery provides job details and insights through the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS BY PROJECT INFORMATION SCHEMA.JOBS BY ORGANIZATION INFORMATION SCHEMA.JOBS BY USER Note: If you use organization restrictions, see Enable access to Google-owned resources .

