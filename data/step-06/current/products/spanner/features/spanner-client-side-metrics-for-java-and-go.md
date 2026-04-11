---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.879Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner client-side metrics for Java and Go"
feature_slug: "spanner-client-side-metrics-for-java-and-go"
latest_feature_date: "2024-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
  - "https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter"
keywords:
  - "spanner"
  - "client"
  - "side"
  - "metrics"
  - "for"
  - "java"
  - "and"
  - "go"
---

# Spanner client-side metrics for Java and Go

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added client-side metrics support for Java and Go applications, available in Java client library v6.81.0+ and Go client library v1.71.0+.

## Extended Definition

Spanner added client-side metrics support for Java and Go applications, available in Java client library v6.81.0+ and Go client library v1.71.0+.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)

## Supporting Pages

### Class SpannerPool (6.103.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- Source ID: `site-java-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SpannerPool (6.103.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool The SpannerPool keeps track of which Spanner objects have been opened by connections during the lifetime of the JVM, which connections are still opened and closed, and which Spanner objects could be closed.

### Class SpannerClient (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SpannerClient (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Package com.google.cloud.spanner.pgadapter (0.27.1) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- Source ID: `site-java-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package com.google.cloud.spanner.pgadapter (0.27.1) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter This ConnectionHandler uses WireMessage to receive and send all messages from and to the client, using the intermediate representation IntermediateStatement that servers as a middle layer between Postgres and Spanner.

