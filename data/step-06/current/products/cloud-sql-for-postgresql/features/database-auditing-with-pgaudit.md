---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.423Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Database auditing with pgAudit"
feature_slug: "database-auditing-with-pgaudit"
latest_feature_date: "2021-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases"
keywords:
  - "database"
  - "auditing"
  - "with"
  - "pgaudit"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
---

# Database auditing with pgAudit

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations; Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations.

## Extended Definition

Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations; Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases](https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- January 19, 2021 Feature Database auditing in Cloud SQL for PostgreSQL is generally available , through the open-source pgAudit extension.
- Feature Database auditing in Cloud SQL for PostgreSQL is available through the open-source pgAudit extension.
- Home Documentation Databases Cloud SQL PostgreSQL Resources Send feedback Cloud SQL for PostgreSQL release notes Stay organized with collections Save and categorize content based on your preferences.
- April 06, 2021 Feature Cloud SQL for PostgreSQL now lets you use IAM database authentication with the Cloud SQL Auth proxy.

### SqlDatabaseVersion \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- POSTGRES 9 6 The database version is PostgreSQL 9.6.
- POSTGRES 10 The database version is PostgreSQL 10.
- POSTGRES 11 The database version is PostgreSQL 11.

### "Create and manage databases \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases](https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the following topics in the PostgreSQL documentation for background and a list of supported character set values: Collation Support Character Set Support CREATE DATABASE database name [[ ENCODING encoding ][ LC COLLATE lc collate ]]; For example: CREATE DATABASE "example db" WITH OWNER "example user" ENCODING 'UTF8' LC COLLATE = 'pl PL.utf8' LC CTYPE = 'pl PL.utf8' TEMPLATE template0; Note: The default template is template1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } psql Client For reference information, see CREATE DATABASE in the PostgreSQL documentation.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } psql Client For reference information, see DROP DATABASE in the PostgreSQL documentation.
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases Request JSON body: { "project": " project-id ", "instance": " instance-id ", "name": " database-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

