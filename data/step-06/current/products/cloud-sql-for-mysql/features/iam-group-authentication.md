---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.913Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "IAM group authentication"
feature_slug: "iam-group-authentication"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
keywords:
  - "iam"
  - "group"
  - "authentication"
  - "lets"
  - "you"
  - "add"
  - "groups"
  - "sql"
---

# IAM group authentication

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

IAM group authentication lets you add IAM groups to Cloud SQL instances and manage database access at the group level; IAM group authentication lets Cloud SQL for MySQL instances use IAM groups for database authentication and access management.

## Extended Definition

IAM group authentication lets you add IAM groups to Cloud SQL instances and manage database access at the group level; IAM group authentication lets Cloud SQL for MySQL instances use IAM groups for database authentication and access management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)

## Supporting Pages

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Built-in database authentication IAM database authentication (individual) IAM group authentication Authentication method Password Temporary authentication token Temporary authentication token Network traffic encryption SSL not required SSL required SSL required User management Manual Centralized through IAM Centralized through IAM and Cloud Identity groups IAM group authentication IAM group authentication lets you manage Cloud SQL users at a group level.
- By group : IAM group authentication lets you control access to Cloud SQL instances at a group level.
- IAM group authentication restrictions You can add a maximum of 200 IAM groups to an instance.
- Note: If a Cloud SQL instance already has an IAM user ( CLOUD IAM USER ) or service account ( CLOUD IAM SERVICE ACCOUNT ) and you want to switch the account to use IAM group authentication ( CLOUD IAM GROUP USER or CLOUD IAM GROUP SERVICE ACCOUNT ), then you must remove the existing IAM user or service account from the instance first.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TABLE NAME to " USERNAME " ; Grant database privileges to an IAM group When you use IAM group authentication, you grant database privileges to IAM groups instead of granting privileges to individual users or service accounts.
- MySQL PostgreSQL SQL Server This page describes how to add and manage users, service accounts, and groups to a Cloud SQL instance that uses IAM database authentication.
- Inactive IAM groups can't be used for IAM group authentication.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users/list" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "example-service-acct", "host": "%", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM SERVICE ACCOUNT", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "another-example-service-acct", "host": "%", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP SERVICE ACCOUNT", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "root", "host": "%", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "passwordPolicy": { "status": {} }, "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "example-user", "host": "%", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM USER", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "another-example-user", "host": "%", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP USER", "iamStatus": "IAM STATUS UNSPECIFIED" }, { "kind": "sql#user", "etag": "--redacted--", "name": "example-group", "host": "%", "instance": " INSTANCE ID ", "project": " PROJECT ID ", "type": "CLOUD IAM GROUP", "iamStatus": "ACTIVE" } ] } Groups have a user type of CLOUD IAM GROUP .

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference-required-4`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

