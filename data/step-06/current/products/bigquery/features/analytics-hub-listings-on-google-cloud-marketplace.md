---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.393Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub listings on Google Cloud Marketplace"
feature_slug: "analytics-hub-listings-on-google-cloud-marketplace"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
keywords:
  - "analytics"
  - "hub"
  - "listings"
  - "marketplace"
  - "can"
  - "discovered"
  - "procured"
  - "commercialized"
---

# Analytics Hub listings on Google Cloud Marketplace

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub listings can be discovered, procured, and commercialized through Google Cloud Marketplace.

## Extended Definition

Analytics Hub listings can be discovered, procured, and commercialized through Google Cloud Marketplace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace](https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)

## Supporting Pages

### "Commercialize listings on Google Cloud Marketplace \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace](https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use Cloud Marketplace-integrated listings, ask your administrator to grant you the following IAM roles: Create and manage BigQuery sharing listings: Analytics Hub Admin ( roles/analyticshub.admin ) BigQuery Data Owner ( roles/bigquery.dataOwner ) Service Management Administrator ( roles/servicemanagement.admin ) Create and manage data product listings on Cloud Marketplace: Commerce Producer Admin ( roles/commerceproducer.admin ) Subscribe to paid BigQuery sharing listings on Cloud Marketplace: Billing Account Administrator ( roles/billing.admin ) Analytics Hub Viewer ( roles/analyticshub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Commercialize listings on Google Cloud Marketplace As a BigQuery sharing publisher, you can use the integration of BigQuery sharing (formerly Analytics Hub) with Google Cloud Marketplace to create revenue by listing your own data products on Cloud Marketplace.
- Architecture and terminology The following diagram shows the interaction between Cloud Marketplace and BigQuery sharing for commercial listings: Data product on Cloud Marketplace A Cloud Marketplace data product listing is created by selecting a BigQuery sharing listing, choosing a pricing model, and submitting the product to Cloud Marketplace for review.
- Create a Cloud Marketplace-integrated listing To create a BigQuery sharing listing and publish it on Cloud Marketplace, do the following: In the Google Cloud console, go to the Sharing (Analytics Hub) page.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Note: After you grant licenses to users to access non-Cloud Marketplace-integrated commercial listings, you can either create a private listing for those users, or grant those users the Analytics Hub Subscriber ( roles/analyticshub.subscriber ) role for your commercial listing.
- For Select a role , hold the pointer over Analytics Hub , and then based on the type of listing, select one of the following roles: For a commercial listing (including Cloud Marketplace-integrated listings), select the Analytics Hub Viewer role.
- For Cloud Marketplace-integrated listings, the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) doesn't need to be granted, as subscriptions are automatically governed and managed based on the Cloud Marketplace order.
- For Cloud Marketplace-integrated commercial listings , the Analytics Hub Subscriber role is automatically provisioned based on the Cloud Marketplace orders.

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- POST https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE ID /listings/ LISTING ID :subscribe Replace the following: PROJECT ID : the project ID of the listing that you want to subscribe to.
- However, you can recreate the deleted linked dataset by subscribing to the listing again and adding the dataset and the linked datasets created from Google Cloud Marketplace-integrated listings to your project.
- View and subscribe to listings and data exchanges This document describes how to view and subscribe to listings and data exchanges in BigQuery sharing (formerly Analytics Hub).

