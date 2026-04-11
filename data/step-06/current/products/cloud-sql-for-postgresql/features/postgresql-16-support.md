---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.327Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 16 support"
feature_slug: "postgresql-16-support"
latest_feature_date: "2024-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "postgresql"
  - "16"
  - "lets"
  - "you"
  - "create"
  - "sql"
  - "for"
  - "instances"
---

# PostgreSQL 16 support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

PostgreSQL 16 support lets you create Cloud SQL for PostgreSQL instances and replicas running PostgreSQL 16.

## Extended Definition

PostgreSQL 16 support lets you create Cloud SQL for PostgreSQL instances and replicas running PostgreSQL 16.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the gcloud sql instances create command to create the instance: For Cloud SQL Enterprise Plus edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --tier = TIER \ --edition = ENTERPRISE PLUS Note : If the database version for your instance is PostgreSQL 16 or later, then the default edition is Cloud SQL Enterprise Plus edition.
- For Cloud SQL Enterprise edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE \ --edition = ENTERPRISE Note : If you either don't specify a database version or you specify a version other than PostgreSQL 16 or later, then the default edition is Cloud SQL Enterprise edition.
- If you specify PostgreSQL 16 or later for the database version of your instance, but you create the instance in a region that doesn't have region support for Cloud SQL Enterprise Plus edition, then you must create an Cloud SQL Enterprise edition instance.
- If you specify PostgreSQL 16 and later for the database version of your instance, but you create the instance in a region that doesn't have region support for Cloud SQL Enterprise Plus edition, then you must create a Cloud SQL Enterprise edition instance.

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you create a PostgreSQL user that uses built-in authentication, then the user is granted the cloudsqlsuperuser role automatically.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you create a PostgreSQL user that uses built-in authentication, then the user is granted the cloudsqlsuperuser role automatically.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
- To use these versions of the extensions, update your instance to one of the following: POSTGRES 17 0.R20241011.00 11 (for PostgreSQL instances, version 17) [PostgreSQL version].R20240910.01 31 (for PostgreSQL instances, versions 12 to 16) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.
- To use this version of the extension, update your instance to one of the following: POSTGRES 17 0.R20241011.00 03 (for PostgreSQL instances, version 17) [PostgreSQL version].R20240910.01 17 (for PostgreSQL instances, versions 13 to 16) For more information, see Self-service maintenance .
- When you use gcloud or the API to create an instance or replica, the following conditions now apply: If the database version for the instance or replica that you're creating is PostgreSQL 16, then the default Cloud SQL edition is Enterprise Plus.

