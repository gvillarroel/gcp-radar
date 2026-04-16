---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.266Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Administrative jobs explorer job comparison"
feature_slug: "administrative-jobs-explorer-job-comparison"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "administrative"
  - "jobs"
  - "explorer"
  - "job"
  - "comparison"
  - "can"
  - "compare"
  - "two"
---

# Administrative jobs explorer job comparison

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The administrative jobs explorer can compare two jobs to identify discrepancies and query performance improvement opportunities.

## Extended Definition

The administrative jobs explorer can compare two jobs to identify discrepancies and query performance improvement opportunities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- The job performance comparison lets you compare your baseline job to targeted jobs, and the query analysis highlights job details that differ significantly between the two jobs.
- Use administrative jobs explorer As a BigQuery administrator, you can use the administrative jobs explorer to help you monitor jobs activity across your organization.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Best practice : Check queries using the jobs explorer's slot contention filter to identify those consuming the most slots and optimize them.
- Optional: To view more details about operational health with a resource utilization chart or jobs explorer , click Explore more .
- Select Explore more or the job ID in the top active queries chart to view more details in the jobs explorer .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- You can use the Logs Explorer to query the logs about events related to BigQuery jobs, datasets, transfers, and more.
- Copy data You might want to create copies of your data for various reasons, such as protection from human error, or to retain data for comparison in the future.
- With table snapshots, for example, you can compare a table's current data to the data from the beginning of the year, which isn't possible by using time travel.
- For example, you can create a table by using the Explorer pane in the Google Cloud console, a bq mk --table command, or a CREATE TABLE SQL statement.

