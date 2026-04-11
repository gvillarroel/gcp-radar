---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.009Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Go database/sql driver"
feature_slug: "spanner-go-database-sql-driver"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
  - "https://googleapis.dev/python/django-google-spanner/latest/changelog.html"
keywords:
  - "spanner"
  - "go"
  - "database"
  - "sql"
  - "driver"
  - "the"
  - "golang"
  - "is"
---

# Spanner Go database/sql driver

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner Golang database/sql driver is now generally available, enabling use of Go's standard database/sql package with Spanner.

## Extended Definition

The Spanner Golang database/sql driver is now generally available, enabling use of Go's standard database/sql package with Spanner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- [https://googleapis.dev/python/django-google-spanner/latest/changelog.html](https://googleapis.dev/python/django-google-spanner/latest/changelog.html)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

### Changelog — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/changelog.html](https://googleapis.dev/python/django-google-spanner/latest/changelog.html)
- Source ID: `site-python-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Changelog — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/changelog.html This change removes it from this repo and bumps the dependency on python-spanner to 2.0.0, the first released version to include DBAPI.

