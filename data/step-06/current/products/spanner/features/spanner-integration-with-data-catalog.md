---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.943Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner integration with Data Catalog"
feature_slug: "spanner-integration-with-data-catalog"
latest_feature_date: "2023-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://googleapis.dev/python/spanner/latest/index.html"
keywords:
  - "spanner"
  - "integration"
  - "with"
  - "catalog"
  - "is"
  - "available"
  - "in"
  - "preview"
---

# Spanner integration with Data Catalog

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner integration with Data Catalog is available in Preview in the europe-central2 region; Spanner is integrated with Data Catalog (Dataplex Universal Catalog) to catalog metadata for Spanner instances, databases, tables, columns, and views.

## Extended Definition

Spanner integration with Data Catalog is available in Preview in the europe-central2 region; Spanner is integrated with Data Catalog (Dataplex Universal Catalog) to catalog metadata for Spanner instances, databases, tables, columns, and views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://googleapis.dev/python/spanner/latest/index.html](https://googleapis.dev/python/spanner/latest/index.html)

## Supporting Pages

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.

### Python Client for Cloud Spanner

- URL: [https://googleapis.dev/python/spanner/latest/index.html](https://googleapis.dev/python/spanner/latest/index.html)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python Client for Cloud Spanner Source URL: https://googleapis.dev/python/spanner/latest/index.html Cloud Spanner is the world’s first fully managed relational database service to offer both strong consistency and horizontal scalability for mission-critical online transaction processing (OLTP) applications.

