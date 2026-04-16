---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.766Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM group authentication"
feature_slug: "iam-group-authentication"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/project-access-control"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions"
keywords:
  - "group"
  - "groups"
  - "authentication"
  - "lets"
---

# IAM group authentication

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

IAM group authentication lets you add IAM groups to Cloud SQL instances and manage database access at the group level.

## Extended Definition

IAM group authentication lets you add IAM groups to Cloud SQL instances and manage database access at the group level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)

## Supporting Pages

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Built-in database authentication IAM database authentication (individual) IAM group authentication Authentication method Password Temporary authentication token Temporary authentication token Network traffic encryption SSL not required SSL required SSL required User management Manual Centralized through IAM Centralized through IAM and Cloud Identity groups IAM group authentication IAM group authentication lets you manage Cloud SQL users at a group level.
- By group : IAM group authentication lets you control access to Cloud SQL instances at a group level.
- IAM group authentication restrictions You can add a maximum of 200 IAM groups to an instance.
- Note: If a Cloud SQL instance already has an IAM user ( CLOUD IAM USER ) or service account ( CLOUD IAM SERVICE ACCOUNT ) and you want to switch the account to use IAM group authentication ( CLOUD IAM GROUP USER or CLOUD IAM GROUP SERVICE ACCOUNT ), then you must remove the existing IAM user or service account from the instance first.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must use quotes around the email because it contains special characters ( @ and . ) TABLE NAME : the name of the table that you want to give the user access to. grant select on TABLE NAME to " USERNAME " ; Grant database privileges to an IAM group When you use IAM group authentication, you grant database privileges to IAM groups instead of granting privileges to individual users or service accounts.
- MySQL PostgreSQL SQL Server This page describes how to add and manage users, service accounts, and groups to a Cloud SQL instance that uses IAM database authentication.
- Inactive IAM groups can't be used for IAM group authentication.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users/list" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "example-service-acct@ PROJECT ID .iam", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM SERVICE ACCOUNT", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "another-example-service-acct@ PROJECT ID .iam", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP SERVICE ACCOUNT", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "postgres", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "example-user@example.com", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM USER", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "another-example-user@example.com", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP USER", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "example-group@example.com", "host": "", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP", "iamStatus": "ACTIVE" } ] } Groups have a user type of CLOUD IAM GROUP .

### Roles and permissions \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL roles and permissions with IAM group authentication When you use IAM group authentication, you create groups.
- Action Roles Create, view, and manage groups. roles/resourcemanager.organizationViewer View the IAM group membership change log. roles/logging.viewer Grant, view, and set IAM permissions at the project level. roles/resourcemanager.projectIamAdmin Grant, view, and set IAM permissions at the folder level. roles/resourcemanager.folderIamAdmin The administrator can grant Cloud SQL roles or give individual Cloud SQL permissions to each group.
- You can then use the groups to manage access and database privileges to your Cloud SQL instances.
- The following table lists the roles that are required to manage IAM group authentication.

