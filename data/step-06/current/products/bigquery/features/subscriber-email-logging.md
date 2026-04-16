---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.265Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Subscriber email logging"
feature_slug: "subscriber-email-logging"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
keywords:
  - "subscriber"
  - "email"
  - "logging"
  - "records"
  - "principal"
  - "identifiers"
  - "users"
  - "who"
---

# Subscriber email logging

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Subscriber email logging records the principal identifiers of users who run jobs and queries against linked datasets; Subscriber email logging records principal identifiers for users who run jobs and queries against linked datasets.

## Extended Definition

Subscriber email logging records the principal identifiers of users who run jobs and queries against linked datasets; Subscriber email logging records principal identifiers for users who run jobs and queries against linked datasets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)

## Supporting Pages

### Manage data exchanges \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- Source ID: `site-docs-reference-5`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To log the principal identifiers of all users running jobs and queries on linked datasets, click the Subscriber Email Logging toggle.
- Note: When managing access for users in external identity providers , replace instances of Google Account principal identifiers—like user:kiran@example.com , group:support@example.com , and domain:example.com —with appropriate Workforce Identity Federation principal identifiers .
- If you enable subscriber email logging with the logLinkedDatasetQueryUserEmail field, the data exchange response contains log linked dataset query user email: true .
- To disable email logging, delete the data exchange and recreate it without clicking the Subscriber Email Logging toggle.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscriber Email Logging : turn on logging of the principal identifiers of all users running jobs and queries on linked datasets.
- Subscriber Email Logging : turn on logging of the principal identifiers of subscribers running jobs and queries on this listing's linked dataset for all future subscriptions.
- If you enable subscriber email logging with the logLinkedDatasetQueryUserEmail field, the listing response contains log linked dataset query user email: true .
- To disable email logging, delete the listing and recreate it without clicking the Subscriber Email Logging toggle.

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If you enable subscriber email logging for the data exchange or listing with the logLinkedDatasetQueryUserEmail field, the subscription response contains log linked dataset query user email: true .
- If you have enabled subscriber email logging ( Preview ) for the data exchange, the subscription response contains log linked dataset query user email: true .
- The dialog shows if the provider enabled subscriber email logging.
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.

