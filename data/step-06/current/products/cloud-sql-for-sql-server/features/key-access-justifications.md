---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.578Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Key Access Justifications"
feature_slug: "key-access-justifications"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users"
keywords:
  - "key"
  - "access"
  - "justifications"
  - "ekm"
  - "lets"
  - "users"
  - "view"
  - "reason"
---

# Key Access Justifications

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Key Access Justifications for Cloud EKM lets users view the reason for each key access request and automatically approve or deny requests based on that justification.

## Extended Definition

Key Access Justifications for Cloud EKM lets users view the reason for each key access request and automatically approve or deny requests based on that justification.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)

## Supporting Pages

### "Data residency overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).
- Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- Control the network locations where users can access data, as well as control cloud administrators' access to this data.

### "Create and manage users \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } Note : The users.list API supports only response payloads that include up to 4 MB of text or roughly 12,000 users.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } Note : The users.list API supports only response payloads that include up to 4 MB of text or roughly 12,000 users.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To update the password for the default user account, use a PUT request with the users:update method.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Create a user After setting up the default user account , you can create other users.

### "Roles and permissions \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL roles and permissions for Knowledge Catalog integration To provide access to Cloud SQL metadata on Knowledge Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- Before you make a resource accessible to other users, be sure you know what roles you want each of those people to play.
- IAM lets you control who has access to the resources in your Google Cloud project.
- Action Roles Create, view, and manage groups. roles/resourcemanager.organizationViewer View the IAM group membership change log. roles/logging.viewer Grant, view, and set IAM permissions at the project level. roles/resourcemanager.projectIamAdmin Grant, view, and set IAM permissions at the folder level. roles/resourcemanager.folderIamAdmin The administrator can grant Cloud SQL roles or give individual Cloud SQL permissions to each group.

