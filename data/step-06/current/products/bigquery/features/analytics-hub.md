---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.691Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub"
feature_slug: "analytics-hub"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
keywords:
  - "analytics"
  - "hub"
  - "lets"
  - "organizations"
  - "create"
  - "secure"
  - "exchanges"
  - "share"
---

# Analytics Hub

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub lets organizations create secure data exchanges and share analytics assets through publishable listings.

## Extended Definition

Analytics Hub lets organizations create secure data exchanges and share analytics assets through publishable listings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)

## Supporting Pages

### Manage data exchanges \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- Source ID: `site-docs-reference-5`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To view data exchanges in your organization, use the organizations.locations.dataExchanges.list method : GET https://analyticshub.googleapis.com/v1/organizations/ ORGANIZATION ID /location/ LOCATION /dataExchanges Replace the following: ORGANIZATION ID : the organization ID.
- POST https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges?dataExchangeId= DATAEXCHANGE ID Replace the following: PROJECT ID : the ID of the project where you want to create the data exchange.
- DELETE https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /dataExchanges/ DATAEXCHANGE ID Replace the following: PROJECT ID : the ID of the project in which you want to create the data exchange.
- Create BigQuery sharing administrators To manage data exchanges, create data exchange administrators by granting users the Analytics Hub Admin role ( roles/analyticshub.admin ) at the project or data exchange level.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Analytics Hub Admin role lets you create multiple data exchanges and manage other users performing sharing tasks.
- Introduction to BigQuery sharing BigQuery sharing (formerly Analytics Hub) is a data exchange platform that lets you share data and insights at scale across organizational boundaries with a robust security and privacy framework.
- As an Analytics Hub Admin, you can create data exchanges that enable data sharing, and then give permissions to data publishers and subscribers to access these data exchanges.
- If you want employees to only update, delete, and share listings, but not create them, grant them the Analytics Hub Listing Admin role ( roles/analyticshub.listingAdmin ).

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- POST https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE ID /listings?listingId= LISTING ID Replace the following: PROJECT ID : the project ID that contains the data exchange in which you want to create the listing.
- Analytics Hub Admin role ( roles/analyticshub.admin ), which lets you create, update, delete, and set IAM policies on all listings in your data exchange.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .

