---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.049Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Query Introspection Tool"
feature_slug: "spanner-query-introspection-tool"
latest_feature_date: "2020-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "spanner"
  - "query"
  - "introspection"
  - "tool"
  - "added"
  - "an"
  - "that"
  - "shows"
---

# Spanner Query Introspection Tool

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added an introspection tool that shows oldest active queries to help analyze running query performance impact.

## Extended Definition

Spanner added an introspection tool that shows oldest active queries to help analyze running query performance impact.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Introspection API — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introspection API — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html A Spanner-specific version of Django introspection utilities.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

