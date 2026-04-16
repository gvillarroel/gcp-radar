---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.553Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Administrative query inspector"
feature_slug: "administrative-query-inspector"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "administrative"
  - "query"
  - "inspector"
  - "helps"
  - "bigquery"
  - "administrators"
  - "monitor"
  - "slot"
---

# Administrative query inspector

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Administrative query inspector helps BigQuery administrators monitor slot utilization and job performance over time.

## Extended Definition

Administrative query inspector helps BigQuery administrators monitor slot utilization and job performance over time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.
- Note: BigQuery might allocate additional slots to perform a job, resulting in a slot usage value that exceeds the total maximum capacity value and a non-zero value for borrowed slot usage in reservations that ignore idle slots.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- This reservation is assigned to the top-level organization, and it gives slots to any BigQuery user who isn't using a project that has a dedicated reservation Data processing : 1000 slots, ignore idle.
- To ensure that tenant service level objectives (SLOs) are met, you can monitor reservations through Cloud Logging and the BigQuery information schema .
- This project acts as the BigQuery reservations admininistration project , enabling organization-wide sharing of slots.

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Use administrative jobs explorer As a BigQuery administrator, you can use the administrative jobs explorer to help you monitor jobs activity across your organization.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- From the administrative jobs explorer, you can view the BigQuery details page.

