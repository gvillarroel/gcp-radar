---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.752Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni INFORMATION_SCHEMA.JOBS_* views"
feature_slug: "bigquery-omni-information-schema-jobs-views"
latest_feature_date: "2022-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "JOBS information schema views"
  - "INFORMATION_SCHEMA.JOBS_*"
  - "INFORMATION_SCHEMA.JOBS"
  - "Omni jobs metadata"
  - "job metadata views"
  - "Omni JOBS views"
  - "jobs_* views"
---

# BigQuery Omni INFORMATION_SCHEMA.JOBS_* views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Omni adds support for INFORMATION_SCHEMA.JOBS_* views to expose job metadata metadata in AWS and Azure.

## Extended Definition

BigQuery Omni adds support for INFORMATION_SCHEMA.JOBS_* views to expose job metadata metadata in AWS and Azure.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Filter jobs To filter jobs for queries that are contained in the INFORMATION SCHEMA.JOBS views, do the following: In the Google Cloud console, go to the BigQuery page.
- BigQuery provides job details and insights through the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS BY PROJECT INFORMATION SCHEMA.JOBS BY ORGANIZATION INFORMATION SCHEMA.JOBS BY USER Note: If you use organization restrictions, see Enable access to Google-owned resources .

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- The charts gather metrics by querying the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATION CHANGES The data can be updated in real time, going back a maximum of 30 days.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.
- Billing is less than the total bytes billed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries There can be multiple reasons for the actual billing to be less than the calculated bytes processed: Each project is provided with 1 TB of free tier querying per month for no extra charge.
- After identifying the corresponding SKUs, use the INFORMATION SCHEMA views to identify the specific resources associated with these charges, for example: If you are charged for on-demand analysis, look into the INFORMATION SCHEMA.JOBS view examples to determine jobs driving costs and users who launched them.
- Slot-hours billed larger than INFORMATION SCHEMA.JOBS view calculated slot-hours When using an autoscaling reservation, billing is calculated according to the number of scaled slots, not the number of slots used.

