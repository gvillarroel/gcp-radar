---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.590Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub data egress restrictions"
feature_slug: "analytics-hub-data-egress-restrictions"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
keywords:
  - "analytics"
  - "hub"
  - "egress"
  - "restrictions"
  - "listings"
  - "can"
  - "restrict"
---

# Analytics Hub data egress restrictions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub listings can restrict data egress.

## Extended Definition

Analytics Hub listings can restrict data egress.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)

## Supporting Pages

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- To apply data egress restrictions on your shared dataset and query results of your shared dataset, select Disable copy and export of query results , which will automatically set Disable copy and export of shared data as well.
- To apply data egress restrictions on your shared dataset and query results of your shared dataset, select Disable copy and export of query results , which will automatically set Disable copy and export of shared data as well.
- To apply data API copy and export egress restrictions on your shared dataset, select Disable copy and export of tables through APIs , which will automatically set Disable copy and export of shared data as well.
- To apply data API copy and export egress restrictions on your shared dataset, select Disable copy and export of tables through APIs , which will automatically set Disable copy and export of shared data as well.

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Listing resource must have the restrictedExportPolicy object enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithRestrictedExportPolicy resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && has(resource.bigqueryDataset.restrictedExportPolicy) && resource.bigqueryDataset.restrictedExportPolicy.enabled == true action type : DENY display name : The Listing must have restricted export policy. description : The Listing resource must have restrictedExportPolicy enabled to allow egress controls.
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .
- The Listing resource can't be publicly discoverable. name : organizations/ ORGANIZATION ID /customConstraints/custom.noPublicListing resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : resource.discoveryType == 'DISCOVERY TYPE PUBLIC' action type : DENY display name : Reject public Listings. description : All Listing resources must be undiscoverable.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: analyticshub.googleapis.com/DataExchange analyticshub.googleapis.com/Listing To learn more about Organization Policy, see Custom organization policies .

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- When data egress is restricted, the following restrictions apply: Copy, clone, export, and snapshot APIs are unavailable.
- If shared datasets in a project are within a VPC Service Controls perimeter, you need appropriate ingress and egress rules for both the exchange project (hosted listings) and all subscriber projects to successfully subscribe to the publisher's listings.
- Don't put your exchange project in a VPC Service Controls perimeter, as it might interrupt publishing workflows, requiring ingress and egress rules for the publisher project and all subscriber projects to successfully subscribe to their listings.
- If you want employees to only update, delete, and share listings, but not create them, grant them the Analytics Hub Listing Admin role ( roles/analyticshub.listingAdmin ).

