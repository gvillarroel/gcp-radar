---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.650Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub publisher subscription management"
feature_slug: "analytics-hub-publisher-subscription-management"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles"
keywords:
  - "analytics"
  - "hub"
  - "publisher"
  - "subscription"
  - "management"
  - "publishers"
  - "can"
  - "view"
---

# Analytics Hub publisher subscription management

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub publishers can view subscriptions to a listing and remove subscriptions from that listing.

## Extended Definition

Analytics Hub publishers can view subscriptions to a listing and remove subscriptions from that listing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)

## Supporting Pages

### Manage subscriptions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage subscriptions This document describes how to manage subscriptions in BigQuery sharing (formerly Analytics Hub), covering tasks for both subscribers and publishers.
- BigQuery sharing publishers can do the following: View all subscriptions to your listing.
- If a publisher revokes a subscription from a multi-region listing ( Preview ), subscribers can no longer query any primary or secondary linked dataset replicas.
- Publisher workflows for managing subscriptions This section describes how BigQuery sharing publishers manage subscriptions.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publishers can manage subscriptions both in Pub/Sub directly or through BigQuery sharing subscription management.
- Analytics Hub Identity and Access Management (IAM) roles let you perform the following sharing tasks: As an Analytics Hub Publisher, you can share data with your partner network or within your own organization in real time.
- As an Analytics Hub Viewer, you can browse through the shared resources that you have access to in BigQuery sharing and make a request to the publisher to access the shared data.
- As an Analytics Hub Admin, you can create data exchanges that enable data sharing, and then give permissions to data publishers and subscribers to access these data exchanges.

### Configure BigQuery sharing roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- Source ID: `site-docs-reference-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Select a role menu, select Analytics Hub , and then select one of the following Identity and Access Management (IAM) roles: Analytics Hub Admin Analytics Hub Listing Admin Analytics Hub Publisher Analytics Hub Subscriber Analytics Hub Subscription Owner Analytics Hub Viewer Click Save .
- In the Select a role menu, select Analytics Hub , and then select one of the following Identity and Access Management (IAM) roles: Analytics Hub Admin Analytics Hub Listing Admin Analytics Hub Publisher Analytics Hub Subscriber Analytics Hub Subscription Owner Analytics Hub Viewer Click Save .
- For example: Google Account email: test-user@gmail.com Google group: admins@googlegroups.com Service account: server@example.gserviceaccount.com Google Workspace domain: example.com In the Select a role list, hold the pointer over Analytics Hub and select one of the following roles: Analytics Hub Admin Analytics Hub Listing Admin Analytics Hub Publisher Analytics Hub Subscriber Analytics Hub Subscription Owner Analytics Hub Viewer Optional: To further control access to Google Cloud resources, add a conditional role binding .
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.publisher role to group:publishers@example.com , add the following binding to the policy: { "members": [ "group:publishers@example.com" ], "role":"roles/analyticshub.publisher" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .

