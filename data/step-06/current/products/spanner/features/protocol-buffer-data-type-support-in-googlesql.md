---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.901Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Protocol Buffer Data Type Support in GoogleSQL"
feature_slug: "protocol-buffer-data-type-support-in-googlesql"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
keywords:
  - "protocol"
  - "buffer"
  - "type"
  - "in"
  - "googlesql"
  - "spanner"
  - "added"
  - "for"
---

# Protocol Buffer Data Type Support in GoogleSQL

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for the protocol buffer data type in GoogleSQL.

## Extended Definition

Spanner added support for the protocol buffer data type in GoogleSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.
- A stored system procedure contains SQL code that you can reuse.

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- For more information, see the Spanner editions overview.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.

