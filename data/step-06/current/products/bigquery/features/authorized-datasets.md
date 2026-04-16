---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.705Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Authorized datasets"
feature_slug: "authorized-datasets"
latest_feature_date: "2021-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "authorized"
  - "datasets"
  - "let"
  - "bigquery"
  - "share"
  - "dataset"
  - "access"
  - "across"
---

# Authorized datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Authorized datasets let BigQuery share dataset access across authorized resources without granting direct table access.

## Extended Definition

Authorized datasets let BigQuery share dataset access across authorized resources without granting direct table access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supports publishing a BigQuery dataset, called a shared dataset , and its associated authorized views and authorized datasets, to a set of subscribers.
- Create a dataset to contain the view. resource "google bigquery dataset" "view dataset" { dataset id = "view dataset" description = "Dataset that contains the view" location = "us-west1" } Create the view to authorize. resource "google bigquery table" "movie view" { project = google bigquery dataset.view dataset.project dataset id = google bigquery dataset.view dataset.dataset id table id = "movie view" description = "View to authorize" view { query = "SELECT item id, avg(rating) FROM movie project.movie dataset.movie ratings GROUP BY item id ORDER BY item id;" use legacy sql = false } } Authorize the view to access the dataset that the query data originates from. resource "google bigquery dataset access" "view authorization" { project = "movie project" dataset id = "movie dataset" view { project id = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id } } Specify the IAM policy for principals that can access the authorized view.
- To compare these methods in detail, see the following resources: Comparison of authorized views, row-level security, and separate tables Introduction to row-level security Example use cases for row-level security Introduction to column-level access control Share all views in a dataset If you want to give a collection of views access to a dataset without having to authorize each individual view, you can group the views together into a dataset, and then give the dataset that contains the views access to the dataset that contains the data.
- Admin permissions on the second dataset that gives access to the view To update dataset properties, you need the following IAM permissions: bigquery.datasets.update bigquery.datasets.setIamPolicy (only required when updating dataset access controls in the Google Cloud console) The roles/bigquery.dataOwner predefined IAM role includes the permissions that you need to update dataset properties.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy datasets for multiregional configurations Because BigQuery disallows cross-regional queries, you can't use the strategy of segmenting data with authorized views when data marts must exist across multiple regions.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to share data externally and to prevent accidental exposure of BigQuery datasets outside of your internal projects.
- Then colocate the tenant's BigQuery datasets in projects with the dedicated resources that access that data on behalf of the tenant.
- If all queried datasets share the same Google Cloud region, these queries can join data across organizations.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resolution A dataset's access control list can have up to 2,500 total authorized resources, including authorized views , authorized datasets , and authorized functions .
- As a best practice, group related views into authorized datasets when you design new BigQuery architectures, especially multi-tenant architectures.
- If a dataset's access control list exceeds the combined limit for authorized resources, BigQuery returns this error message.
- BigQuery Data Viewer : provides read-only access to datasets, tables, and views.

