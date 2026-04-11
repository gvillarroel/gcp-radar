---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.743Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Admin Resource Charts"
feature_slug: "bigquery-admin-resource-charts"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "Admin Resource dashboard"
  - "resource utilization charts"
  - "bytes processed charts"
  - "admin monitoring charts"
  - "concurrency charts"
  - "reservation resource charts"
  - "Admin Resource Charts"
  - "job performance charts"
---

# BigQuery Admin Resource Charts

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Admin Resource Charts are now generally available for on-demand users to monitor organizational metrics and troubleshoot issues; Introduces Admin Resource Charts for reservation users to monitor slot usage, concurrency, job performance, errors, and bytes processed across an organization.

## Extended Definition

BigQuery Admin Resource Charts is a BigQuery Monitoring feature that allows administrators to monitor organizational health, slot usage, and job performance over time through operational health and resource utilization charts in the Google Cloud console. The feature supports viewing chart data at organization, reservation, and project scopes, with access gated by specific BigQuery IAM permissions (for example, jobs, reservation, capacity, table, and metadata permissions) and is documented with recommended roles such as BigQuery Resource Viewer and BigQuery Metadata Viewer. The provided evidence supports usage and access requirements, but does not independently confirm launch-stage timing.

## Evidence Summary

The official BigQuery admin-resource-charts page defines the feature’s monitoring purpose, console location, and detailed permission/role requirements by scope.

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

