---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.444Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Featured listings in Analytics Hub catalog"
feature_slug: "featured-listings-in-analytics-hub-catalog"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
keywords:
  - "featured"
  - "listings"
  - "analytics"
  - "hub"
  - "catalog"
  - "can"
  - "highlight"
  - "section"
---

# Featured listings in Analytics Hub catalog

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub can highlight listings in the Featured section of the catalog.

## Extended Definition

Analytics Hub can highlight listings in the Featured section of the catalog.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)

## Supporting Pages

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partners that are interested in their listings being in the Featured section of the BigQuery sharing catalog must meet the following criteria: Shared data must reside in BigQuery.
- Display a listing in the featured section To increase visibility and awareness of your listing in the BigQuery sharing catalog, listings can be displayed in the Featured section.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- POST https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE ID /listings/ LISTING ID :subscribe Replace the following: PROJECT ID : the project ID of the listing that you want to subscribe to.
- In the Filters section, you can filter listings based on the following fields: Listings : select whether you want to view private listings, public listings, or listings within your organization.
- In the Filters section, you can filter data clean room exchanges based on the following fields: Listings : select the Clean rooms checkbox to view the data clean rooms shared with you.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Subscriber workflow The following diagram describes how Analytics Hub subscribers interact with shared resources: The following sections describe the features in the subscriber workflow.
- If you want employees to only update, delete, and share listings, but not create them, grant them the Analytics Hub Listing Admin role ( roles/analyticshub.listingAdmin ).
- If you want vendors to only view available exchanges and listings, grant them the Analytics Hub Viewer role ( roles/analyticshub.viewer ).
- You can build a catalog of analytics-ready data sources with granular permissions that let you deliver data to the right audiences.

