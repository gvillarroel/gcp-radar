---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.893Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "PostgreSQL INSERT ON CONFLICT RETURNING support"
feature_slug: "postgresql-insert-on-conflict-returning-support"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html"
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session"
keywords:
  - "postgresql"
  - "insert"
  - "on"
  - "conflict"
  - "returning"
  - "dml"
  - "statements"
  - "in"
---

# PostgreSQL INSERT ON CONFLICT RETURNING support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

PostgreSQL INSERT ... ON CONFLICT DML statements in Spanner now support the RETURNING clause.

## Extended Definition

PostgreSQL INSERT ... ON CONFLICT DML statements in Spanner now support the RETURNING clause.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session)

## Supporting Pages

### Introspection API — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- Source ID: `site-python-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introspection API — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html A Spanner-specific version of Django introspection utilities.

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

### Class Session (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class Session (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.session.Session Representation of a Cloud Spanner Session.

