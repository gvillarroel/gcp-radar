---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.672Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Bulk insert support"
feature_slug: "bulk-insert-support"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/features"
keywords:
  - "bulk"
  - "insert"
  - "sql"
  - "supports"
  - "server"
  - "for"
  - "importing"
  - "on"
---

# Bulk insert support

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL supports SQL Server bulk insert for importing data on SQL Server 2022 instances.

## Extended Definition

Cloud SQL supports SQL Server bulk insert for importing data on SQL Server 2022 instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- November 15, 2023 Feature Cloud SQL supports the bulk insert functionality of SQL Server for importing data.
- Feature Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ): SQL Server 2025 Standard SQL Server 2025 Enterprise SQL Server 2025 Express For more information, see Database versions and version policies and Choose a machine series .
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- March 17, 2025 Feature Cloud SQL for SQL Server supports transparent data encryption (TDE) to encrypt data stored in your Cloud SQL for SQL Server instances.

### SqlDatabaseVersion \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- SQLSERVER 2017 ENTERPRISE The database version is SQL Server 2017 Enterprise.
- SQLSERVER 2019 ENTERPRISE The database version is SQL Server 2019 Enterprise.
- SQLSERVER 2022 ENTERPRISE The database version is SQL Server 2022 Enterprise.

### Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other SQL Server operations unavailable for Cloud SQL ADMINISTER BULK OPERATIONS ALTER ANY CREDENTIAL ALTER ANY EVENT NOTIFICATION ALTER ANY EVENT SESSION ALTER RESOURCES ALTER SETTINGS AUTHENTICATE SERVER CONTROL SERVER CREATE DDL EVENT NOTIFICATION CREATE ENDPOINT CREATE TRACE EVENT NOTIFICATION EXTERNAL ACCESS ASSEMBLY RESTORE SHUTDOWN CLR ASSEMBLIES Supported syntax for Cloud SQL for SQL Server Cloud SQL supports the Transact-SQL syntax .
- For more information, see Use bulk insert for importing data .
- Maintenance Plans Performance Data Collector Policy-Based Management PolyBase Machine Learning and R Services Resource Governor Server-level triggers Service Broker endpoints T-SQL endpoints (all operations using CREATE ENDPOINT are unavailable) WCF Data Services The sysadmin role and system stored procedures that require it Hybrid buffer pool Memory-optimized tempdb metadata In-memory OLTP support for database snapshots Registering external languages Row-level security Object storage backup and restore Persistent Memory (PMEM) Real-time operational analytics Integrated acceleration and offloading Hybrid buffer pool with direct write Multi-write replication Link to Azure SQL Managed instance Contained availability group Always Encrypted with secure enclaves Azure Active Directory authentication Support for PFX certificates and other cryptographic improvements MS-TDS 8.0 protocol and TLS 1.3 Note: Cloud SQL is a managed service so it restricts access to certain system procedures and tables that require advanced privileges; you can't create or have access to users with superuser permissions.
- Supported languages for Cloud SQL for SQL Server You can use Cloud SQL with App Engine applications running in the flexible environment that are written in: C# Go Java Node.js PHP Python Ruby How you can connect to Cloud SQL for SQL Server instances You can connect to a Cloud SQL instance from: SQL Server Management Studio (SSMS) .

