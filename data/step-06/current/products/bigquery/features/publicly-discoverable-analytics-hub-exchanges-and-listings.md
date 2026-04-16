---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.444Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Publicly discoverable Analytics Hub exchanges and listings"
feature_slug: "publicly-discoverable-analytics-hub-exchanges-and-listings"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
keywords:
  - "publicly"
  - "discoverable"
  - "analytics"
  - "hub"
  - "exchanges"
  - "listings"
  - "can"
  - "made"
---

# Publicly discoverable Analytics Hub exchanges and listings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub exchanges and listings can be made publicly discoverable.

## Extended Definition

Analytics Hub exchanges and listings can be made publicly discoverable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)

## Supporting Pages

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax DataExchange resources can't be publicly discoverable. name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceDataExchangeDiscovery resource types : analyticshub.googleapis.com/DataExchange method types : - CREATE - UPDATE condition : resource.discoveryType == 'DISCOVERY TYPE PUBLIC' action type : DENY display name : Reject public DataExchanges. description : All DataExchange resources must be private.
- The Listing resource can't be publicly discoverable. name : organizations/ ORGANIZATION ID /customConstraints/custom.noPublicListing resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : resource.discoveryType == 'DISCOVERY TYPE PUBLIC' action type : DENY display name : Reject public Listings. description : All Listing resources must be undiscoverable.
- Before you begin, you must have the following: Your organization ID A project ID Create the constraint To create a custom constraint, follow these steps: Save the following file as constraint-enforce-dataExchangeDiscovery.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceDataExchangeDiscovery resourceTypes : - analyticshub.googleapis.com/DataExchange methodTypes : - CREATE condition : "resource.discoveryType == 'DISCOVERY TYPE PUBLIC'" actionType : DENY displayName : Reject public DataExchanges. description : All DataExchange resources must be private.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-enforce-dataExchangeDiscovery.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.enforceDataExchangeDiscovery DENY CREATE,UPDATE analyticshub.googleapis.com/DataExchange Reject public DataExchanges. ...

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Publicly discoverable exchanges can't have private listings due to permission inheritance, but private exchanges can have public listings.
- Publicly discoverable exchanges can't have private listings due to permission inheritance, but private exchanges can have public listings.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .
- DELETE https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE ID /listings/ LISTING ID For more information about the tasks that you can perform on listings using APIs, see projects.locations.dataExchanges.listings methods .

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- POST https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE ID /listings/ LISTING ID :subscribe Replace the following: PROJECT ID : the project ID of the listing that you want to subscribe to.
- View and subscribe to listings and data exchanges This document describes how to view and subscribe to listings and data exchanges in BigQuery sharing (formerly Analytics Hub).
- Subscribe to data exchanges : BigQuery User ( roles/bigquery.user ) To subscribe to data exchanges in the context of data clean room exchanges, you must also ask the BigQuery sharing exchange publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on the specific data clean room.

