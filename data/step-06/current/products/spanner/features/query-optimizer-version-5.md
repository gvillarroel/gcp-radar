---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.010Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Query optimizer version 5"
feature_slug: "query-optimizer-version-5"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html"
  - "https://docs.cloud.google.com/spanner/docs/instances"
keywords:
  - "query"
  - "optimizer"
  - "version"
  - "is"
  - "generally"
  - "available"
  - "in"
  - "spanner"
---

# Query optimizer version 5

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Query optimizer version 5 is generally available in Spanner and is the default optimizer version; Made Query Optimizer version 5 generally available for Spanner query planning, while noting version 4 remains the production default.

## Extended Definition

Query optimizer version 5 is generally available in Spanner and is the default optimizer version; Made Query Optimizer version 5 generally available for Spanner query planning, while noting version 4 remains the production default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Introspection API — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- Source ID: `site-python-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introspection API — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html A Spanner-specific version of Django introspection utilities.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

