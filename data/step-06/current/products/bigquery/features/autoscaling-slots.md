---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.612Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Autoscaling slots"
feature_slug: "autoscaling-slots"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "autoscaling"
  - "slots"
  - "automatically"
  - "scale"
  - "slot"
  - "capacity"
  - "bigquery"
  - "workloads"
---

# Autoscaling slots

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Autoscaling slots automatically scale slot capacity for BigQuery workloads.

## Extended Definition

Autoscaling slots automatically scale slot capacity for BigQuery workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Example The following example creates a capacity commitment of 100 annual slots that are located in the region-us region and managed by a project admin project : CREATE CAPACITY admin project.region-us.my-commitment OPTIONS ( slot count = 100 , plan = 'ANNUAL' ); CREATE RESERVATION statement Creates a reservation.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.
- Note: BigQuery might allocate additional slots to perform a job, resulting in a slot usage value that exceeds the total maximum capacity value and a non-zero value for borrowed slot usage in reservations that ignore idle slots.
- Note: BigQuery sometimes allocates additional slots to perform a job, resulting in a Total Usage value that exceeds the Maximum capacity value and a non-zero value for Borrowed Slot Usage in reservations that ignore idle slots.
- If the slot usage value exceeds the Commitment Capacity and Autoscaled Slots , then the chart groups the remaining as idle slots.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: STANDARD ENTERPRISE ENTERPRISE PLUS --autoscale max slots= NUMBER OF AUTOSCALING SLOTS The number of autoscaling slots assigned to the reservation.
- Each tag must have the namespaced key name and value short name . --autoscale max slots= NUMBER OF AUTOSCALING SLOTS the number of autoscaling slots assigned to the reservation.
- Must be one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --project id= PROJECT ID Specifies the project that administers the slots. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to purchase. --edition= EDITION The edition associated with the capacity commitment.
- For more information, see Idle slots . --location= LOCATION Specifies the location of the reservation. --project id= PROJECT ID Specifies the project that owns the reservation. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to allocate to this reservation. --edition= EDITION The edition associated with the capacity commitment.

