---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.161Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner major compaction API"
feature_slug: "spanner-major-compaction-api"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/configure-columnar-engine"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "compaction"
  - "major"
  - "conversion"
  - "columnar"
  - "accelerate"
  - "introduced"
---

# Spanner major compaction API

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduced a major compaction API to accelerate conversion of non-columnar data into columnar format for columnar-enabled databases or tables.

## Extended Definition

Spanner introduced a major compaction API to accelerate conversion of non-columnar data into columnar format for columnar-enabled databases or tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/configure-columnar-engine](https://docs.cloud.google.com/spanner/docs/configure-columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

### Configure Spanner columnar engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-columnar-engine](https://docs.cloud.google.com/spanner/docs/configure-columnar-engine)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you create a new database without data and enable columnar engine, Spanner stores data in columnar format as you insert it and as compactions occur in the background.
- When you enable Spanner columnar engine on an existing database that has data in it, Spanner provides a mechanism to manually trigger compactions.
- This page describes how to enable Spanner columnar engine on a database, table, or index, and accelerate file format generation.
- Columnar file format generation Spanner generates the columnar file format at compaction time.

