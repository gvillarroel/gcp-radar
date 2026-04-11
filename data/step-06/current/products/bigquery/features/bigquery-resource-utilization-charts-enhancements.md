---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.454Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery resource utilization charts enhancements"
feature_slug: "bigquery-resource-utilization-charts-enhancements"
latest_feature_date: "2025-02-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "resource utilization charts"
  - "usage chart settings"
  - "chart configuration options"
  - "utilization view options"
  - "additional metric views"
  - "BigQuery monitoring charts"
  - "cost and usage metrics"
  - "resource charts"
---

# BigQuery resource utilization charts enhancements

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery resource utilization charts now include additional metrics views and more chart configuration options.

## Extended Definition

BigQuery resource utilization charts is a monitoring feature that shows operational health and resource usage (for example, slot usage timeline views) through resource charts with configurable chart settings. According to Google Cloud release notes, this feature added additional metrics views and more chart configuration options in Preview on 2025-02-25, and was generally available by 2025-08-11. The charts are populated from BigQuery INFORMATION SCHEMA views, including jobs, jobs timeline, reservations, and table storage.

## Evidence Summary

The admin-resource-charts page defines what can be configured in resource utilization charts and identifies their underlying metrics sources, while the release notes confirm the preview-to-GA timeline and the added metrics views/configuration options.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: It notes configurable monitoring charts but provides no explicit evidence of specific enhancements like extra metrics views or expanded configuration capabilities.

Evidence snippets:
- Chart configurations You can adjust the view of your resource charts by changing the following chart configuration options.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- February 25, 2025 Feature BigQuery resource utilization charts provide metrics views and more chart configuration options in Preview .
- Feature BigQuery resource utilization charts have the following changes: The default timeline shown in the event timeline chart has changed from one to six hours.
- August 11, 2025 Feature BigQuery resource utilization charts are generally available (GA).

