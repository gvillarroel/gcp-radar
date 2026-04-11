---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.841Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Data Boost concurrent requests milli-operations per second per region quota"
feature_slug: "spanner-data-boost-concurrent-requests-milli-operations-per-second-per-region-quota"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
keywords:
  - "spanner"
  - "boost"
  - "concurrent"
  - "requests"
  - "milli"
  - "operations"
  - "per"
  - "second"
---

# Spanner Data Boost concurrent requests milli-operations per second per region quota

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Data Boost introduces a concurrent requests quota in milli-operations per second per region, with requests split at 1/1000 granularity for finer sharing of Data Boost resources.

## Extended Definition

Spanner Data Boost introduces a concurrent requests quota in milli-operations per second per region, with requests split at 1/1000 granularity for finer sharing of Data Boost resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Class SpannerClient (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerClient (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

