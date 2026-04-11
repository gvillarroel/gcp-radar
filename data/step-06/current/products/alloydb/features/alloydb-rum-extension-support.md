---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.560Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB RUM extension support"
feature_slug: "alloydb-rum-extension-support"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "full-text search indexing"
  - "relevance ranking"
  - "positional index data"
  - "phrase search"
  - "RUM extension"
  - "rum extension"
  - "pg_rum"
  - "RUM"
---

# AlloyDB RUM extension support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB now supports the rum extension for complex full-text search, adding positional index data to accelerate phrase search and relevance ranking.

## Extended Definition

AlloyDB now supports the rum extension for complex full-text search, adding positional index data to accelerate phrase search and relevance ranking.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Create and manage RUM index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This document shows you how to create the RUM extension and create indexes to optimize full-text search in AlloyDB for PostgreSQL.
- Before you begin To create the RUM extension, you must have the alloydb superuser role.
- Create the RUM extension You must create the RUM extension once per database.
- N/A Index for basic full-text search Use the rum tsvector ops operator class for standard text search that requires fast ranking and phrase search capabilities.

### "Full-text search overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RUM improves standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data.
- Apart from support for GIN and GiST indexes, AlloyDB also provides the RUM extension for high-performance full-text search.
- AlloyDB also supports the RUM extension for complex full-text search operations.
- The choice of index depends on the balance between search speed, index build time, update speed, and the specific search functionalities required, such as phrase searching or relevance ranking.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The rum extension extends standard GIN indexes by storing positional information directly in the index.
- AlloyDB supports the rum extension for complex full-text search operations.
- This enables faster phrase searches and relevance ranking without needing to access the table data.
- For more information, see Create and manage a RUM index .

