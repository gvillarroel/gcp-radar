---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.822Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA jobs views"
feature_slug: "bigquery-information-schema-jobs-views"
latest_feature_date: "2020-06-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "INFORMATION_SCHEMA.JOBS_BY_PROJECT"
  - "INFORMATION_SCHEMA.JOBS_BY_USER"
  - "INFORMATION_SCHEMA.JOBS"
  - "job metadata view"
  - "JOBS_BY_* views"
  - "jobs views"
  - "JOBS_BY_"
---

# BigQuery INFORMATION_SCHEMA jobs views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery made INFORMATION_SCHEMA views for jobs generally available.

## Extended Definition

BigQuery made INFORMATION_SCHEMA views for jobs generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page names the jobs information schema views used for administrative monitoring: by project, organization, and user.

Evidence snippets:
- BigQuery provides job details and insights through the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS BY PROJECT INFORMATION SCHEMA.JOBS BY ORGANIZATION INFORMATION SCHEMA.JOBS BY USER Note: If you use organization restrictions, see Enable access to Google-owned resources .
- Filter jobs To filter jobs for queries that are contained in the INFORMATION SCHEMA.JOBS views, do the following: In the Google Cloud console, go to the BigQuery page.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively you can query INFORMATION SCHEMA.JOBS BY PROJECT to see your total extract bytes over a few days.
- The following example query uses the INFORMATION SCHEMA.JOBS view to list the number of query, load, extract, and copy jobs by project: SELECT sum ( case when job type = "QUERY" then 1 else 0 end ) as QRY CNT , sum ( case when job type = "LOAD" then 1 else 0 end ) as LOAD CNT , sum ( case when job type = "EXTRACT" then 1 else 0 end ) as EXT CNT , sum ( case when job type = "COPY" then 1 else 0 end ) as CPY CNT FROM region- REGION NAME .
- To learn how to query the INFORMATION SCHEMA.JOBS view to get the total bytes processed value, see INFORMATION SCHEMA.JOBS schema View current quota usage You can view your current usage of query, load, extract, or copy jobs by running an INFORMATION SCHEMA query to view metadata about the jobs ran over a specified time period.
- JOBS BY PROJECT WHERE creation time BETWEEN TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ) AND CURRENT TIMESTAMP () AND job type = "EXTRACT" AND total bytes processed > ( POW ( 1024 , 3 ) 100 ) ORDER BY total bytes processed DESC LIMIT 100 You can alternatively use the jobs explorer with filters like Bytes processed more than to filter for high processing jobs for a specified period of time.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: The document is broad BigQuery operations troubleshooting and does not define or document INFORMATION_SCHEMA jobs views.

Evidence snippets:
- Alternatively you can query INFORMATION SCHEMA.JOBS BY PROJECT to see your total extract bytes over a few days.
- Use INFORMATION SCHEMA.JOBS BY tables to learn more about jobs that modify the table.
- JOBS BY PROJECT WHERE creation time BETWEEN TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ) AND CURRENT TIMESTAMP () AND job type = "EXTRACT" AND total bytes processed > ( POW ( 1024 , 3 ) 100 ) ORDER BY total bytes processed DESC LIMIT 100 You can alternatively use the jobs explorer with filters like Bytes processed more than to filter for high processing jobs for a specified period of time.
- Error message Your project exceeded quota for copies per project Diagnosis If you'd like to gather more data about where the copy jobs are coming from, you can try the following: If your copy jobs are located in a single or only a few regions, you can try querying the INFORMATION SCHEMA.JOBS table for specific regions.

