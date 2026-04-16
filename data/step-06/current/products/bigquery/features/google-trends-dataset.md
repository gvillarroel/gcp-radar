---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.733Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Trends dataset"
feature_slug: "google-trends-dataset"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "trends"
  - "dataset"
  - "provides"
  - "bigquery"
  - "accessible"
  - "trend"
  - "through"
  - "marketplace"
---

# Google Trends dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Google Trends dataset provides BigQuery-accessible trend data through Google Cloud Marketplace; The Google Trends dataset provides BigQuery-accessible trend data through Google Cloud Marketplace.

## Extended Definition

The Google Trends dataset provides BigQuery-accessible trend data through Google Cloud Marketplace; The Google Trends dataset provides BigQuery-accessible trend data through Google Cloud Marketplace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace](https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Commercialize listings on Google Cloud Marketplace \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace](https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use Cloud Marketplace-integrated listings, ask your administrator to grant you the following IAM roles: Create and manage BigQuery sharing listings: Analytics Hub Admin ( roles/analyticshub.admin ) BigQuery Data Owner ( roles/bigquery.dataOwner ) Service Management Administrator ( roles/servicemanagement.admin ) Create and manage data product listings on Cloud Marketplace: Commerce Producer Admin ( roles/commerceproducer.admin ) Subscribe to paid BigQuery sharing listings on Cloud Marketplace: Billing Account Administrator ( roles/billing.admin ) Analytics Hub Viewer ( roles/analyticshub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Architecture and terminology The following diagram shows the interaction between Cloud Marketplace and BigQuery sharing for commercial listings: Data product on Cloud Marketplace A Cloud Marketplace data product listing is created by selecting a BigQuery sharing listing, choosing a pricing model, and submitting the product to Cloud Marketplace for review.
- Cloud Marketplace-integrated listing on BigQuery sharing A BigQuery sharing listing becomes a Cloud Marketplace-integrated listing when the Cloud Marketplace data product listing is approved and published, creating an integration link between sharing and Cloud Marketplace and making the listing eligible for purchase.
- To delete a Cloud Marketplace-integrated listing from BigQuery sharing and Cloud Marketplace, do the following: Revoke all commercial subscriptions for your Cloud Marketplace-integrated listing by following the same process that you would use for a data exchange .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Integrate with BigQuery Accessing Google BigQuery dataset using Xplenty Partner Advantage page Direct link Keboola Solution Keboola Platform Category ETL & Data Integration Description Keboola's Data Stack as a Service provides the first complete solution for gathering, combining and enhancing data for analytics and is deployed by, and partners with, some of the world's leading brands.
- Partner references Consuming data from BigQuery Connecting to BigQuery through a BigQuery Dataset Partner Advantage page Direct link PowerBI Solution Power BI Desktop Category BI, ML, & Advanced Analytics Description Microsoft Power BI is a data analytics and sharing platform that works on-premises or on the cloud.
- Access BigQuery like you would a database: read, write, and update datasets, tables, etc. through a standard ODBC driver interface.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection Sensitive Data Protection provides APIs and scanning utilities that help you identify and mitigate sensitive content that is stored inside BigQuery or Cloud Storage datasets.
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- If your organization needs more flexibility, the following options are available: Cloud Composer jobs : you can schedule Cloud Composer jobs to issue ETL jobs that create regional subsets before triggering the BigQuery Data Transfer Service through its client API .
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to share data externally and to prevent accidental exposure of BigQuery datasets outside of your internal projects.

