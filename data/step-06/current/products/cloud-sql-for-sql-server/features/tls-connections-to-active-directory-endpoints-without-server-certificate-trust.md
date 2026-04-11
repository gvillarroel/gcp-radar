---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.604Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "TLS connections to Active Directory endpoints without server certificate trust"
feature_slug: "tls-connections-to-active-directory-endpoints-without-server-certificate-trust"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "tls"
  - "connections"
  - "to"
  - "active"
  - "directory"
  - "endpoints"
  - "without"
  - "server"
---

# TLS connections to Active Directory endpoints without server certificate trust

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

This capability enables TLS connections to Active Directory endpoints without requiring trusted server certificates or IP-address-based access.

## Extended Definition

This capability enables TLS connections to Active Directory endpoints without requiring trusted server certificates or IP-address-based access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- On-premises domain name, such as my-onprem-domain.com Managed AD domain name, such as my-ad-domain.com List of SQL Server Active Directory FQDNs and private IP addresses.
- If the script is run on an on-premises domain joined VM, expect a failed status if Powershell is not run as an Active Directory domain user.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- July 08, 2025 Feature Cloud SQL for SQL Server now offers Active Directory support for write endpoints.
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- Feature The Cloud SQL Active Directory (AD) Diagnosis tool helps you troubleshoot issues that you might face while connecting to AD-enabled Cloud SQL for SQL Server instances, using an on-premises AD domain.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- May 14, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- July 08, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now offers Active Directory support for write endpoints.
- Feature The Cloud SQL Active Directory (AD) Diagnosis tool helps you troubleshoot issues that you might face while connecting to AD-enabled Cloud SQL for SQL Server instances, using an on-premises AD domain.
- December 13, 2021 Cloud SQL for SQL Server Feature A new feature enables more flexibility for integrating Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.

