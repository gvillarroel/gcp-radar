---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.592Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Slot estimator commitment and autoscale recommendations"
feature_slug: "slot-estimator-commitment-and-autoscale-recommendations"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "slot"
  - "estimator"
  - "commitment"
  - "autoscale"
  - "recommendations"
  - "provides"
  - "cost"
  - "optimal"
---

# Slot estimator commitment and autoscale recommendations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The slot estimator provides cost-optimal commitment and autoscale recommendations based on editions pricing and historical performance metrics.

## Extended Definition

The slot estimator provides cost-optimal commitment and autoscale recommendations based on editions pricing and historical performance metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INFORMATION SCHEMA storage calculations don't match billing Use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view instead of INFORMATION SCHEMA.TABLE STORAGE - TABLE STORAGE USAGE TIMELINE provides more accurate and granular data to correctly calculate storage costs The queries run on INFORMATION SCHEMA views don't include taxes, adjustments, and rounding errors—take these into account when comparing the data.
- Unexpected charges related to queries, reservations and commitments Troubleshooting unexpected charges related to job execution depends on the origin of these charges: If you see an increase in on-demand analysis costs, this can be related to an increase in the number of jobs that were launched or the change in the amount of data that needs to be processed by jobs.
- Autoscaler has a 1 minute minimum period before scaling down, which translates into at least 1 minute being charged even if the query used the slots for less time, for example, for only 10 seconds out of the minute.
- In addition, customers using the on-demand pricing model can view sizing recommendations for commitments and autoscaling reservations with similar performance when moving to capacity-based pricing.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- If the slot usage value exceeds the Commitment Capacity and Autoscaled Slots , then the chart groups the remaining as idle slots.
- If the slot usage value exceeds the Commitment Capacity and Autoscaled Slots , then the chart groups the remaining as idle slots.
- This metric lets you monitor the idle slots borrowed from other reservations and commitments, or the rounding imprecisions in the usage data.
- This metric lets you monitor the idle slots borrowed from other reservations and commitments, or the rounding imprecisions in the usage data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

