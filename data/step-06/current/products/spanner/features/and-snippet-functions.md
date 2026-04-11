---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.859Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "and SNIPPET functions"
feature_slug: "and-snippet-functions"
latest_feature_date: "2025-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/spanner"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://googleapis.dev/python/django-google-spanner/latest/changelog.html"
keywords:
  - "and"
  - "snippet"
  - "functions"
  - "the"
  - "search"
  - "score"
  - "now"
  - "an"
---

# and SNIPPET functions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The SEARCH, SCORE, and SNIPPET functions now support an enhance_query option that enables automatic synonym matching and single-word spell correction by default.

## Extended Definition

The SEARCH, SCORE, and SNIPPET functions now support an enhance_query option that enables automatic synonym matching and single-word spell correction by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/spanner](https://docs.cloud.google.com/iam/docs/roles-permissions/spanner)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://googleapis.dev/python/django-google-spanner/latest/changelog.html](https://googleapis.dev/python/django-google-spanner/latest/changelog.html)

## Supporting Pages

### Spanner roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/spanner](https://docs.cloud.google.com/iam/docs/roles-permissions/spanner)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/spanner This page lists the IAM roles and permissions for Spanner.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Changelog — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/changelog.html](https://googleapis.dev/python/django-google-spanner/latest/changelog.html)
- Source ID: `site-python-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Changelog — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/changelog.html This change removes it from this repo and bumps the dependency on python-spanner to 2.0.0, the first released version to include DBAPI.

