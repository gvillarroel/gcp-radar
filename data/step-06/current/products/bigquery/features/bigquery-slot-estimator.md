---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.722Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Slot Estimator"
feature_slug: "bigquery-slot-estimator"
latest_feature_date: "2021-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes"
keywords:
  - "bigquery"
  - "slot"
  - "estimator"
  - "analyzes"
  - "utilization"
  - "estimate"
  - "required"
  - "capacity"
---

# BigQuery Slot Estimator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Slot Estimator analyzes slot utilization to estimate required slot capacity and forecast performance impacts of capacity changes.

## Extended Definition

BigQuery Slot Estimator analyzes slot utilization to estimate required slot capacity and forecast performance impacts of capacity changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the slot estimator Best practice: Use slot estimator to estimate the number of slots required for your workloads.
- The BigQuery slot estimator helps you to manage slot capacity based on historical performance metrics.
- Editions To estimate costs in the Google Cloud pricing calculator when using the capacity-based pricing model with BigQuery editions , follow these steps: Open the Google Cloud pricing calculator .
- Alternatively, for capacity compute in BigQuery, you incur charges for the compute resources ( slots ) that are used to process the query.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Note: BigQuery might allocate additional slots to perform a job, resulting in a slot usage value that exceeds the total maximum capacity value and a non-zero value for borrowed slot usage in reservations that ignore idle slots.
- Note: BigQuery sometimes allocates additional slots to perform a job, resulting in a Total Usage value that exceeds the Maximum capacity value and a non-zero value for Borrowed Slot Usage in reservations that ignore idle slots.

### CAPACITY_COMMITMENT_CHANGES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permission To query the INFORMATION SCHEMA.CAPACITY COMMITMENT CHANGES view, you need the bigquery.capacityCommitments.list Identity and Access Management (IAM) permission for the project.
- Each of the following predefined IAM roles includes the required permission: roles/bigquery.resourceAdmin roles/bigquery.resourceEditor roles/bigquery.resourceViewer roles/bigquery.user roles/bigquery.admin For more information about BigQuery permissions, see Access control with IAM .
- For more information about editions, see Introduction to BigQuery editions . is flat rate BOOL Whether the commitment is associated with the legacy flat-rate capacity model or an edition.
- Can be PENDING or ACTIVE . slot count INTEGER Slot count associated with the capacity commitment. action STRING Type of event that occurred with the capacity commitment.

