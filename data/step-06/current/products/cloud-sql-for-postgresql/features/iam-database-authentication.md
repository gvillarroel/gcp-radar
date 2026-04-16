---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.818Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM database authentication"
feature_slug: "iam-database-authentication"
latest_feature_date: "2020-12-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/feature_support"
  - "https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication"
keywords:
  - "authentication"
  - "database"
  - "supports"
  - "users"
---

# IAM database authentication

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports IAM database authentication so users and service accounts can log in with IAM credentials; Cloud SQL for PostgreSQL supports IAM database authentication so users and service accounts can log in with IAM credentials.

## Extended Definition

Cloud SQL for PostgreSQL supports IAM database authentication so users and service accounts can log in with IAM credentials; Cloud SQL for PostgreSQL supports IAM database authentication so users and service accounts can log in with IAM credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)

## Supporting Pages

### Cloud SQL feature support by database engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL features MySQL PostgreSQL SQL Server Data protection Backups ✓ ✓ ✓ Point-in-time recovery (PITR) ✓ ✓ ✓ High availability ✓ ✓ ✓ Cloning ✓ ✓ ✓ Disaster recovery ✓ ✓ ✓ Data migration Data migration to external servers ✓ Logs Instance logging ✓ ✓ ✓ Planned maintenance Maintenance windows ✓ ✓ ✓ Maintenance controls ✓ ✓ ✓ Self service maintenance ✓ ✓ ✓ Replication Read replicas ✓ ✓ ✓ Cross-region read replicas ✓ ✓ ✓ External read replicas ✓ ✓ ✓ Binary logging on read replicas ✓ Replication from an external server ✓ ✓ Read replica indexes stored procedures ✓ Logical replication ✓ Security Customer-managed encryption keys (CMEK) ✓ ✓ ✓ Cloud SQL Auth Proxy support ✓ ✓ ✓ Audit logging ✓ ✓ ✓ Connection organization policies ✓ ✓ ✓ IAM database authentication ✓ ✓ Access Transparency (AXT) ✓ ✓ ✓ Key Access Justification ✓ ✓ ✓ Private Service Connect ✓ ✓ ✓ Cloud Security Command Center Monitoring ✓ ✓ ✓ Cloud External Key Manager (EKM) ✓ ✓ ✓ VPC Service Controls ✓ ✓ ✓ Insights Query Insights ✓ ✓ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Cloud SQL Guides Send feedback Cloud SQL feature support by database engine Stay organized with collections Save and categorize content based on your preferences.
- This page lists the main features of Cloud SQL and indicates which database engines support these features.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- You must use quotes around the email because it contains special characters ( @ and . ) TABLE NAME : the name of the table that you want to give the user access to. grant select on TABLE NAME to " USERNAME " ; Grant database privileges to an IAM group When you use IAM group authentication, you grant database privileges to IAM groups instead of granting privileges to individual users or service accounts.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Manage users with IAM database authentication Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how to add and manage users, service accounts, and groups to a Cloud SQL instance that uses IAM database authentication.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes how built-in authentication works on Cloud SQL instances and how database administrators can set password policies for local database users.
- Cloud SQL uses the following types of authentication for database users: The database's built-in authentication uses a username and a password to authenticate local database users.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Cloud SQL built-in database authentication Stay organized with collections Save and categorize content based on your preferences.
- Although IAM database authentication is more secure and reliable, you might prefer to use built-in authentication or a hybrid authentication model that includes both authentication types.

