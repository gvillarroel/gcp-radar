---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.001Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Change Streams NEW_VALUES and NEW_ROW data capture modes"
feature_slug: "spanner-change-streams-new-values-and-new-row-data-capture-modes"
latest_feature_date: "2022-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/changelog.html"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/spanner"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "spanner"
  - "change"
  - "streams"
  - "new"
  - "values"
  - "and"
  - "row"
  - "capture"
---

# Spanner Change Streams NEW_VALUES and NEW_ROW data capture modes

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Change Streams added NEW_VALUES and NEW_ROW change-record capture modes, with NEW_VALUES capturing only new non-key values and NEW_ROW capturing the full new row, while keys remain always included and old values are not captured.

## Extended Definition

Spanner Change Streams added NEW_VALUES and NEW_ROW change-record capture modes, with NEW_VALUES capturing only new non-key values and NEW_ROW capturing the full new row, while keys remain always included and old values are not captured.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/changelog.html](https://googleapis.dev/python/django-google-spanner/latest/changelog.html)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/spanner](https://docs.cloud.google.com/iam/docs/roles-permissions/spanner)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### Changelog — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/changelog.html](https://googleapis.dev/python/django-google-spanner/latest/changelog.html)
- Source ID: `site-python-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Changelog — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/changelog.html This change removes it from this repo and bumps the dependency on python-spanner to 2.0.0, the first released version to include DBAPI.

### Spanner roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/spanner](https://docs.cloud.google.com/iam/docs/roles-permissions/spanner)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Spanner roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/spanner This page lists the IAM roles and permissions for Spanner.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

