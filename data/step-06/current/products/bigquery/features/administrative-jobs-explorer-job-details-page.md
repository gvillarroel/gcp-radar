---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.266Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Administrative jobs explorer job details page"
feature_slug: "administrative-jobs-explorer-job-details-page"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "administrative"
  - "jobs"
  - "explorer"
  - "job"
  - "details"
  - "page"
  - "now"
  - "includes"
---

# Administrative jobs explorer job details page

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The administrative jobs explorer now includes a job details page for diagnosing and troubleshooting queries.

## Extended Definition

The administrative jobs explorer now includes a job details page for diagnosing and troubleshooting queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From the administrative jobs explorer, you can view the BigQuery details page.
- View query execution details To view query execution details of jobs, do the following: Go to the Jobs explorer page.
- View job details To view the job details page, do the following: Go to the Jobs Explorer page.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Optional: To view more details about operational health with a resource utilization chart or jobs explorer , click Explore more .
- Select Explore more or the job ID in the top active queries chart to view more details in the jobs explorer .
- Check the jobs explorer to review details about the specific jobs flagged in these messages.
- Click job IDs to view more job details in the jobs explorer .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Permissions to load data into BigQuery To load data into a new BigQuery table or partition or to append or overwrite an existing table or partition, you need the following IAM permissions: bigquery.tables.create bigquery.tables.updateData bigquery.tables.update bigquery.jobs.create Each of the following predefined IAM roles includes the permissions that you need in order to load data into a BigQuery table or partition: roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.admin (includes the bigquery.jobs.create permission) bigquery.user (includes the bigquery.jobs.create permission) bigquery.jobUser (includes the bigquery.jobs.create permission) Additionally, if you have the bigquery.datasets.create permission, you can create and update tables using a load job in the datasets that you create.
- Loading CSV data into a table To load CSV data from Cloud Storage into a new BigQuery table, select one of the following options: Console To follow step-by-step guidance for this task directly in the Cloud Shell Editor, click Guide me : Guide me In the Google Cloud console, go to the BigQuery page.
- ASCII control character None --preserve ascii control characters None (Optional) If you want to allow ASCII 0 and other ASCII control characters, then set --preserve ascii control characters to true to your load jobs.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

