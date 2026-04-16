---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.794Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Flex Slots"
feature_slug: "bigquery-flex-slots"
latest_feature_date: "2020-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "bigquery"
  - "flex"
  - "slots"
  - "provide"
  - "short"
  - "term"
  - "slot"
  - "commitments"
---

# BigQuery Flex Slots

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Flex Slots provide short-term slot commitments for reservation-based workload management.

## Extended Definition

BigQuery Flex Slots provide short-term slot commitments for reservation-based workload management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --project id= PROJECT ID Specifies the project that administers the slots. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to purchase. --edition= EDITION The edition associated with the capacity commitment.
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.
- Each tag must have the namespaced key name and value short name . --autoscale max slots= NUMBER OF AUTOSCALING SLOTS the number of autoscaling slots assigned to the reservation.
- Each tag must have the namespaced key name and value short name . --default kms key= KEY Specifies the default Cloud KMS key resource ID for encrypting the table data in a dataset if no explicit key is provided during table creation or query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly-created partitioned tables in the dataset.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- For more information, see Renewing commitments . slot count Integer The number of slots in the commitment. edition String The edition associated with this reservation.
- Enables the advanced runtime. enable reservation based fairness BOOL Determines how idle slots are shared.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Standard edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value BQ STUDIO NOTEBOOK .
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Enterprise edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value SPARK PROCEDURE .
- If there is an increase in charges for committed slots, investigate this by querying INFORMATION SCHEMA.CAPACITY COMMITMENT CHANGES to see if new commitments have been purchased or modified.
- BigQuery autoscales in multiples of 50 slots, which leads to billing for the nearest multiple even if less than the autoscaled amount is actually used.

