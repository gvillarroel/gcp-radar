---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.752Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni INFORMATION_SCHEMA.RESERVATION* views"
feature_slug: "bigquery-omni-information-schema-reservation-views"
latest_feature_date: "2022-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "INFORMATION_SCHEMA.RESERVATION*"
  - "INFORMATION_SCHEMA.RESERVATIONS"
  - "reservation information schema"
  - "Omni reservation metadata"
  - "reservation metadata view"
  - "Omni reservation views"
  - "RESERVATION_* views"
---

# BigQuery Omni INFORMATION_SCHEMA.RESERVATION* views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Omni adds support for INFORMATION_SCHEMA.RESERVATION* views to expose reservation metadata in AWS and Azure.

## Extended Definition

BigQuery Omni adds support for INFORMATION_SCHEMA.RESERVATION* views to expose reservation metadata in AWS and Azure.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- The charts gather metrics by querying the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATION CHANGES The data can be updated in real time, going back a maximum of 30 days.

