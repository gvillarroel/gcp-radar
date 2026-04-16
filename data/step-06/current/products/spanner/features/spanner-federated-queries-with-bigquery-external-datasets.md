---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.172Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner federated queries with BigQuery external datasets"
feature_slug: "spanner-federated-queries-with-bigquery-external-datasets"
latest_feature_date: "2025-09-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager"
keywords:
  - "federated"
  - "external"
  - "datasets"
  - "running"
  - "supports"
  - "queries"
---

# Spanner federated queries with BigQuery external datasets

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports running GoogleSQL federated queries against PostgreSQL dialect databases through BigQuery external datasets, including cross-region queries.

## Extended Definition

Spanner supports running GoogleSQL federated queries against PostgreSQL dialect databases through BigQuery external datasets, including cross-region queries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager)

## Supporting Pages

### "Choosing the Right Dialect for Your Spanner Database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery external datasets Use Spanner federated queries .
- GoogleSQL dialect feature differences GoogleSQL feature PostgreSQL dialect recommendation Sample datasets No recommendation available.

### "Class ListDatabasesAsyncPager (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

