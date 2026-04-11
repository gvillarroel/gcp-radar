---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.434Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Maximum reservation slot limit"
feature_slug: "maximum-reservation-slot-limit"
latest_feature_date: "2025-04-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "reservation slot cap"
  - "slot cap"
  - "maximum reservation slot limit"
  - "create reservation with max slots"
  - "update reservation slot limit"
  - "configure slot limit"
  - "set maximum slots"
  - "max slots"
---

# Maximum reservation slot limit

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

You can now set and configure a maximum slot limit for a BigQuery reservation when creating or updating it.

## Extended Definition

BigQuery reservations have a `max slots` setting that defines a hard limit on the number of slots the reservation can consume. This limit can be configured when creating or updating a reservation via reservation DDL (for example, CREATE/ALTER RESERVATION with `OPTIONS (max slots = ...)`) and is also available as the `--max slots` option in the BigQuery CLI. Separate from this cap, `autoscale max slots` controls how many additional slots can be added through autoscaling.

## Evidence Summary

The DDL and bq CLI reference pages explicitly describe reservation slot-cap fields (`max slots`) and include create/update configuration examples/flags for that cap.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- Example The following example creates a reservation of 100 slots in the project admin project : CREATE RESERVATION admin project.region-us.prod OPTIONS ( slot capacity = 100 ); CREATE ASSIGNMENT statement Assigns a project, folder, or organization to a reservation.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- This is equal to the value of the max reservation size minus the number of baseline slots. --max slots= MAXIMUM NUMBER OF SLOTS The maximum number of slots the reservation will consume.
- Must be one of the following: STANDARD ENTERPRISE ENTERPRISE PLUS --autoscale max slots= NUMBER OF AUTOSCALING SLOTS The number of autoscaling slots assigned to the reservation.
- Each tag must have the namespaced key name and value short name . --autoscale max slots= NUMBER OF AUTOSCALING SLOTS the number of autoscaling slots assigned to the reservation.
- Must be one of the following: IDLE SLOTS ONLY ALL SLOTS AUTOSCALE ONLY SCALING MODE UNSPECIFIED Must be configured with the --max slots flag ( Preview ).

