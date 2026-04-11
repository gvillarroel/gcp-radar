---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.646Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Studio User IAM role"
feature_slug: "cloud-sql-studio-user-iam-role"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions"
  - "https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions"
keywords:
  - "sql"
  - "studio"
  - "user"
  - "iam"
  - "role"
  - "provides"
  - "dedicated"
  - "for"
---

# Cloud SQL Studio User IAM role

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL provides a dedicated Cloud SQL Studio User IAM role for granting access to Cloud SQL Studio.

## Extended Definition

Cloud SQL provides a dedicated Cloud SQL Studio User IAM role for granting access to Cloud SQL Studio.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions](https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- September 12, 2024 Feature You can now provide access to Cloud SQL Studio by granting a new IAM role, Cloud SQL Studio User ( roles/cloudsql.studioUser ), instead of using the Cloud SQL Admin IAM role.
- December 11, 2025 Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( GA ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.

### "Roles and permissions \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions](https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page provides information about Identity and Access Management (IAM) roles and permissions and how they're used with Cloud SQL instances.
- For this reason, the service account you use for these operations needs both read and write permissions to Cloud Storage: To import data to, and export data from, Cloud Storage, the Cloud SQL instance's service account must have the storage.objectAdmin IAM role set in the project.
- Cloud SQL roles and permissions for Dataplex Universal Catalog integration To provide access to Cloud SQL metadata on Dataplex Universal Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- Over time, changes in project management, usage patterns, and organizational ownership may require you to modify IAM settings on projects, especially if you manage Cloud SQL in a large organization or for a large group of users.

### Roles and permissions \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page provides information about Identity and Access Management (IAM) roles and permissions and how they're used with Cloud SQL instances.
- For this reason, the service account you use for these operations needs both read and write permissions to Cloud Storage: To import data to, and export data from, Cloud Storage, the Cloud SQL instance's service account must have the storage.objectAdmin IAM role set in the project.
- Cloud SQL roles and permissions for Dataplex Universal Catalog integration To provide access to Cloud SQL metadata on Dataplex Universal Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- To control the permission for who can use this internal path, you can grant and revoke the IAM permissions to and from the user's IAM identity that the Google Cloud service, such as BigQuery, uses to connect to your Cloud SQL instance.

