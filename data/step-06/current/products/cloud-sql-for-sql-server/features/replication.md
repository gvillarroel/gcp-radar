---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.586Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "replication"
feature_slug: "replication"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
keywords:
  - "replication"
  - "sql"
  - "server"
  - "supports"
  - "scale"
  - "read"
  - "usage"
  - "maintain"
---

# replication

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server supports replication to scale read usage and maintain data copies.

## Extended Definition

Cloud SQL for SQL Server supports replication to scale read usage and maintain data copies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- SQLSERVER 2017 ENTERPRISE The database version is SQL Server 2017 Enterprise.
- SQLSERVER 2019 ENTERPRISE The database version is SQL Server 2019 Enterprise.
- SQLSERVER 2022 ENTERPRISE The database version is SQL Server 2022 Enterprise.

### "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import data to Cloud SQL for SQL Server Required roles and permissions for importing to Cloud SQL for SQL Server To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for striped import only) For help with IAM roles, see Identity and Access Management .
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Export and import using SQL dump files Stay organized with collections Save and categorize content based on your preferences.
- Note: You cannot import a database that was exported from a higher version of SQL Server or import from a higher compatibility level into a lower one.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using SQL dump files.

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-docs-reference-required-4`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- On-premises domain name, such as my-onprem-domain.com Managed AD domain name, such as my-ad-domain.com List of SQL Server Active Directory FQDNs and private IP addresses.
- Kerberos ticket for SQL Server Validates that Kerberos authentication is enabled on the on-premises domain.

