---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.739Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Data API administrative queries"
feature_slug: "cloud-sql-data-api-administrative-queries"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "administrative"
  - "tasks"
  - "execute"
  - "statements"
  - "queries"
  - "users"
---

# Cloud SQL Data API administrative queries

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Data API administrative queries let users execute SQL statements for administrative tasks through the Data API.

## Extended Definition

Cloud SQL Data API administrative queries let users execute SQL statements for administrative tasks through the Data API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "UPDATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Replace database roles for an existing user If you want to replace or remove database roles from the user, you must revoke all of their existing roles while specifying new database roles, if any.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you create a PostgreSQL user that uses built-in authentication, then the user is granted the cloudsqlsuperuser role automatically.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } If a user password policy was set, the items section of the response includes a passwordPolicy section.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } If a user password policy was set, the items section of the response includes a passwordPolicy section.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/mysql/queries GA (project) Queries DELTA , INT64 , 1 cloudsql database Delta count of statements executed by the server.
- This can be either replay location, flush location, write location or sent location. database/postgresql/statements executed count GA (project) Statements executed count DELTA , INT64 , 1 cloudsql database Total count of statements executed in postgresql instance.
- After sampling, data is not visible for up to 165 seconds. database/mysql/questions GA (project) Questions DELTA , INT64 , 1 cloudsql database Delta count of statements executed by the server sent by the client.
- This count includes tasks that are waiting for a worker to execute them and tasks that are currently waiting or running (in SUSPENDED or RUNNABLE state).

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- If you set dataApiAccess to ALLOW DATA API , then you allow authorized users to use the Data API to connect to and execute SQL statements on your instance.
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- Allow Data API By selecting this checkbox, you let authorized users to call the Data API to execute SQL statements on the instance.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.

