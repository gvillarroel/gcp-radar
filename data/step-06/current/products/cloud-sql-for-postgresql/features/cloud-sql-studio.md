---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.767Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Studio"
feature_slug: "cloud-sql-studio"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
keywords:
  - "authorized"
  - "studio"
  - "manage"
  - "queries"
  - "users"
  - "lets"
---

# Cloud SQL Studio

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Studio lets authorized users manage data and run SQL queries from the Google Cloud console; Cloud SQL Studio lets authorized users interact directly with the database and run SQL queries from the Google Cloud console.

## Extended Definition

Cloud SQL Studio lets authorized users manage data and run SQL queries from the Google Cloud console; Cloud SQL Studio lets authorized users interact directly with the database and run SQL queries from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency Cloud SQL instances using pooling and multiplexing.
- If you set dataApiAccess to ALLOW DATA API , then you allow authorized users to use the Data API to connect to and execute SQL statements on your instance.
- For instances configured with a private IP address only, authorized users can call the Data API on the instance from the public internet.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Manage users with IAM database authentication Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how to add and manage users, service accounts, and groups to a Cloud SQL instance that uses IAM database authentication.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which is one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": "CLOUD IAM USER", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Create and manage users Stay organized with collections Save and categorize content based on your preferences.
- If you plan to use your database's administrative client to manage users, then do the following: Connect the client to your instance.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

