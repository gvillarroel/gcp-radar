---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.249Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored procedure sharing listings"
feature_slug: "stored-procedure-sharing-listings"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
keywords:
  - "stored"
  - "procedure"
  - "sharing"
  - "listings"
  - "bigquery"
  - "can"
  - "now"
  - "include"
---

# Stored procedure sharing listings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery sharing listings can now include SQL stored procedures for sharing.

## Extended Definition

BigQuery sharing listings can now include SQL stored procedures for sharing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)

## Supporting Pages

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- You can share SQL stored procedures when creating listings with BigQuery datasets.
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- If the listing is of a commercial dataset, BigQuery sharing subscribers can either request access to the listing directly from the data provider, or they can browse and purchase Google Cloud Marketplace-integrated commercial listings .
- Even though you can allow Google Cloud users ( allAuthenticatedUsers ) to subscribe to your listings, the listing will remain private and won't show as a public listing on the BigQuery sharing page .

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- SQL stored procedures aren't available in the BigQuery sharing usage metrics dashboard.
- As a publisher, you create or use an existing BigQuery dataset in your project with the following supported objects that you want to deliver to your subscribers: Authorized views Authorized datasets BigQuery ML models External tables Materialized views Routines User-defined functions (UDFs) Table functions SQL stored procedures Tables Table snapshots Views Shared datasets support column-level security and row-level security .
- This limit includes linked Pub/Sub subscriptions and Pub/Sub subscriptions created outside of BigQuery sharing (for example, directly from Pub/Sub).
- You can discover Cloud Marketplace-integrated commercial listings on both BigQuery sharing and Cloud Marketplace.

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .
- Manage Sharing data exchanges and listings using custom constraints Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- BigQuery sharing supported resources The following table lists the BigQuery sharing resources that you can reference in custom constraints.
- Limitations You can set up custom constraints for BigQuery sharing resources only by using the Google Cloud console or Google Cloud CLI.

