---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.900Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Named schemas"
feature_slug: "named-schemas"
latest_feature_date: "2024-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html"
keywords:
  - "named"
  - "schemas"
  - "is"
  - "now"
  - "generally"
  - "available"
  - "in"
  - "spanner"
---

# Named schemas

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Named schemas is now generally available in Spanner, allowing database objects to be grouped in namespaces to avoid naming conflicts and manage fine-grained access control collectively.

## Extended Definition

Named schemas is now generally available in Spanner, allowing database objects to be grouped in namespaces to avoid naming conflicts and manage fine-grained access control collectively.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

### Introspection API — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html](https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introspection API — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/introspection-api.html A Spanner-specific version of Django introspection utilities.

