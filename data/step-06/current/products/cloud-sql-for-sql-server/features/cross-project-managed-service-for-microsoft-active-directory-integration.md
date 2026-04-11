---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.901Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cross-project Managed Service for Microsoft Active Directory integration"
feature_slug: "cross-project-managed-service-for-microsoft-active-directory-integration"
latest_feature_date: "2021-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "cross"
  - "project"
  - "managed"
  - "for"
  - "microsoft"
  - "active"
  - "directory"
  - "integration"
---

# Cross-project Managed Service for Microsoft Active Directory integration

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server can integrate with a Managed Service for Microsoft Active Directory domain located in a different project.

## Extended Definition

Cloud SQL for SQL Server can integrate with a Managed Service for Microsoft Active Directory domain located in a different project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- If your Managed Microsoft AD is in a different project, AD PROJECT ID should be the one containing the Managed Service for Microsoft Active Directory instance, while the service account's SQL PROJECT NUMBER should be the one containing the SQL Server instance: gcloud projects add-iam-policy-binding AD PROJECT ID \ --member = serviceAccount:service- SQL PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/managedidentities.sqlintegrator Also see gcloud beta services identity create .
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- MySQL PostgreSQL SQL Server You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory (also called Managed Microsoft AD).
- You need a Per-Product, Per-Project Service account for each project that you plan to integrate with Managed Microsoft AD.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- June 28, 2021 Feature Integration of SQL Server with Managed Service for Microsoft Active Directory is generally available .
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- December 13, 2021 Feature A new feature enables more flexibility for integrating Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- Additionally, you can integrate with your on-premises AD domains by establishing a trust with the Managed Service for Microsoft Active Directory.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- June 28, 2021 Cloud SQL for SQL Server Feature Integration of SQL Server with Managed Service for Microsoft Active Directory is generally available .
- December 13, 2021 Cloud SQL for SQL Server Feature A new feature enables more flexibility for integrating Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- Additionally, you can integrate with your on-premises AD domains by establishing a trust with the Managed Service for Microsoft Active Directory.
- March 29, 2021 Cloud SQL for SQL Server Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.

