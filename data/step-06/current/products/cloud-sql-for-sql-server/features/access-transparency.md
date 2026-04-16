---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.595Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Access Transparency"
feature_slug: "access-transparency"
latest_feature_date: "2019-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users"
keywords:
  - "access"
  - "transparency"
  - "sql"
  - "supports"
  - "logs"
  - "actions"
  - "taken"
  - "staff"
---

# Access Transparency

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports Access Transparency logs for actions taken by Google staff when accessing customer data.

## Extended Definition

Cloud SQL supports Access Transparency logs for actions taken by Google staff when accessing customer data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)

## Supporting Pages

### "Data residency overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access Approval complements the visibility provided by Access Transparency , which generates near-real-time audit logs when Google administrators interact with your data.
- Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- The audit logs include the office location of the administrator and the reason for the access.
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.

### "Manage backups for deleted instances \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-docs-reference-required-4`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ?update mask=ttl days" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2024-02-15T00:10:22.078Z", "operationType": "UPDATE BACKUP", "name": " OPERATION ID ", "targetId": " BACKUP ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Update the retention period using expiration time Use this example to update the retention setting of the final backup using the expiration time parameter: Before using any of the request data, make the following replacements: PROJECT ID : the project ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Update a retained or final backup after instance deletion After you delete an instance, you can update the settings for any retained or final backups associated with that instance that are stored at the project level.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ?update mask=ttl days" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2024-02-15T00:10:22.078Z", "operationType": "UPDATE BACKUP", "name": " OPERATION ID ", "targetId": " BACKUP ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Update the retention period using expiration time Use this example to update the retention setting of the final backup using the expiration time parameter: Before using any of the request data, make the following replacements: PROJECT ID : the project ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } REST v1beta4 Get a list of all retained backs Use this example to get a list of all retained and final backups associated Google Cloud project.

### "Create and manage users \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } Note : The users.list API supports only response payloads that include up to 4 MB of text or roughly 12,000 users.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } Note : The users.list API supports only response payloads that include up to 4 MB of text or roughly 12,000 users.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To update the password for the default user account, use a PUT request with the users:update method.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Create a user After setting up the default user account , you can create other users.

