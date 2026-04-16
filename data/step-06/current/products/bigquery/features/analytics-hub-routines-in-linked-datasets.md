---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.571Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub routines in linked datasets"
feature_slug: "analytics-hub-routines-in-linked-datasets"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "analytics"
  - "hub"
  - "routines"
  - "linked"
  - "datasets"
  - "supports"
---

# Analytics Hub routines in linked datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub supports using routines in linked datasets.

## Extended Definition

Analytics Hub supports using routines in linked datasets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace](https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Linked datasets support the following objects: Authorized views Authorized datasets Authorized routines Linked Pub/Sub subscriptions Subscribing to a listing with a shared topic creates a linked Pub/Sub subscription in the subscriber project.
- As a publisher, you create or use an existing BigQuery dataset in your project with the following supported objects that you want to deliver to your subscribers: Authorized views Authorized datasets BigQuery ML models External tables Materialized views Routines User-defined functions (UDFs) Table functions SQL stored procedures Tables Table snapshots Views Shared datasets support column-level security and row-level security .
- BigQuery sharing supports the following Google Cloud resources: BigQuery datasets Pub/Sub topics Publisher workflow The following diagram describes how a publisher shares assets: The following sections describe the features in this workflow.
- If you are a publisher, the following BigQuery interoperability limitations apply: You must grant subscribers explicit permissions to read the source dataset to query views within linked datasets.

### "Commercialize listings on Google Cloud Marketplace \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace](https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Linked datasets are supported in Cloud Marketplace-integrated listings.
- This type of BigQuery sharing listing supports shared datasets.
- Required roles To get the permissions that you need to use Cloud Marketplace-integrated listings, ask your administrator to grant you the following IAM roles: Create and manage BigQuery sharing listings: Analytics Hub Admin ( roles/analyticshub.admin ) BigQuery Data Owner ( roles/bigquery.dataOwner ) Service Management Administrator ( roles/servicemanagement.admin ) Create and manage data product listings on Cloud Marketplace: Commerce Producer Admin ( roles/commerceproducer.admin ) Subscribe to paid BigQuery sharing listings on Cloud Marketplace: Billing Account Administrator ( roles/billing.admin ) Analytics Hub Viewer ( roles/analyticshub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Commercialize listings on Google Cloud Marketplace As a BigQuery sharing publisher, you can use the integration of BigQuery sharing (formerly Analytics Hub) with Google Cloud Marketplace to create revenue by listing your own data products on Cloud Marketplace.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Cloud datasets are subject to the same limitations as other linked datasets, such as only being accessible in INFORMATION SCHEMA in dataset-scoped queries.
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Required roles The following roles and permissions are required: Analytics Hub Subscriber ( roles/analyticshub.subscriber ) BigQuery Admin ( roles/bigquery.admin ) Share Data From Data Cloud This documentation demonstrates how to share data from Data Cloud to BigQuery - BYOL Data Shares - Zero-ETL Integration with BigQuery .
- This covers the offline sales, and consists of three tables: nto pos.customers nto pos.products nto pos.orders The following datasets store additional objects: aws data us data Run ad-hoc queries Using BigQuery Omni, you can run ad-hoc queries to analyze the Data Cloud data through the subscribed dataset.

