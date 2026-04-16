---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.778Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Flex slots"
feature_slug: "flex-slots"
latest_feature_date: "2020-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "flex"
  - "slots"
  - "bigquery"
  - "reservations"
  - "supports"
  - "short"
  - "term"
  - "slot"
---

# Flex slots

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Reservations supports Flex slots for short-term slot commitments.

## Extended Definition

BigQuery Reservations supports Flex slots for short-term slot commitments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- If true , idle slots are shared equally across all reservations first, and then across projects within the reservation.
- Enables the advanced runtime. enable reservation based fairness BOOL Determines how idle slots are shared.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --project id= PROJECT ID Specifies the project that administers the slots. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to purchase. --edition= EDITION The edition associated with the capacity commitment.
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.
- Each tag must have the namespaced key name and value short name . --autoscale max slots= NUMBER OF AUTOSCALING SLOTS the number of autoscaling slots assigned to the reservation.
- The default value is false ; jobs in the specified reservation can use idle slots from other reservations, or slots that are not allocated to any reservation.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Increase slots or, if you have a high-demand workload, switch to reservations (capacity-based model) from on-demand (pay-per query model).
- If you run high-volume interactive queries, especially in scenarios that involve automated triggers like Cloud Run functions, first monitor the behavior of, and stop, the Cloud Run function causing the error, and then use one of the following recommended strategies for avoiding this limit: Increase slots in your reservation .
- Short-term resolution To address this issue in the short term, use the following workarounds, which are ordered from most to least effective.
- If not already performed as a short-term fix, enters the Google Cloud project ID in the Catalog (Project) field of the ODBC driver.

