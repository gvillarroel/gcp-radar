---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.002Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner DML RETURNING and THEN RETURN support"
feature_slug: "spanner-dml-returning-and-then-return-support"
latest_feature_date: "2022-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/rpc-endpoints"
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
keywords:
  - "spanner"
  - "dml"
  - "returning"
  - "and"
  - "then"
  - "return"
  - "added"
  - "in"
---

# Spanner DML RETURNING and THEN RETURN support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Added support in Spanner DML for returning updated rows in the same statement using PostgreSQL RETURNING and Google Standard SQL THEN RETURN.

## Extended Definition

Added support in Spanner DML for returning updated rows in the same statement using PostgreSQL RETURNING and Google Standard SQL THEN RETURN.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)

## Supporting Pages

### Global and regional service endpoints | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Global and regional service endpoints Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/rpc-endpoints This page describes Spanner RPC global and regional endpoints.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

