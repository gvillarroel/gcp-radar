---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.494Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "PostgreSQL 16 compatibility"
feature_slug: "postgresql-16-compatibility"
latest_feature_date: "2024-10-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/high-availability"
keywords:
  - "postgresql"
  - "16"
  - "compatibility"
  - "alloydb"
  - "supports"
  - "clusters"
  - "homogeneous"
  - "migrations"
---

# PostgreSQL 16 compatibility

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports PostgreSQL 16 compatibility for new clusters and homogeneous migrations from PostgreSQL; AlloyDB supports preview PostgreSQL 16 compatibility for creating new clusters.

## Extended Definition

AlloyDB supports PostgreSQL 16 compatibility for new clusters and homogeneous migrations from PostgreSQL; AlloyDB supports preview PostgreSQL 16 compatibility for creating new clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- AlloyDB for PostgreSQL clusters and instances rely upon many internal, low-level Google Cloud resources.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Maintenance overview Stay organized with collections Save and categorize content based on your preferences.
- Database compatibility upgrades: the PostgreSQL community regularly releases minor-version updates to supported major versions of PostgreSQL.
- This might also involve updates to the PostgreSQL extensions included with AlloyDB, or installation of new extensions.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- This page describes advanced query insights features in AlloyDB for PostgreSQL.
- The metrics are stored in AlloyDB tables, and normalized execution plans are stored in Cloud Trace .
- You can access these metrics in the AlloyDB Query Insights page of the Google Cloud console.

### "AlloyDB high availability overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- Source ID: `site-docs-reference-2`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB high availability overview Stay organized with collections Save and categorize content based on your preferences.
- New architecture Newly created AlloyDB instances with PostgreSQL 18 provide improved failover using a read replica on the standby node (hot standby node).
- This document provides an overview of the high availability (HA) configuration for AlloyDB for PostgreSQL instances.
- When processing writes, the AlloyDB database first writes WAL to its regional log persistor on the active node and then asynchronously transfers the logs to AlloyDB's regional log processing servers, which materialize the logs into data blocks for long-term storage.

