---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.879Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL ALL_DIFFERENT graph predicate"
feature_slug: "googlesql-all-different-graph-predicate"
latest_feature_date: "2024-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "googlesql"
  - "all"
  - "different"
  - "graph"
  - "predicate"
  - "spanner"
  - "adds"
  - "for"
---

# GoogleSQL ALL_DIFFERENT graph predicate

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds support for the ALL_DIFFERENT graph predicate in GoogleSQL-dialect databases to test whether graph elements in a list are mutually distinct.

## Extended Definition

Spanner adds support for the ALL_DIFFERENT graph predicate in GoogleSQL-dialect databases to test whether graph elements in a list are mutually distinct.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- For more information, see the Spanner editions overview.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

