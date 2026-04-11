---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.753Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle multi-tenant architecture support"
feature_slug: "oracle-multi-tenant-architecture-support"
latest_feature_date: "2023-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle"
  - "https://docs.cloud.google.com/datastream/docs/release-notes"
keywords:
  - "oracle"
  - "multi"
  - "tenant"
  - "architecture"
  - "datastream"
  - "supports"
  - "cdb"
  - "and"
---

# Oracle multi-tenant architecture support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports Oracle multi-tenant CDB and PDB architecture.

## Extended Definition

Datastream supports Oracle multi-tenant CDB and PDB architecture.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)

## Supporting Pages

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Yes, Datastream supports Oracle multi-tenant architecture (CDB/PDB), however, you can only replicate a single pluggable database in a stream.
- Does Datastream support Oracle multi-tenant architecture, specifically Container Databases (CDBs) and Pluggable Databases (PDBs)?
- Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed.
- This FAQ is associated with: General questions about Datastream and change data capture (CDC) General source behavior and limitations MySQL source behavior and limitations Oracle source behavior and limitations PostgreSQL source behavior and limitations (including AlloyDB for PostgreSQL) SQL Server source behavior and limitations Salesforce source behavior and limitations BigQuery destination behavior Cloud Storage destination behavior Common use cases for using Datastream How Datastream integrates with Google Cloud data services Security and connectivity Monitoring Datastream Pricing Additional information about Datastream General questions about Datastream and change data capture (CDC) Question Answer What's Datastream?

### "Configure a pluggable Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Datastream supports Oracle multi-tenant architecture, where a single container database (CDB) contains one or more pluggable databases (PDBs).
- To connect to a container in a multi-tenant architecture setup, or to switch between container sessions, use the following command: ALTER SESSION SET CONTAINER = CONTAINER NAME ; Replace CONTAINER NAME with the name of your container, for example your pluggable database or the CDB$ROOT container.
- Define a data retention policy for your database by running the following Oracle Recovery Manager (RMAN) command from the CDB$ROOT container: CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; The command defines the data retention policy for all pluggable databases in your container database.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a pluggable Oracle database for CDC Stay organized with collections Save and categorize content based on your preferences.

### Datastream release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- April 17, 2023 Feature Datastream now supports Oracle multi-tenant (CDB/PDB) architecture.
- January 23, 2024 Feature Datastream now supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.
- Datastream supports streaming from Oracle and MySQL databases into Cloud Storage.
- Supporting multiple use cases, including analytics, database replication, and synchronization for migrations and hybrid-cloud configurations, and for building event-driven architectures.

