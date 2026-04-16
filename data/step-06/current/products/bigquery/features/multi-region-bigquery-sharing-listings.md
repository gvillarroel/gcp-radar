---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.305Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Multi-region BigQuery sharing listings"
feature_slug: "multi-region-bigquery-sharing-listings"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
keywords:
  - "multi"
  - "region"
  - "bigquery"
  - "sharing"
  - "listings"
  - "supports"
  - "shared"
  - "datasets"
---

# Multi-region BigQuery sharing listings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery sharing supports listings for shared datasets and linked dataset replicas across multiple regions.

## Extended Definition

BigQuery sharing supports listings for shared datasets and linked dataset replicas across multiple regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)

## Supporting Pages

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following limitations apply to listings for multiple regions: Listings for multiple regions are supported only for shared datasets and linked dataset replicas.
- For more information about the BigQuery objects that BigQuery sharing supports, see Shared datasets .
- BigQuery sharing supports the following Google Cloud resources: BigQuery datasets Pub/Sub topics Publisher workflow The following diagram describes how a publisher shares assets: The following sections describe the features in this workflow.
- Limitations BigQuery sharing has the following limitations: A shared dataset can have a maximum of 1,000 linked datasets.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to view the linked datasets linked to a shared dataset in myproject that are in the eu region, use the following query: SELECT FROM myproject.region-eu.INFORMATION SCHEMA.SCHEMATA LINKS; API Use the projects.locations.dataExchanges.listings.listSubscriptions method .
- To create listings or to update replica regions for a listing, you must have the bigquery.datasets.get and bigquery.datasets.update permissions for the datasets where you want to create or update listings.
- Partners that are interested in their listings being in the Featured section of the BigQuery sharing catalog must meet the following criteria: Shared data must reside in BigQuery.
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- View and subscribe to listings and data exchanges This document describes how to view and subscribe to listings and data exchanges in BigQuery sharing (formerly Analytics Hub).
- Note: BigQuery sharing subscribers must authorize shared stored procedures in a linked dataset to read from and write to certain resources owned by the subscriber.
- If your subscription is removed by a BigQuery sharing publisher, then your linked dataset is unlinked from the shared dataset .

