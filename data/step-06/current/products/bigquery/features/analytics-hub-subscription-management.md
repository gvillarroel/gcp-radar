---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.464Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub subscription management"
feature_slug: "analytics-hub-subscription-management"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
keywords:
  - "analytics"
  - "hub"
  - "subscription"
  - "management"
  - "lets"
  - "publishers"
  - "manage"
  - "subscriptions"
---

# Analytics Hub subscription management

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub Subscription Management lets data publishers manage subscriptions, inspect subscribers, and revoke access to shared data; Analytics Hub subscription management adds a subscription resource that represents the connection between a shared resource and a linked dataset.

## Extended Definition

Analytics Hub Subscription Management lets data publishers manage subscriptions, inspect subscribers, and revoke access to shared data; Analytics Hub subscription management adds a subscription resource that represents the connection between a shared resource and a linked dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)

## Supporting Pages

### Manage subscriptions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage subscriptions This document describes how to manage subscriptions in BigQuery sharing (formerly Analytics Hub), covering tasks for both subscribers and publishers.
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To get the permissions that you need to manage subscriptions, ask your administrator to grant you the Analytics Hub Subscription Owner ( roles/analyticshub.subscriptionOwner ) IAM role on the project.
- Publisher workflows for managing subscriptions This section describes how BigQuery sharing publishers manage subscriptions.
- To enable the Analytics Hub API, you need the following Identity and Access Management (IAM) permissions: serviceUsage.services.get serviceUsage.services.list serviceUsage.services.enable The following predefined IAM role includes the permissions that you need to enable the Analytics Hub API: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To enable the Analytics Hub API, select one of the following options: Console Go to the Analytics Hub API page and enable the Analytics Hub API for your Google Cloud project.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publishers can manage subscriptions both in Pub/Sub directly or through BigQuery sharing subscription management.
- Analytics Hub Identity and Access Management (IAM) roles let you perform the following sharing tasks: As an Analytics Hub Publisher, you can share data with your partner network or within your own organization in real time.
- You can manage your subscriptions by using the Subscription resource , which stores relevant information about the subscriber and represents the connection between publisher and subscriber.
- Manage BigQuery sharing publishers by granting the Analytics Hub Publisher role ( roles/analyticshub.publisher ) to your organization's employees.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- For Cloud Marketplace-integrated listings, the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) doesn't need to be granted, as subscriptions are automatically governed and managed based on the Cloud Marketplace order.
- Go to Sharing (Analytics Hub) Click the data exchange name that contains the listing for which you want to manage the subscriptions.
- To enable the Analytics Hub API, you need the following Identity and Access Management (IAM) permissions: serviceUsage.services.get serviceUsage.services.list serviceUsage.services.enable The following predefined IAM role includes the permissions that you need to enable the Analytics Hub API: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To enable the Analytics Hub API, select one of the following options: Console Go to the Analytics Hub API page and enable the Analytics Hub API for your Google Cloud project.

