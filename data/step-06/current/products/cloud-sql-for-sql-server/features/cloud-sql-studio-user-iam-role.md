---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.549Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Studio User IAM role"
feature_slug: "cloud-sql-studio-user-iam-role"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions"
  - "https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions"
keywords:
  - "sql"
  - "studio"
  - "user"
  - "iam"
  - "role"
  - "provides"
  - "dedicated"
  - "granting"
---

# Cloud SQL Studio User IAM role

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL provides a dedicated Cloud SQL Studio User IAM role for granting access to Cloud SQL Studio.

## Extended Definition

Cloud SQL provides a dedicated Cloud SQL Studio User IAM role for granting access to Cloud SQL Studio.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions](https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)

## Supporting Pages

### "Roles and permissions \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If The caller does not have permission Connection matched pg hba.conf line 20: "local all +cloudsqliamuser cloudsql-iam-user" error message appears when the service account connects to the instance, add the Cloud SQL Instance User role to the account.
- Cloud SQL roles and permissions for Knowledge Catalog integration To provide access to Cloud SQL metadata on Knowledge Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- MySQL PostgreSQL SQL Server This page provides information about Identity and Access Management (IAM) roles and permissions and how they're used with Cloud SQL instances.
- Before you make a resource accessible to other users, be sure you know what roles you want each of those people to play.

### "Roles and permissions \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions](https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL roles and permissions for Knowledge Catalog integration To provide access to Cloud SQL metadata on Knowledge Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- MySQL PostgreSQL SQL Server This page provides information about Identity and Access Management (IAM) roles and permissions and how they're used with Cloud SQL instances.
- Before you make a resource accessible to other users, be sure you know what roles you want each of those people to play.
- Granting setIamPolicy permission allows a user to change permissions and take control of data.

### Roles and permissions \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL roles and permissions for Knowledge Catalog integration To provide access to Cloud SQL metadata on Knowledge Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- MySQL PostgreSQL SQL Server This page provides information about Identity and Access Management (IAM) roles and permissions and how they're used with Cloud SQL instances.
- Before you make a resource accessible to other users, be sure you know what roles you want each of those people to play.
- Granting setIamPolicy permission allows a user to change permissions and take control of data.

