---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.405Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery resource utilization charts"
feature_slug: "bigquery-resource-utilization-charts"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "resource utilization charts"
  - "utilization dashboard"
  - "job resource usage chart"
  - "resource utilization view"
  - "utilization metrics"
  - "slot usage chart"
  - "resource charts"
---

# BigQuery resource utilization charts

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now provides generally available resource utilization charts.

## Extended Definition

BigQuery resource utilization charts are monitoring views that show operational health and resource usage data (including job and reservation-related metrics such as slot usage) and provide a dashboard for workload observability. The charts are backed by INFORMATION_SCHEMA metrics views and are used to inspect usage at organization, reservation, or project levels. In Google Cloud release history, the feature added more metrics views and chart configuration in preview (Feb 25, 2025) and became generally available on August 11, 2025.

## Evidence Summary

The admin-resource-charts page defines how the charts are sourced and secured, while the release notes confirm their preview updates and GA availability date.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about monitoring BigQuery organizational health, slot usage, and jobs via operational health and resource utilization charts, including how to access them.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Feature BigQuery resource utilization charts have the following changes: The default timeline shown in the event timeline chart has changed from one to six hours.
- February 25, 2025 Feature BigQuery resource utilization charts provide metrics views and more chart configuration options in Preview .
- August 11, 2025 Feature BigQuery resource utilization charts are generally available (GA).

