---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.871Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner multiplexed sessions"
feature_slug: "spanner-multiplexed-sessions"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter"
keywords:
  - "spanner"
  - "multiplexed"
  - "sessions"
  - "java"
  - "and"
  - "go"
  - "clients"
  - "now"
---

# Spanner multiplexed sessions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Java and Go clients now support multiplexed sessions, allowing concurrent requests over a single session and eliminating the need to set fixed minimum or maximum session counts.

## Extended Definition

Spanner Java and Go clients now support multiplexed sessions, allowing concurrent requests over a single session and eliminating the need to set fixed minimum or maximum session counts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)

## Supporting Pages

### Class SpannerPool (6.103.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- Source ID: `site-java-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SpannerPool (6.103.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool The SpannerPool keeps track of which Spanner objects have been opened by connections during the lifetime of the JVM, which connections are still opened and closed, and which Spanner objects could be closed.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Package com.google.cloud.spanner.pgadapter (0.27.1) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- Source ID: `site-java-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package com.google.cloud.spanner.pgadapter (0.27.1) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter This ConnectionHandler uses WireMessage to receive and send all messages from and to the client, using the intermediate representation IntermediateStatement that servers as a middle layer between Postgres and Spanner.

