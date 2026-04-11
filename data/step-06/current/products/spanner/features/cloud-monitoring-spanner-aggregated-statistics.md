---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.012Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Monitoring Spanner aggregated statistics"
feature_slug: "cloud-monitoring-spanner-aggregated-statistics"
latest_feature_date: "2022-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
keywords:
  - "monitoring"
  - "spanner"
  - "aggregated"
  - "statistics"
  - "adds"
  - "ga"
  - "for"
  - "viewing"
---

# Cloud Monitoring Spanner aggregated statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds GA support for viewing aggregated Spanner statistics in Cloud Monitoring, including transactions, reads, queries, and lock contentions.

## Extended Definition

Adds GA support for viewing aggregated Spanner statistics in Cloud Monitoring, including transactions, reads, queries, and lock contentions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)

## Supporting Pages

### Package com.google.cloud.spanner.pgadapter (0.27.1) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- Source ID: `site-java-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package com.google.cloud.spanner.pgadapter (0.27.1) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter This ConnectionHandler uses WireMessage to receive and send all messages from and to the client, using the intermediate representation IntermediateStatement that servers as a middle layer between Postgres and Spanner.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Class SpannerClient (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerClient (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

