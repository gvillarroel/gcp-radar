---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.893Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL STRING_ARRAY function"
feature_slug: "googlesql-string-array-function"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "googlesql"
  - "string"
  - "array"
  - "function"
  - "spanner"
  - "now"
  - "supports"
  - "the"
---

# GoogleSQL STRING_ARRAY function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports the GoogleSQL STRING_ARRAY function to convert a JSON array of strings into a SQL ARRAY.

## Extended Definition

Spanner now supports the GoogleSQL STRING_ARRAY function to convert a JSON array of strings into a SQL ARRAY.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

