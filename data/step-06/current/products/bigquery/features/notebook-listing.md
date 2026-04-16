---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.486Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Notebook listing"
feature_slug: "notebook-listing"
latest_feature_date: "2024-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings"
keywords:
  - "notebook"
  - "listing"
  - "bigquery"
  - "lets"
  - "users"
  - "view"
  - "list"
  - "all"
---

# Notebook listing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets users view a list of all notebooks in a project.

## Extended Definition

BigQuery lets users view a list of all notebooks in a project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)

## Supporting Pages

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Create a non-authenticated URL for public listing To create a non-authenticated BigQuery sharing listing URL that is viewable to even non-Google Cloud users, do the following: Go to the Sharing (Analytics Hub) page.
- This role lets users view the listing and request access .
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- For more information, see Grant the role for a listing If you disable public discoverability, remove the Analytics Hub Viewer role ( roles/analyticshub.viewer ) from allUsers and allAuthenticatedUsers .

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- View and subscribe to listings and data exchanges This document describes how to view and subscribe to listings and data exchanges in BigQuery sharing (formerly Analytics Hub).
- As a BigQuery sharing subscriber, you can view and subscribe to listings and data exchanges for which you have access.
- In the Filters section, you can filter listings based on the following fields: Listings : select whether you want to view private listings, public listings, or listings within your organization.

### Monitor listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SHARED DATASET USAGE WHERE shared resource type = 'TABLE VALUED FUNCTION' The output is similar to the following: +---------------------+----------------+----------+--------------------+-----------------------+--------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------+ project id dataset id table id num rows processed total bytes processed shared resource id shared resource type referenced tables +---------------------+----------------+----------+--------------------+-----------------------+--------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------+ myproject source dataset 3 45 provider exp TABLE VALUED FUNCTION [{"project id":"myproject","dataset id":"source dataset","table id":"test table","processed bytes":"45"}] +---------------------+----------------+----------+--------------------+-----------------------+--------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------+ What's next Learn how to manage BigQuery sharing listings .
- Get usage metrics for your data exchange If your data exchange and source dataset are in different projects, follow these steps to view the usage metrics for your data exchange: Find all listings that belong to your data exchange.
- Go to Sharing (Analytics Hub) Click the name of the data exchange that contains the listing to view its usage metrics.
- Monitor listings This document describes how to monitor listings in BigQuery sharing (formerly Analytics Hub).

