---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.775Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML job row operation statistics"
feature_slug: "dml-job-row-operation-statistics"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "DML row counts"
  - "rows inserted"
  - "DML row operation metrics"
  - "row operation statistics"
  - "rows deleted"
  - "INFORMATION_SCHEMA.JOBS"
  - "DML job statistics"
  - "rows updated"
---

# DML job row operation statistics

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now returns statistics for DML query jobs showing counts of rows inserted, deleted, and updated, including exposure in INFORMATION_SCHEMA job views.

## Extended Definition

BigQuery now returns statistics for DML query jobs showing counts of rows inserted, deleted, and updated, including exposure in INFORMATION_SCHEMA job views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.
- Billing is less than the total bytes billed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries There can be multiple reasons for the actual billing to be less than the calculated bytes processed: Each project is provided with 1 TB of free tier querying per month for no extra charge.
- After identifying the corresponding SKUs, use the INFORMATION SCHEMA views to identify the specific resources associated with these charges, for example: If you are charged for on-demand analysis, look into the INFORMATION SCHEMA.JOBS view examples to determine jobs driving costs and users who launched them.
- Slot-hours billed larger than INFORMATION SCHEMA.JOBS view calculated slot-hours When using an autoscaling reservation, billing is calculated according to the number of scaled slots, not the number of slots used.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Error message Your project exceeded quota for copies per project Diagnosis If you'd like to gather more data about where the copy jobs are coming from, you can try the following: If your copy jobs are located in a single or only a few regions, you can try querying the INFORMATION SCHEMA.JOBS table for specific regions.
- For example, the following query uses the INFORMATION SCHEMA.JOBS view to list all quota-related errors within the past day: SELECT job id , creation time , error result FROM region- REGION NAME .
- Alternatively you can query INFORMATION SCHEMA.JOBS BY PROJECT to see your total extract bytes over a few days.
- You can learn more about your usage by querying the INFORMATION SCHEMA.JOBS TIMELINE view .

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- The charts gather metrics by querying the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATION CHANGES The data can be updated in real time, going back a maximum of 30 days.

