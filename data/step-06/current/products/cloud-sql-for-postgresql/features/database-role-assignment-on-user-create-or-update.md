---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.741Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Database role assignment on user create or update"
feature_slug: "database-role-assignment-on-user-create-or-update"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "assignment"
  - "update"
  - "create"
  - "role"
  - "user"
  - "database"
  - "users"
  - "lets"
---

# Database role assignment on user create or update

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Database role assignment on user create or update lets users assign database roles to built-in and IAM database users during user creation or modification.

## Extended Definition

Database role assignment on user create or update lets users assign database roles to built-in and IAM database users during user creation or modification.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which is one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": "CLOUD IAM USER", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which is one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Assign or revoke database roles while updating an IAM account on an instance After you add an individual IAM user, service account, or IAM group to a Cloud SQL instance, you can modify the database roles that are assigned to it.

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "UPDATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Replace database roles for an existing user If you want to replace or remove database roles from the user, you must revoke all of their existing roles while specifying new database roles, if any.
- The database role or roles to assign to the user. gcloud sql users create USER NAME \ --instance = INSTANCE NAME \ --password = PASSWORD \ --database-roles = ROLE 1 , ROLE 2 , ..., ROLE N If you create a PostgreSQL user that uses built-in authentication, then the user is granted the cloudsqlsuperuser role automatically.
- For example: gcloud sql users assign-roles USER NAME \ --instance = INSTANCE NAME \ --database-roles = \ --revoke-existing-roles REST v1 To update a user, use a PUT request with the users:update method.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you create a PostgreSQL user that uses built-in authentication, then the user is granted the cloudsqlsuperuser role automatically.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the password for the postgres user: gcloud sql users set-password postgres \ --instance = INSTANCE NAME \ --password = PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "postgres pvp instance name" { name = "postgres-pvp-instance-name" region = "asia-northeast1" database version = "POSTGRES 14" root password = "abcABC123!" settings { tier = "db-custom-2-7680" password validation policy { min length = 6 reuse interval = 2 complexity = "COMPLEXITY DEFAULT" disallow username substring = true password change interval = "30s" enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification.

