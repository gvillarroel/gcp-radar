---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.579Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cross-project Managed Service for Microsoft Active Directory integration"
feature_slug: "cross-project-managed-service-for-microsoft-active-directory-integration"
latest_feature_date: "2021-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
keywords:
  - "cross"
  - "project"
  - "managed"
  - "microsoft"
  - "active"
  - "directory"
  - "integration"
  - "sql"
---

# Cross-project Managed Service for Microsoft Active Directory integration

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for SQL Server can integrate with a Managed Service for Microsoft Active Directory domain located in a different project.

## Extended Definition

Cloud SQL for SQL Server can integrate with a Managed Service for Microsoft Active Directory domain located in a different project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)

## Supporting Pages

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-docs-reference-required-4`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your Managed Microsoft AD is in a different project, AD PROJECT ID should be the one containing the Managed Service for Microsoft Active Directory instance, while the service account's SQL PROJECT NUMBER should be the one containing the SQL Server instance: gcloud projects add-iam-policy-binding AD PROJECT ID \ --member = serviceAccount:service- SQL PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/managedidentities.sqlintegrator Also see gcloud beta services identity create .
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- MySQL PostgreSQL SQL Server You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory (also called Managed Microsoft AD).
- You need a Per-Product, Per-Project Service account for each project that you plan to integrate with Managed Microsoft AD.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Console Note: If you plan to integrate with Managed Service for Microsoft Active Directory, review the prerequisites for integration .
- To create an instance that is integrated with Managed Service for Microsoft Active Directory, specify a domain, such as subdomain.mydomain.com , for the domain field.
- Additionally, note the procedures and constraints for integrating with a Managed Microsoft AD domain in a different project.
- Additionally, note the procedures and constraints for integrating with a Managed Microsoft AD domain in a different project.

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-docs-reference-required-4`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On-premises domain name, such as my-onprem-domain.com Managed AD domain name, such as my-ad-domain.com List of SQL Server Active Directory FQDNs and private IP addresses.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- If the script is run on an on-premises domain joined VM, expect a failed status if Powershell is not run as an Active Directory domain user.

