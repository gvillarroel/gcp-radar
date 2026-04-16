---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.748Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Gemini CLI extension for Cloud SQL for PostgreSQL"
feature_slug: "gemini-cli-extension-for-cloud-sql-for-postgresql"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
keywords:
  - "provision"
  - "gemini"
  - "extension"
  - "users"
  - "lets"
---

# Gemini CLI extension for Cloud SQL for PostgreSQL

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The Gemini CLI extension for Cloud SQL for PostgreSQL lets users provision, manage, and query databases from the command line.

## Extended Definition

The Gemini CLI extension for Cloud SQL for PostgreSQL lets users provision, manage, and query databases from the command line.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- To prepare the environment, perform the following steps: Install Gemini CLI Install the DB Context Enrichment extension Setup database connection Install Gemini CLI To install Gemini CLI, see Get Started with Gemini CLI .
- To verify the installed version of the extension, run the following command: gemini extensions list Make sure that the version is 0.4.2 or higher.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which is one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": "CLOUD IAM USER", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users/list" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "example-service-acct@ PROJECT ID .iam", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM SERVICE ACCOUNT", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "another-example-service-acct@ PROJECT ID .iam", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP SERVICE ACCOUNT", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "postgres", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "example-user@example.com", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM USER", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "another-example-user@example.com", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP USER", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "example-group@example.com", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP", "iamStatus": "ACTIVE" } ] } Groups have a user type of CLOUD IAM GROUP .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "example-group@example.com", "insertTime": "2023-12-07T22:44:16.656Z", "startTime": "2023-12-07T22:44:16.686Z", "endTime": "2023-12-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the Cloud Identity group to GROUP EMAIL : the email address for the Cloud Identity group HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " GROUP EMAIL ", "type": "CLOUD IAM GROUP" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- ALTER USER USER NAME WITH PASSWORD PASSWORD ; NOTE: When using EXTENSION pg stat statements , SQL statements from all users are visible to users with the cloudsqlsuperuser ROLE (in PostgreSQL version 10 and higher).
- NOTE: When using EXTENSION pg stat statements , SQL statements from all users are visible to users with the cloudsqlsuperuser ROLE (in PostgreSQL version 10 and higher).
- NOTE: When using EXTENSION pg stat statements , SQL statements from all users are visible to users with the cloudsqlsuperuser ROLE (in PostgreSQL version 10 and higher).
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

