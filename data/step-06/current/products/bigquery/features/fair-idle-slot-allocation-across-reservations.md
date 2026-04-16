---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.279Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Fair idle slot allocation across reservations"
feature_slug: "fair-idle-slot-allocation-across-reservations"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "fair"
  - "idle"
  - "slot"
  - "allocation"
  - "across"
  - "reservations"
  - "slots"
  - "can"
---

# Fair idle slot allocation across reservations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Idle slots can be allocated fairly across reservations within a single admin project so each reservation receives an approximately equal share of available capacity; BigQuery can now distribute idle slots approximately equally across reservations within a single admin project.

## Extended Definition

Idle slots can be allocated fairly across reservations within a single admin project so each reservation receives an approximately equal share of available capacity; BigQuery can now distribute idle slots approximately equally across reservations within a single admin project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Following is an example of how to configure reservations as tenant compute tiers: Data processing : 2000 slots, ignore idle.
- Following is an example of how to configure reservations per team: Organization level reservation : 500 slots, allow idle.
- All new projects for that team use fair scheduling slots from the same allocation of resources.
- To speed queries, idle slots from other reservations are automatically applied.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- If true , idle slots are shared equally across all reservations first, and then across projects within the reservation.
- Enables the advanced runtime. enable reservation based fairness BOOL Determines how idle slots are shared.
- If false (default), idle slots are equally distributed across all query projects.
- The following options are supported: NAME TYPE Details ignore idle slots BOOLEAN If the value is true , then the reservation uses only the slots that are provisioned to it.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Note: BigQuery might allocate additional slots to perform a job, resulting in a slot usage value that exceeds the total maximum capacity value and a non-zero value for borrowed slot usage in reservations that ignore idle slots.
- Note: BigQuery sometimes allocates additional slots to perform a job, resulting in a Total Usage value that exceeds the Maximum capacity value and a non-zero value for Borrowed Slot Usage in reservations that ignore idle slots.
- This metric lets you monitor the idle slots borrowed from other reservations and commitments, or the rounding imprecisions in the usage data.
- This metric lets you monitor the idle slots borrowed from other reservations and commitments, or the rounding imprecisions in the usage data.

