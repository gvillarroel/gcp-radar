---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.851Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner Java and Go client-side AFE/GFE metrics"
feature_slug: "cloud-spanner-java-and-go-client-side-afe-gfe-metrics"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
keywords:
  - "spanner"
  - "java"
  - "and"
  - "go"
  - "client"
  - "side"
  - "afe"
  - "gfe"
---

# Cloud Spanner Java and Go client-side AFE/GFE metrics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added new client-side AFE and GFE metrics for Java and Go applications, including connectivity error count and latency metrics for both fronts.

## Extended Definition

Cloud Spanner added new client-side AFE and GFE metrics for Java and Go applications, including connectivity error count and latency metrics for both fronts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)

## Supporting Pages

### Class SpannerPool (6.103.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- Source ID: `site-java-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SpannerPool (6.103.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool The SpannerPool keeps track of which Spanner objects have been opened by connections during the lifetime of the JVM, which connections are still opened and closed, and which Spanner objects could be closed.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Class SpannerClient (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SpannerClient (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

