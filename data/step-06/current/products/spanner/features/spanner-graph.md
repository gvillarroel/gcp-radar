---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.887Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Graph"
feature_slug: "spanner-graph"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
keywords:
  - "spanner"
  - "graph"
  - "introduced"
  - "in"
  - "preview"
  - "adding"
  - "purpose"
  - "built"
---

# Spanner Graph

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduced Spanner Graph in preview, adding purpose-built graph database capabilities to Spanner with a GQL-compatible query interface and interoperability between relational and graph models.

## Extended Definition

Introduced Spanner Graph in preview, adding purpose-built graph database capabilities to Spanner with a GQL-compatible query interface and interoperability between relational and graph models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)

## Supporting Pages

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- For more information, see the Spanner editions overview.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.

### GQL overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GQL overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro Documentation · Databases · Spanner · Reference · Send feedback · Graph Query Language (GQL) is a language designed to query graph data.
- In GQL, a statement refers to a complete unit of execution, and a clause represents a modifier to statements.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

