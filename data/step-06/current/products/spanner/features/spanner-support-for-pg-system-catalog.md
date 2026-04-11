---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.883Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner support for pg_system_catalog"
feature_slug: "spanner-support-for-pg-system-catalog"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "spanner"
  - "for"
  - "pg"
  - "system"
  - "catalog"
  - "now"
  - "supports"
  - "subset"
---

# Spanner support for pg_system_catalog

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports a subset of PostgreSQL pg_system_catalog tables and views.

## Extended Definition

Spanner now supports a subset of PostgreSQL pg_system_catalog tables and views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### Package com.google.cloud.spanner.pgadapter (0.27.1) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- Source ID: `site-java-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package com.google.cloud.spanner.pgadapter (0.27.1) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter This ConnectionHandler uses WireMessage to receive and send all messages from and to the client, using the intermediate representation IntermediateStatement that servers as a middle layer between Postgres and Spanner.

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.
- A stored system procedure contains SQL code that you can reuse.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

