---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.563Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SqlPackage utility support"
feature_slug: "sqlpackage-utility-support"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/features"
keywords:
  - "sqlpackage"
  - "utility"
  - "sql"
  - "supports"
  - "server"
  - "importing"
  - "exporting"
---

# SqlPackage utility support

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports the SQL Server SqlPackage utility for importing and exporting data.

## Extended Definition

Cloud SQL supports the SQL Server SqlPackage utility for importing and exporting data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SQL for SQL Server supports change data capture (CDC) for the following database versions: SQL Server 2017 Standard SQL Server 2017 Enterprise SQL Server 2019 Standard SQL Server 2019 Enterprise SQL Server 2022 Standard SQL Server 2022 Enterprise When importing a CDC-enabled database, the KEEP CDC flag is retained.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using BAK files and importing data into Cloud SQL instances using transaction log files.
- Required roles and permissions for exporting from Cloud SQL for SQL Server To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for striped export and transaction log export) storage.objects.delete (for striped export and transaction log export) storage.buckets.get (for transaction log export only) For help with IAM roles, see Identity and Access Management .
- Import to Cloud SQL for SQL Server Required roles and permissions for importing to Cloud SQL for SQL Server To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for striped import only) For help with IAM roles, see Identity and Access Management .

### "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using SQL dump files.
- Import data to Cloud SQL for SQL Server Required roles and permissions for importing to Cloud SQL for SQL Server To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for striped import only) For help with IAM roles, see Identity and Access Management .
- Export data from Cloud SQL for SQL Server Exporting from Cloud SQL to a SQL dump file is not supported for SQL Server.
- Exporting from Cloud SQL to a SQL dump file isn't supported for SQL Server.

### Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Other SQL Server operations unavailable for Cloud SQL ADMINISTER BULK OPERATIONS ALTER ANY CREDENTIAL ALTER ANY EVENT NOTIFICATION ALTER ANY EVENT SESSION ALTER RESOURCES ALTER SETTINGS AUTHENTICATE SERVER CONTROL SERVER CREATE DDL EVENT NOTIFICATION CREATE ENDPOINT CREATE TRACE EVENT NOTIFICATION EXTERNAL ACCESS ASSEMBLY RESTORE SHUTDOWN CLR ASSEMBLIES Supported syntax for Cloud SQL for SQL Server Cloud SQL supports the Transact-SQL syntax .
- Maintenance Plans Performance Data Collector Policy-Based Management PolyBase Machine Learning and R Services Resource Governor Server-level triggers Service Broker endpoints T-SQL endpoints (all operations using CREATE ENDPOINT are unavailable) WCF Data Services The sysadmin role and system stored procedures that require it Hybrid buffer pool Memory-optimized tempdb metadata In-memory OLTP support for database snapshots Registering external languages Row-level security Object storage backup and restore Persistent Memory (PMEM) Real-time operational analytics Integrated acceleration and offloading Hybrid buffer pool with direct write Multi-write replication Link to Azure SQL Managed instance Contained availability group Always Encrypted with secure enclaves Azure Active Directory authentication Support for PFX certificates and other cryptographic improvements MS-TDS 8.0 protocol and TLS 1.3 Note: Cloud SQL is a managed service so it restricts access to certain system procedures and tables that require advanced privileges; you can't create or have access to users with superuser permissions.
- Stretch database Backing up to Microsoft Azure Blob Storage Buffer pool extension The OPENROWSET feature Data Quality Services Database Log Shipping Database Mail Dedicated Administrator Connection (DAC) Distribution Transaction Coordinator (MSDTC) File tables FILESTREAM support Installing a server that requires a full server installation with specific authentication mechanisms such as Azure DevOps Server.
- Supported languages for Cloud SQL for SQL Server You can use Cloud SQL with App Engine applications running in the flexible environment that are written in: C# Go Java Node.js PHP Python Ruby How you can connect to Cloud SQL for SQL Server instances You can connect to a Cloud SQL instance from: SQL Server Management Studio (SSMS) .

