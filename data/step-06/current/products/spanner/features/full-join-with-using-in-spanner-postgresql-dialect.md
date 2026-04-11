---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.929Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "FULL JOIN with USING in Spanner PostgreSQL dialect"
feature_slug: "full-join-with-using-in-spanner-postgresql-dialect"
latest_feature_date: "2023-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
keywords:
  - "full"
  - "join"
  - "with"
  - "using"
  - "in"
  - "spanner"
  - "postgresql"
  - "dialect"
---

# FULL JOIN with USING in Spanner PostgreSQL dialect

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds support for FULL JOIN with the USING clause in PostgreSQL-dialect databases.

## Extended Definition

Spanner adds support for FULL JOIN with the USING clause in PostgreSQL-dialect databases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)

## Supporting Pages

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

