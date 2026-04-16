---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.904Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "IAM database authentication for Cloud SQL Studio"
feature_slug: "iam-database-authentication-for-cloud-sql-studio"
latest_feature_date: "2024-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-users"
keywords:
  - "iam"
  - "database"
  - "authentication"
  - "sql"
  - "studio"
  - "supports"
---

# IAM database authentication for Cloud SQL Studio

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Studio supports authentication using IAM database authentication.

## Extended Definition

Cloud SQL Studio supports authentication using IAM database authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)

## Supporting Pages

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- Source ID: `site-docs-reference-3`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL built-in database authentication Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how built-in authentication works on Cloud SQL instances and how database administrators can set password policies for local database users.
- Although IAM database authentication is more secure and reliable, you might prefer to use built-in authentication or a hybrid authentication model that includes both authentication types.
- Cloud SQL uses the following types of authentication for database users: The database's built-in authentication uses a username and a password to authenticate local database users.

### "Manage users with built-in authentication \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you create a user that uses built-in authentication for a MySQL 8.0 or later instance and don't specify any database roles, then the user is granted the cloudsqlsuperuser role automatically.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you create a user that uses built-in authentication for a MySQL 8.0 or later instance and don't specify any database roles, then the user is granted the cloudsqlsuperuser role automatically.
- The database role or roles to assign to the user. gcloud sql users create USER NAME \ --host = HOST \ --instance = INSTANCE NAME \ --password = PASSWORD \ --database-roles = ROLE 1 , ROLE 2 , ..., ROLE N If you create a user that uses built-in authentication for a MySQL 8.0 or later instance and don't specify any database roles, then the user is granted the cloudsqlsuperuser role automatically.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Manage users with built-in authentication Stay organized with collections Save and categorize content based on your preferences.

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Built-in database authentication IAM database authentication (individual) IAM group authentication Authentication method Password Temporary authentication token Temporary authentication token Network traffic encryption SSL not required SSL required SSL required User management Manual Centralized through IAM Centralized through IAM and Cloud Identity groups IAM group authentication IAM group authentication lets you manage Cloud SQL users at a group level.
- Context-aware access and IAM database authentication If you're using context-aware access in your IAM configuration, then you can't use a Cloud SQL connector such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors with IAM database authentication.
- Automatic IAM database authentication Automatic IAM database authentication lets you hand off requesting and managing access tokens to an intermediary Cloud SQL connector , such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors.
- User and service account administration To provide users and service accounts access to databases on an instance using IAM database authentication, you need to add them to the instance or add them to a group that has access to the instance.

