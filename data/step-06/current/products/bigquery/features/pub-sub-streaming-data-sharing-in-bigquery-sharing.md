---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.345Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Pub/Sub streaming data sharing in BigQuery sharing"
feature_slug: "pub-sub-streaming-data-sharing-in-bigquery-sharing"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging"
keywords:
  - "pub"
  - "sub"
  - "streaming"
  - "sharing"
  - "bigquery"
  - "can"
  - "share"
  - "additional"
---

# Pub/Sub streaming data sharing in BigQuery sharing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery sharing can share Pub/Sub streaming data with additional client library support and provider usage metrics.

## Extended Definition

BigQuery sharing can share Pub/Sub streaming data with additional client library support and provider usage metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)

## Supporting Pages

### Stream sharing with Pub/Sub \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- Source ID: `site-docs-reference-5`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stream sharing with Pub/Sub You can share Pub/Sub topics through BigQuery sharing (formerly Analytics Hub) to curate and distribute a library of streaming data across multiple internal and external organizational boundaries.
- Real-time streaming data is shared using BigQuery sharing exchanges and listings, which lets you logically categorize and group large sets of Pub/Sub topics and provision access at scale.
- Pricing Pub/Sub topic publishers incur no additional charge to list and share topics through BigQuery sharing.
- Revoke a subscription To remove a subscription to a shared topic listing from BigQuery sharing, select one of the following options: Console To list shared topic subscribers for a listing, follow the Google Cloud console instructions in View all subscriptions .

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Shared topics A shared topic is a Pub/Sub topic , which is the unit of streaming data sharing in BigQuery .
- BigQuery sharing supports the following Google Cloud resources: BigQuery datasets Pub/Sub topics Publisher workflow The following diagram describes how a publisher shares assets: The following sections describe the features in this workflow.
- Introduction to BigQuery sharing BigQuery sharing (formerly Analytics Hub) is a data exchange platform that lets you share data and insights at scale across organizational boundaries with a robust security and privacy framework.
- As an Analytics Hub Viewer, you can browse through the shared resources that you have access to in BigQuery sharing and make a request to the publisher to access the shared data.

### Sharing audit logging \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetIamPolicy google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetSubscription google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListDataExchanges google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListListings google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListOrgDataExchanges google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSharedResourceSubscriptions google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSubscriptions google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.GetDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.GetIamPolicy google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.GetListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.ListDataExchanges google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.ListListings google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.ListOrgDataExchanges google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.SubscribeListing ADMIN WRITE google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.CreateDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.CreateListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteSubscription (LRO) google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription (LRO) google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RevokeSubscription google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SetIamPolicy google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeDataExchange (LRO) google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.UpdateDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.UpdateListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.CreateDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.CreateListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.DeleteDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.DeleteListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.SetIamPolicy google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.UpdateDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.UpdateListing API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for BigQuery sharing. google.cloud.bigquery.analyticshub.v1.AnalyticsHubService The following audit logs are associated with methods belonging to google.cloud.bigquery.analyticshub.v1.AnalyticsHubService .
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListOrgDataExchanges" ListSharedResourceSubscriptions Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSharedResourceSubscriptions Audit log type : Data access Permissions : analyticshub.listings.viewSubscriptions - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSharedResourceSubscriptions" ListSubscriptions Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSubscriptions Audit log type : Data access Permissions : analyticshub.subscriptions.list - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSubscriptions" RefreshSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription Audit log type : Admin activity Permissions : analyticshub.subscriptions.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription" RevokeSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RevokeSubscription Audit log type : Admin activity Permissions : analyticshub.dataExchanges.update - ADMIN WRITE analyticshub.listings.update - ADMIN WRITE Method is a long-running or streaming operation : No.

