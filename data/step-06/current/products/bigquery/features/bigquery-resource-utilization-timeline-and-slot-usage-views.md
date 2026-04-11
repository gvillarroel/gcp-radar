---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.432Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery resource utilization timeline and slot-usage views"
feature_slug: "bigquery-resource-utilization-timeline-and-slot-usage-views"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "six-hour timeline"
  - "autoscaled slots"
  - "baseline slots"
  - "resource utilization timeline"
  - "slot usage dashboard"
  - "reservation slot usage"
  - "slot utilization"
  - "idle slots"
---

# BigQuery resource utilization timeline and slot-usage views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery resource utilization charts now default to a six-hour timeline and include a new reservation slot usage view for monitoring idle, baseline, and autoscaled slots.

## Extended Definition

BigQuery’s resource utilization monitoring includes reservation slot-usage views where slot usage is evaluated against committed and autoscaled capacity; when slot usage exceeds Commitment Capacity plus Autoscaled Slots, the excess is shown as idle slots, and this idle value is computed approximately from slot usage, committed slots, and autoscaled slots. Reservation metadata in the DDL also defines baseline slot concepts (for edition-based reservations), a configurable autoscale max slots limit, and an option to ignore idle slots, while release notes explicitly mention the addition of a reservation slot usage view and improvements to utilization views. The provided excerpts do not explicitly confirm the six-hour default timeline behavior.

## Evidence Summary

The cited pages document BigQuery slot-usage chart behavior for idle slots, reservation slot configuration fields (baseline/autoscale/ignore idle slots), and the release-note announcement of a new reservation slot usage view.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: It discusses resource utilization charting and slot usage but does not confirm timeline defaults or a new reservation slot-usage view in the provided content.

Evidence snippets:
- If the slot usage value exceeds the Commitment Capacity and Autoscaled Slots , then the chart groups the remaining as idle slots.
- If the slot usage value exceeds the Commitment Capacity and Autoscaled Slots , then the chart groups the remaining as idle slots.
- The idle slots usage is an approximate value and is computed based on Slot Usage , Committed Slots , and Autoscaled Slots .
- The idle slots usage is an approximate value and is computed based on Slot Usage , Committed Slots , and Autoscaled Slots .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. edition STRING The edition associated with this reservation.
- The following options are supported: NAME TYPE Details ignore idle slots BOOLEAN If the value is true , then the reservation uses only the slots that are provisioned to it.
- The following options are supported: NAME TYPE Details ignore idle slots BOOLEAN If the value is true , then the reservation uses only the slots that are provisioned to it.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Reservations within a reservation group share idle slots with each other before making them available to other reservations in the project, giving you more control over slot allocation for high-priority workloads.
- Feature You can now allocate idle slots fairly across reservations within a single admin project.
- Several improvements have been made to the views, including a new reservation slot usage view.
- Feature You can allocate idle slots fairly across reservations within a single admin project.

