---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.444Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Pub/Sub sharing in Analytics Hub"
feature_slug: "pub-sub-sharing-in-analytics-hub"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles"
keywords:
  - "pub"
  - "sub"
  - "sharing"
  - "analytics"
  - "hub"
  - "lets"
  - "publishers"
  - "share"
---

# Pub/Sub sharing in Analytics Hub

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub lets data publishers share Pub/Sub topics and manage subscriptions.

## Extended Definition

Analytics Hub lets data publishers share Pub/Sub topics and manage subscriptions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)

## Supporting Pages

### Stream sharing with Pub/Sub \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- Source ID: `site-docs-reference-5`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage subscriptions To let a user subscribe to a listing with a shared topic, grant them the Analytics Hub Subscriber ( roles/analyticshub.subscriber ) and Analytics Hub Subscription Owner ( roles/analyticshub.subscriptionOwner ) roles on a specific listing: Go to the Sharing (Analytics Hub) page.
- Stream sharing with Pub/Sub You can share Pub/Sub topics through BigQuery sharing (formerly Analytics Hub) to curate and distribute a library of streaming data across multiple internal and external organizational boundaries.
- Real-time streaming data is shared using BigQuery sharing exchanges and listings, which lets you logically categorize and group large sets of Pub/Sub topics and provision access at scale.
- Create a listing (to add a shared topic) To add a shared topic to a listing, select one of the following options: Console Go to the Sharing (Analytics Hub) page.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Introduction to BigQuery sharing BigQuery sharing (formerly Analytics Hub) is a data exchange platform that lets you share data and insights at scale across organizational boundaries with a robust security and privacy framework.
- Analytics Hub Identity and Access Management (IAM) roles let you perform the following sharing tasks: As an Analytics Hub Publisher, you can share data with your partner network or within your own organization in real time.
- The separation of compute and storage in the BigQuery architecture lets data publishers share datasets with as many subscribers as they want, without having to make multiple copies of the data.
- As an Analytics Hub Viewer, you can browse through the shared resources that you have access to in BigQuery sharing and make a request to the publisher to access the shared data.

### Configure BigQuery sharing roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analytics Hub Subscriber and Viewer roles To view and subscribe to listings and data exchanges , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Subscriber role ( roles/analyticshub.subscriber ), which lets users view and subscribe to listings.
- Analytics Hub Publisher and Listing Admin roles To manage listings , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets users do the following: Create, update, and delete listings.
- Analytics Hub Subscription Owner role To manage subscriptions , Sharing provides the following predefined role that you can grant at the project level: Analytics Hub Subscription Owner role ( roles/analyticshub.subscriptionOwner ), which lets users manage their subscriptions.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.publisher role to group:publishers@example.com , add the following binding to the policy: { "members": [ "group:publishers@example.com" ], "role":"roles/analyticshub.publisher" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .

