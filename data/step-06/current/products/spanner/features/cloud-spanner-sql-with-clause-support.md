---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.077Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner SQL WITH clause support"
feature_slug: "cloud-spanner-sql-with-clause-support"
latest_feature_date: "2019-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
keywords:
  - "spanner"
  - "sql"
  - "with"
  - "clause"
  - "query"
  - "language"
  - "now"
  - "supports"
---

# Cloud Spanner SQL WITH clause support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner SQL query language now supports the WITH clause, allowing subquery results to be bound to temporary tables for cleaner and faster complex queries.

## Extended Definition

Cloud Spanner SQL query language now supports the WITH clause, allowing subquery results to be bound to temporary tables for cleaner and faster complex queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)

## Supporting Pages

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

### GQL overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GQL overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/graph-intro Documentation · Databases · Spanner · Reference · Send feedback · Graph Query Language (GQL) is a language designed to query graph data.
- In GQL, a statement refers to a complete unit of execution, and a clause represents a modifier to statements.

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.
- A stored system procedure contains SQL code that you can reuse.

