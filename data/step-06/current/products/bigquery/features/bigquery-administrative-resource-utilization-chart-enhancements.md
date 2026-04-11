---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.610Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery administrative resource utilization chart enhancements"
feature_slug: "bigquery-administrative-resource-utilization-chart-enhancements"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "project utilization dashboards"
  - "BigQuery administrative resource utilization chart"
  - "resource utilization chart filter"
  - "admin resource utilization"
  - "project-level utilization view"
  - "resource utilization charts"
  - "billing model filtering"
  - "utilization views"
---

# BigQuery administrative resource utilization chart enhancements

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery administrative resource charts now support project-level utilization views and filtering by billing model.

## Extended Definition

BigQuery administrative resource utilization charts are a monitoring feature in the BigQuery Monitoring page that lets BigQuery administrators view operational health and resource usage trends over time. The documentation confirms separate access paths for organization-level and project-level views and explicitly requires specific permissions/roles, including `bigquery.jobs.listAll` on the project for project-level utilization chart access. The provided excerpts do not explicitly confirm billing-model filtering, so that specific capability is not evidenced here.

## Evidence Summary

The cited page defines who can view and configure BigQuery operational health/resource utilization charts and documents the permissions/roles needed, including an explicit project-level utilization chart permission.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.
- View and configure resource utilization charts To view and configure resource utilization charts, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.

