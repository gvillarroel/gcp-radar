---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.799Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_bigm extension"
feature_slug: "pg-bigm-extension"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "indexing"
  - "bigram"
  - "bigm"
  - "full"
  - "faster"
  - "adds"
  - "extension"
---

# pg_bigm extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_bigm extension adds bigram indexing to support faster full-text search.

## Extended Definition

The pg_bigm extension adds bigram indexing to support faster full-text search.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- When you add a new member (user or service account) to the IAM group in Cloud Identity and they log in to the instance successfully for the first time, then they inherit the database privileges granted to the group automatically.
- After a group member logs in and authenticates successfully to the primary instance for the first time, Cloud SQL creates a group user account or group service account for that group member.
- Add an IAM policy binding to a user, service account, or group This procedure adds a policy binding to the IAM policy of a specific project, given a project ID and the binding.
- The next time that the IAM user logs in successfully, the user is recreated as an IAM group user which can use IAM group authentication.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- If you are using Node.js with verify-full or its equivalent, please use the DNS name for the servername parameter.
- Unable to create a replica instance after successfully creating a primary instance with the final backup setting.
- Every update on such a table without a unique/primary key causes full table scans on th replica.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- User roles The following table provides information about the roles required to use Private Service Connect with a Cloud SQL instance: Role Description compute.networkAdmin Grants full control over the VPC network that initiates a connection to a Cloud SQL instance.
- You can confirm that Private Service Connect outbound connectivity was enabled successfully by running gcloud sql instances describe .
- If you see psc-network-attachment-uri in the output, then Private Service Connect outbound connectivity was enabled successfully.

