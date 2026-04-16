---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.512Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pg_squeeze extension support"
feature_slug: "pg-squeeze-extension-support"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "pg"
  - "squeeze"
  - "extension"
  - "alloydb"
  - "omni"
  - "includes"
---

# pg_squeeze extension support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni includes the pg_squeeze extension.

## Extended Definition

AlloyDB Omni includes the pg_squeeze extension.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai](https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- PostGIS extensions AlloyDB's PostGIS support includes the following extensions: postgis postgis raster postgis sfcgal postgis tiger geocoder postgis topology address standardizer address standardizer data us Enable an extension Enable an extension by connecting to a database in an AlloyDB cluster's primary instance, then running a CREATE EXTENSION command.
- Extension Included with AlloyDB Included with AlloyDB Omni Description amcheck Provides functions for verifying the logical consistency of the structure of relations, enabling the pg amcheck application to check for corruption. anon Helps you hide or replace personally identifiable information (PII) or commercially sensitive data.

### "Integrate with Vertex AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai](https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Note: AlloyDB Studio connects to the primary instance of your cluster, which is where extension management and initial predictions are handled, even if you intend to invoke predictions from read pool instances later.
- To instead integrate a local installation of AlloyDB Omni using Vertex AI, see Install AlloyDB Omni with AlloyDB AI .
- The AlloyDB Admin role also includes the permissions required to grant the Vertex AI User role to the service agent.
- These instructions are specific to using AlloyDB, and not AlloyDB Omni.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Extension support AlloyDB includes support for a number of popular PostgreSQL extensions.
- To facilitate the development of AI applications, AlloyDB AI provides the following extensions: vector (a version of pgvector customized for AlloyDB AI): stores and indexes vector embeddings for semantic search.
- A self-hosted alternative: AlloyDB Omni As an alternative to running AlloyDB within Google Cloud, Google offers AlloyDB Omni.
- For more information, see About AlloyDB Omni .

