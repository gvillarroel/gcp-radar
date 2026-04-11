---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.830Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Reservations"
feature_slug: "bigquery-reservations"
latest_feature_date: "2020-04-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "reservation assignments"
  - "purchase slots"
  - "assign slots"
  - "flat-rate pricing"
  - "flat-rate slots"
  - "BigQuery Reservations"
  - "BQ Reservations"
  - "slot reservations"
---

# BigQuery Reservations

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Reservations became generally available, allowing users to purchase BigQuery slots for flat-rate pricing and allocate them for workload management; BigQuery Reservations became available in all BigQuery regions.

## Extended Definition

BigQuery Reservations became generally available, allowing users to purchase BigQuery slots for flat-rate pricing and allocate them for workload management; BigQuery Reservations became available in all BigQuery regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --project id= PROJECT ID Specifies the project that administers the slots. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to purchase. --edition= EDITION The edition associated with the capacity commitment.
- Replace PLAN with one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --reservation={true false} Specifies whether to update a reservation.
- Must be one of the following values: ANNUAL THREE YEAR Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --renewal plan= RENEWAL TYPE Specifies the renewal plan type .
- For example: bq ls --reservation=true --project id=myProject --location=us --reservation assignment={true false} To list all reservation assignments for a given project and location, set to true .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: It briefly references managing compute capacity via reservations as part of administration, but gives no feature-level details or rollout status.

Evidence snippets:
- For allocating slot reservations to specific projects, see Work with reservation assignments .
- For creating pools of capacity-based slots, called slot reservations , see Work with slot reservations .
- You can view your capacity commitments and see where your slot reservations have been assigned.
- For more information, see Monitoring BigQuery reservations .

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Billed for BigQuery Reservations API usage even though the API is disabled and not reservations or commitments used Inspect the SKU to better understand what services are charged.
- When you use the capacity pricing model using slot reservations, you specify the maximum number of slots that are available to a reservation.
- BigQuery Reservations API charges appearing after the Reservation API is disabled Disabling the BigQuery won't stop commitment charges.
- Use reservations and commitments Best practice: Use BigQuery reservations and commitments to control costs.

