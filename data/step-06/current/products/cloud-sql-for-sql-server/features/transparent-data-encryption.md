---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.540Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Transparent data encryption"
feature_slug: "transparent-data-encryption"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-tde"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/features"
keywords:
  - "transparent"
  - "encryption"
  - "automatically"
  - "encrypts"
  - "written"
  - "storage"
  - "decrypts"
  - "when"
---

# Transparent data encryption

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Transparent data encryption automatically encrypts data written to storage and decrypts it when read for Cloud SQL for SQL Server instances.

## Extended Definition

Transparent data encryption automatically encrypts data written to storage and decrypts it when read for Cloud SQL for SQL Server instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)

## Supporting Pages

### "About transparent data encryption (TDE) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- Source ID: `site-docs-reference-required-4`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TDE automatically encrypts data before it is written to storage, and automatically decrypts data when the data is read from storage.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback About transparent data encryption (TDE) Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes transparent data encryption (TDE) in Cloud SQL for SQL Server.
- TDE is used in scenarios where another layer of encryption is required in addition to Google's default offering of encryption for data at rest and Google's optional offering of Customer-managed encryption keys (CMEK) .

### About read pools \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- Source ID: `site-docs-reference-required-4`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you modify read pool node settings such as storage, connectivity, or database configuration flags, the changes are automatically applied uniformly across each read pool node in the read pool.
- Cloud SQL automatically repairs read pool nodes in the following conditions: When the instance is down.
- The transparent data encryption (TDE) certificate is blocked for both import and export operations.
- When you want the read pool to scale in or scale out, applications that were previously connected to this single read endpoint don't need to be reconfigured, even though you can create new read pool nodes in the read pool or delete previous ones.

### Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Up to 64 TB of storage available, with the ability to automatically increase storage size as needed.
- Transparent Data Encryption (TDE).
- Maintenance Plans Performance Data Collector Policy-Based Management PolyBase Machine Learning and R Services Resource Governor Server-level triggers Service Broker endpoints T-SQL endpoints (all operations using CREATE ENDPOINT are unavailable) WCF Data Services The sysadmin role and system stored procedures that require it Hybrid buffer pool Memory-optimized tempdb metadata In-memory OLTP support for database snapshots Registering external languages Row-level security Object storage backup and restore Persistent Memory (PMEM) Real-time operational analytics Integrated acceleration and offloading Hybrid buffer pool with direct write Multi-write replication Link to Azure SQL Managed instance Contained availability group Always Encrypted with secure enclaves Azure Active Directory authentication Support for PFX certificates and other cryptographic improvements MS-TDS 8.0 protocol and TLS 1.3 Note: Cloud SQL is a managed service so it restricts access to certain system procedures and tables that require advanced privileges; you can't create or have access to users with superuser permissions.
- Stretch database Backing up to Microsoft Azure Blob Storage Buffer pool extension The OPENROWSET feature Data Quality Services Database Log Shipping Database Mail Dedicated Administrator Connection (DAC) Distribution Transaction Coordinator (MSDTC) File tables FILESTREAM support Installing a server that requires a full server installation with specific authentication mechanisms such as Azure DevOps Server.

