---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.576Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Microsoft Entra ID integration"
feature_slug: "microsoft-entra-id-integration"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
keywords:
  - "microsoft"
  - "entra"
  - "id"
  - "integration"
  - "provides"
  - "centralized"
  - "identity"
  - "and"
---

# Microsoft Entra ID integration

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Microsoft Entra ID integration provides centralized identity and access management for databases using an existing Entra ID tenant.

## Extended Definition

Microsoft Entra ID integration provides centralized identity and access management for databases using an existing Entra ID tenant.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- December 11, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( GA ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- July 31, 2025 Cloud SQL for MySQL Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- Cloud SQL for PostgreSQL Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- December 11, 2025 Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( GA ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- July 31, 2025 Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- With enhanced backups, backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To create a service account with gcloud , run the following command: gcloud beta services identity create --service = sqladmin.googleapis.com \ --project = PROJECT NUMBER That command returns a service account name in the following format: service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com Here is an example of a service account name: service-333445@gcp-sa-cloud-sql.iam.gserviceaccount.com Granting the necessary permission for integration requires existing permissions.
- If your Managed Microsoft AD is in a different project, AD PROJECT ID should be the one containing the Managed Service for Microsoft Active Directory instance, while the service account's SQL PROJECT NUMBER should be the one containing the SQL Server instance: gcloud projects add-iam-policy-binding AD PROJECT ID \ --member = serviceAccount:service- SQL PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/managedidentities.sqlintegrator Also see gcloud beta services identity create .
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Overview of Managed Microsoft AD in Cloud SQL Stay organized with collections Save and categorize content based on your preferences.

