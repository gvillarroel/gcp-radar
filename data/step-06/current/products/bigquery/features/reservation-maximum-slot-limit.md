---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.279Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reservation maximum slot limit"
feature_slug: "reservation-maximum-slot-limit"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "reservation"
  - "maximum"
  - "slot"
  - "limit"
  - "reservations"
  - "can"
  - "now"
  - "configured"
---

# Reservation maximum slot limit

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Reservations can now be configured with a maximum slot limit when they are created or updated; BigQuery reservations can now be configured with a maximum slot limit when created or updated.

## Extended Definition

Reservations can now be configured with a maximum slot limit when they are created or updated; BigQuery reservations can now be configured with a maximum slot limit when created or updated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- If true , idle slots are shared equally across all reservations first, and then across projects within the reservation.
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- This method can bypass the limit check since it uses your dedicated reservations rather than a free shared slot pool.
- If you run high-volume interactive queries, especially in scenarios that involve automated triggers like Cloud Run functions, first monitor the behavior of, and stop, the Cloud Run function causing the error, and then use one of the following recommended strategies for avoiding this limit: Increase slots in your reservation .
- Increase slots or, if you have a high-demand workload, switch to reservations (capacity-based model) from on-demand (pay-per query model).
- Maximum number of API requests limit errors BigQuery returns this error when you reach the rate limit for the number of API requests to a BigQuery API per user per method—for example, the tables.get method calls from a service account, or the jobs.insert method calls from a different user email.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- When you use the capacity pricing model using slot reservations, you specify the maximum number of slots that are available to a reservation.
- Reservations have the following features: They are allocated in pools of slots, and they let you manage capacity and isolate workloads in ways that make sense for your organization.
- A similar scenario will be observed for non-autoscaling reservations—billing is calculated according to the number of slots provisioned, not the number of slots used.
- To use this model, you configure reservations for slots.

