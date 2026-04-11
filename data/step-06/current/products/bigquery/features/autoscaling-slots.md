---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.672Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Autoscaling slots"
feature_slug: "autoscaling-slots"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "BigQuery reservations to enterprise edition"
  - "Enterprise edition slot mapping"
  - "automatic slot scaling"
  - "slot commitments"
  - "autoscaling slot model"
  - "autoscaling slots"
  - "BigQuery autoscaling"
  - "slot autoscaling"
---

# Autoscaling slots

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Autoscaling slots are generally available in BigQuery, with slot reservations and commitments from preview mapped to BigQuery Enterprise edition.

## Extended Definition

In BigQuery’s `bq` CLI, autoscaling slots are a reservation-level setting specified via `--autoscale max slots=<NUMBER OF AUTOSCALING SLOTS>`, which sets how many autoscaling slots are assigned to a reservation. The CLI reference lists this as part of reservation configuration options for slot autoscaling.

## Evidence Summary

The cited page provides only CLI syntax for the `--autoscale max slots` reservation flag, and does not provide sufficient evidence about lifecycle status, enterprise-edition mapping, or broader product behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: STANDARD ENTERPRISE ENTERPRISE PLUS --autoscale max slots= NUMBER OF AUTOSCALING SLOTS The number of autoscaling slots assigned to the reservation.
- Each tag must have the namespaced key name and value short name . --autoscale max slots= NUMBER OF AUTOSCALING SLOTS the number of autoscaling slots assigned to the reservation.

