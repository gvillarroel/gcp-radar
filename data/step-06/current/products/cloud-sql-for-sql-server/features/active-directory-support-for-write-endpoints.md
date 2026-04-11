---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.600Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Active Directory support for write endpoints"
feature_slug: "active-directory-support-for-write-endpoints"
latest_feature_date: "2025-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
keywords:
  - "active"
  - "directory"
  - "for"
  - "write"
  - "endpoints"
  - "enables"
  - "ad"
  - "based"
---

# Active Directory support for write endpoints

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Active Directory support for write endpoints enables AD-based access for Cloud SQL write endpoints across forests.

## Extended Definition

Active Directory support for write endpoints enables AD-based access for Cloud SQL write endpoints across forests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- July 08, 2025 Feature Cloud SQL for SQL Server now offers Active Directory support for write endpoints.
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- Feature The Cloud SQL Active Directory (AD) Diagnosis tool helps you troubleshoot issues that you might face while connecting to AD-enabled Cloud SQL for SQL Server instances, using an on-premises AD domain.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- May 14, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- July 08, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now offers Active Directory support for write endpoints.
- March 10, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL introduces a set of improvements that adjust MySQL configurations dynamically based on workload demands and underlying infrastructure to optimize write performance and reduce latency.
- Feature The Cloud SQL Active Directory (AD) Diagnosis tool helps you troubleshoot issues that you might face while connecting to AD-enabled Cloud SQL for SQL Server instances, using an on-premises AD domain.

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- On-premises domain name, such as my-onprem-domain.com Managed AD domain name, such as my-ad-domain.com List of SQL Server Active Directory FQDNs and private IP addresses.
- This page describes how to use the Active Directory Diagnosis tool for Cloud SQL and explains the checks that the tool performs.

