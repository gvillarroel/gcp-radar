---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.934Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner UUID primary key default generation"
feature_slug: "spanner-uuid-primary-key-default-generation"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/limitations.html"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
keywords:
  - "spanner"
  - "uuid"
  - "primary"
  - "key"
  - "default"
  - "generation"
  - "adds"
  - "for"
---

# Spanner UUID primary key default generation

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds support for generating UUID v4 values as a PRIMARY KEY DEFAULT expression using GENERATE_UUID in GoogleSQL or generate_uuid() in PostgreSQL dialects.

## Extended Definition

Adds support for generating UUID v4 values as a PRIMARY KEY DEFAULT expression using GENERATE_UUID in GoogleSQL or generate_uuid() in PostgreSQL dialects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/limitations.html](https://googleapis.dev/python/django-google-spanner/latest/limitations.html)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)

## Supporting Pages

### Current limitations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/limitations.html](https://googleapis.dev/python/django-google-spanner/latest/limitations.html)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Current limitations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/limitations.html Spanner doesn’t have support for auto-generating primary key values.
- Therefore, django-google-spanner monkey-patches AutoField to generate a random UUID4.
- It generates a default using Field’s default option which means AutoFields will have a value when a model instance is created.

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

