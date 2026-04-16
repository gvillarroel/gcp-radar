---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.437Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Administrative jobs explorer"
feature_slug: "administrative-jobs-explorer"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "administrative"
  - "jobs"
  - "explorer"
  - "helps"
  - "users"
  - "quickly"
  - "monitor"
  - "job"
---

# Administrative jobs explorer

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The administrative jobs explorer helps users quickly monitor job activity across their organization.

## Extended Definition

The administrative jobs explorer helps users quickly monitor job activity across their organization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use administrative jobs explorer As a BigQuery administrator, you can use the administrative jobs explorer to help you monitor jobs activity across your organization.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- Jobs explorer removes the need for you to have a deep understanding of INFORMATION SCHEMA , and lets you quickly view job information such as owner, project, slot usage, duration, and more, without the need to write INFORMATION SCHEMA queries.
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.
- Best practice : Check queries using the jobs explorer's slot contention filter to identify those consuming the most slots and optimize them.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- If your organization needs more flexibility, the following options are available: Cloud Composer jobs : you can schedule Cloud Composer jobs to issue ETL jobs that create regional subsets before triggering the BigQuery Data Transfer Service through its client API .
- This design reduces the administrative overhead of having thousands of additional projects and reservations, while allowing your organization to allocate a minimum slot capacity necessary to meet anticipated performance needs for the reservation.
- Commercial enterprises, software as a service (SaaS) vendors, and government organizations must often securely host both internal and third-party data across geographic and administrative boundaries.

