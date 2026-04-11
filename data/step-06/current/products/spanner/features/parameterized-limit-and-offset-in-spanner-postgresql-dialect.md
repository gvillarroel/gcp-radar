---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.941Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Parameterized LIMIT and OFFSET in Spanner PostgreSQL dialect"
feature_slug: "parameterized-limit-and-offset-in-spanner-postgresql-dialect"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/limitations.html"
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
  - "https://docs.cloud.google.com/spanner/docs/rpc-endpoints"
keywords:
  - "parameterized"
  - "limit"
  - "and"
  - "offset"
  - "in"
  - "spanner"
  - "postgresql"
  - "dialect"
---

# Parameterized LIMIT and OFFSET in Spanner PostgreSQL dialect

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner PostgreSQL dialect now supports parameterized LIMIT and OFFSET operations in queries.

## Extended Definition

Spanner PostgreSQL dialect now supports parameterized LIMIT and OFFSET operations in queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/limitations.html](https://googleapis.dev/python/django-google-spanner/latest/limitations.html)
- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)

## Supporting Pages

### Current limitations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/limitations.html](https://googleapis.dev/python/django-google-spanner/latest/limitations.html)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Current limitations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/limitations.html Spanner doesn’t have support for auto-generating primary key values.
- Therefore, django-google-spanner monkey-patches AutoField to generate a random UUID4.
- It generates a default using Field’s default option which means AutoFields will have a value when a model instance is created.

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

### Global and regional service endpoints | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Global and regional service endpoints Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/rpc-endpoints This page describes Spanner RPC global and regional endpoints.

