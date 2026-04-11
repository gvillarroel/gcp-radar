---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.323Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Dataplex Catalog integration"
feature_slug: "dataplex-catalog-integration"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions"
keywords:
  - "dataplex"
  - "catalog"
  - "integration"
  - "lets"
  - "you"
  - "search"
  - "for"
  - "and"
---

# Dataplex Catalog integration

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Dataplex Catalog integration lets you search for and manage Cloud SQL resources through Dataplex Catalog.

## Extended Definition

Dataplex Catalog integration lets you search for and manage Cloud SQL resources through Dataplex Catalog.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
- Feature You can now search for and manage your Cloud SQL resources by using Dataplex Catalog .
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database, version 12 and later.
- This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
- For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
- For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
- Feature You can now search for and manage your Cloud SQL resources by using Dataplex Catalog .

### Roles and permissions \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL roles and permissions for Dataplex Universal Catalog integration To provide access to Cloud SQL metadata on Dataplex Universal Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- For this reason, the service account you use for these operations needs both read and write permissions to Cloud Storage: To import data to, and export data from, Cloud Storage, the Cloud SQL instance's service account must have the storage.objectAdmin IAM role set in the project.
- To control the permission for who can use this internal path, you can grant and revoke the IAM permissions to and from the user's IAM identity that the Google Cloud service, such as BigQuery, uses to connect to your Cloud SQL instance.
- Over time, changes in project management, usage patterns, and organizational ownership may require you to modify IAM settings on projects, especially if you manage Cloud SQL in a large organization or for a large group of users.

