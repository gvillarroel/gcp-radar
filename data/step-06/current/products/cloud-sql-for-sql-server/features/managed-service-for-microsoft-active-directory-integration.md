---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.583Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Managed Service for Microsoft Active Directory integration"
feature_slug: "managed-service-for-microsoft-active-directory-integration"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/features"
keywords:
  - "managed"
  - "microsoft"
  - "active"
  - "directory"
  - "integration"
  - "sql"
  - "server"
  - "can"
---

# Managed Service for Microsoft Active Directory integration

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for SQL Server can join a managed Active Directory domain to support Windows Authentication and trusted integration with on-premises AD domains; Cloud SQL for SQL Server can join a managed Active Directory domain to support Windows Authentication and trusted integration with on-premises AD domains.

## Extended Definition

Cloud SQL for SQL Server can join a managed Active Directory domain to support Windows Authentication and trusted integration with on-premises AD domains; Cloud SQL for SQL Server can join a managed Active Directory domain to support Windows Authentication and trusted integration with on-premises AD domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)

## Supporting Pages

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-docs-reference-required-4`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your Managed Microsoft AD is in a different project, AD PROJECT ID should be the one containing the Managed Service for Microsoft Active Directory instance, while the service account's SQL PROJECT NUMBER should be the one containing the SQL Server instance: gcloud projects add-iam-policy-binding AD PROJECT ID \ --member = serviceAccount:service- SQL PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/managedidentities.sqlintegrator Also see gcloud beta services identity create .
- MySQL PostgreSQL SQL Server You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory (also called Managed Microsoft AD).
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- SQL Server logins based on Active Directory users and groups cannot be managed from the Google Cloud console.

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-docs-reference-required-4`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On-premises domain name, such as my-onprem-domain.com Managed AD domain name, such as my-ad-domain.com List of SQL Server Active Directory FQDNs and private IP addresses.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- If the script is run on an on-premises domain joined VM, expect a failed status if Powershell is not run as an Active Directory domain user.

### Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration with Managed Service for Microsoft Active Directory, including Windows Authentication.
- Maintenance Plans Performance Data Collector Policy-Based Management PolyBase Machine Learning and R Services Resource Governor Server-level triggers Service Broker endpoints T-SQL endpoints (all operations using CREATE ENDPOINT are unavailable) WCF Data Services The sysadmin role and system stored procedures that require it Hybrid buffer pool Memory-optimized tempdb metadata In-memory OLTP support for database snapshots Registering external languages Row-level security Object storage backup and restore Persistent Memory (PMEM) Real-time operational analytics Integrated acceleration and offloading Hybrid buffer pool with direct write Multi-write replication Link to Azure SQL Managed instance Contained availability group Always Encrypted with secure enclaves Azure Active Directory authentication Support for PFX certificates and other cryptographic improvements MS-TDS 8.0 protocol and TLS 1.3 Note: Cloud SQL is a managed service so it restricts access to certain system procedures and tables that require advanced privileges; you can't create or have access to users with superuser permissions.
- Integration with customer-managed Active Directory (CMAD), including Windows Authentication.
- Stretch database Backing up to Microsoft Azure Blob Storage Buffer pool extension The OPENROWSET feature Data Quality Services Database Log Shipping Database Mail Dedicated Administrator Connection (DAC) Distribution Transaction Coordinator (MSDTC) File tables FILESTREAM support Installing a server that requires a full server installation with specific authentication mechanisms such as Azure DevOps Server.

