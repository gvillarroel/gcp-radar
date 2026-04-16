---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.668Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Slot recommender for on-demand billing"
feature_slug: "slot-recommender-for-on-demand-billing"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "slot"
  - "recommender"
  - "demand"
  - "billing"
  - "provides"
  - "reservation"
  - "recommendations"
  - "customers"
---

# Slot recommender for on-demand billing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The slot recommender provides reservation recommendations for customers using on-demand billing.

## Extended Definition

The slot recommender provides reservation recommendations for customers using on-demand billing.

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
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- In addition, customers using the on-demand pricing model can view sizing recommendations for commitments and autoscaling reservations with similar performance when moving to capacity-based pricing.
- Slot-hours billed larger than INFORMATION SCHEMA.JOBS view calculated slot-hours When using an autoscaling reservation, billing is calculated according to the number of scaled slots, not the number of slots used.
- A similar scenario will be observed for non-autoscaling reservations—billing is calculated according to the number of slots provisioned, not the number of slots used.
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Refer to the following documents for more information about managing compute capacity for processing your queries: For slots, and the trade-offs between on-demand billing and capacity-based billing, see Introduction to reservations .
- With BigQuery editions billing, you allocate slots for your organization through autoscaling reservations and optional, but cheaper, capacity commitments.
- BigQuery has two pricing models for charging for the slots that run your queries: On-demand billing.
- These pricing models apply per project, so you can have some projects that use on-demand billing and some projects that use capacity-based billing.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- JOBS BY ORGANIZATION WHERE creation time >= '2024-06-25 00:00:00-07' AND creation time '2024-06-30 00:00:00-07' AND ( statement type != "SCRIPT" OR statement type IS NULL ) AND reservation id = reservationID Troubleshoot slot contention Slot contention can happen when there aren't enough slots to run all of your jobs, causing performance issues.
- The following query provides details on your reservations past job performance: SELECT AVG ( TIMESTAMP DIFF ( end time , creation time , MILLISECOND )) as avg latency ms , SUM ( total bytes processed ) as total bytes , COUNT ( ) as query numbers , FROM PROJECT ID .region- REGION NAME .

