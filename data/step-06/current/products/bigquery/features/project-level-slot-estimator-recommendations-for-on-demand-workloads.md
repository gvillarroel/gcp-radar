---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.521Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Project-level slot estimator recommendations for on-demand workloads"
feature_slug: "project-level-slot-estimator-recommendations-for-on-demand-workloads"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "project"
  - "level"
  - "slot"
  - "estimator"
  - "recommendations"
  - "demand"
  - "workloads"
  - "provides"
---

# Project-level slot estimator recommendations for on-demand workloads

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The slot estimator provides project-level cost-optimal commitment and autoscale recommendations for on-demand workloads.

## Extended Definition

The slot estimator provides project-level cost-optimal commitment and autoscale recommendations for on-demand workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.
- Restrict costs for each model When you use the on-demand pricing model, the only way to restrict costs is to configure project-level or user-level daily quotas.
- Use the slot estimator Best practice: Use slot estimator to estimate the number of slots required for your workloads.
- Billing is less than the total bytes billed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries There can be multiple reasons for the actual billing to be less than the calculated bytes processed: Each project is provided with 1 TB of free tier querying per month for no extra charge.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Refer to the following documents for more information about managing compute capacity for processing your queries: For slots, and the trade-offs between on-demand billing and capacity-based billing, see Introduction to reservations .
- BigQuery lets you control access to your resources at many levels, including access to the organization, folders, projects, datasets, tables, table columns, and table rows.
- You can also use the Slot estimator ( Preview ) to help you estimate your organization's capacity requirements based on historical performance metrics.
- These pricing models apply per project, so you can have some projects that use on-demand billing and some projects that use capacity-based billing.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- You can use this dashboard to monitor the following metrics: Slot usage Shuffle usage Job concurrency Errors Job duration Bytes processed Total storage Note: The operational health dashboard doesn't monitor metrics for on-demand workloads.
- The following query provides details on your reservations past job performance: SELECT AVG ( TIMESTAMP DIFF ( end time , creation time , MILLISECOND )) as avg latency ms , SUM ( total bytes processed ) as total bytes , COUNT ( ) as query numbers , FROM PROJECT ID .region- REGION NAME .
- This view can help project analysts monitor system health for their projects, much like the operational health dashboard at the organizational level, but it shows only project-level data in its charts and filters.

