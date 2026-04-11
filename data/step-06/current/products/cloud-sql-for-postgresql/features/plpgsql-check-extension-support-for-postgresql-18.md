---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.277Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "plpgsql_check extension support for PostgreSQL 18"
feature_slug: "plpgsql-check-extension-support-for-postgresql-18"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "plpgsql"
  - "check"
  - "extension"
  - "for"
  - "postgresql"
  - "18"
  - "makes"
  - "the"
---

# plpgsql_check extension support for PostgreSQL 18

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Plpgsql_check extension support for PostgreSQL 18 makes the plpgsql_check extension available on PostgreSQL 18; plpgsql_check extension support for PostgreSQL 18 makes the plpgsql_check extension available on PostgreSQL 18.

## Extended Definition

Plpgsql_check extension support for PostgreSQL 18 makes the plpgsql_check extension available on PostgreSQL 18; plpgsql_check extension support for PostgreSQL 18 makes the plpgsql_check extension available on PostgreSQL 18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following extensions are available for PostgreSQL 18: anon pg hint plan pg wait sampling plpgsql check tds fdw To use these versions of the extensions and plugins, update your instance to [PostgreSQL version].R20251004.01 14 .
- The following extensions are also now available for PostgreSQL 18: pg hint plan pgrouting anonymizer pg wait sampling tds fdw plpgsql check For more information about these extensions, see Configure PostgreSQL extensions .
- Extensions The following extensions aren't available for PostgreSQL 18: pgRouting plpgsql check pg hint plan pgrouting anonymizer pg wait sampling tds fdw For more information, see Configure PostgreSQL extensions .
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 05, 2025 Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-db-auth-instance-name-test" region = "us-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Specify the email address of the IAM service account to add to the instance This resource does not create a new IAM service account; this service account must already exist Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-postgres-sa" display name = "Cloud SQL for Postgres Service Account" } resource "google sql user" "iam service account user" { Note: for PostgreSQL only, Google Cloud requires that you omit the ".gserviceaccount.com" suffix from the service account email due to length limits on database usernames. name = trimsuffix(google service account.default.email, ".gserviceaccount.com") instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For example, a log might have information similar to the following: { insertId: "..." logName: "projects/.../logs/cloudaudit.googleapis.com%2Fdata access" protoPayload: { @type: "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo: { principalEmail: "..." } authorizationInfo: [ 0: { granted: true permission: "cloudsql.instances.login" resource: "instances/..." resourceAttributes: { } } ] methodName: "cloudsql.instances.login" request: { @type: "type.googleapis.com/google.cloud.sql.authorization.v1.InstancesLoginRequest" clientIpAddress: "..." database: "..." databaseSessionId: ... instance: "projects/.../locations/us-central1/instances/..." user: "..." } requestMetadata: { callerIp: "..." destinationAttributes: { } requestAttributes: { auth: { } time: "..." } } resourceName: "instances/..." serviceName: "cloudsql.googleapis.com" status: { } } receiveTimestamp: "..." resource: { labels: { database id: "...:..." project id: "..." region: "us-central" } type: "cloudsql database" } severity: "INFO" timestamp: "..." } Troubleshoot a login failure When an attempt to log in fails, PostgreSQL returns a minimal error message for security reasons.
- Assign database roles while adding an IAM account to an instance To create a custom database role in PostgreSQL, see Database roles . gcloud Create a user account Use the email, such as example-user@example.com , to identify the user. gcloud sql users create USERNAME \ --instance = INSTANCE NAME \ --type = cloud iam user \ --database-roles = ROLE 1 , ROLE 2 Replace the following: USERNAME : the email address for the user.
- For example: PGPASSWORD=not-a-password psql --host=... --username=... --dbname=... psql: error: could not connect to server: FATAL: Cloud SQL IAM user authentication failed for user "..." FATAL: pg hba.conf rejects connection for host "...", user "...", database "...", SSL off You can review the PostgreSQL error logs for more details about the error.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- The following extensions are available for PostgreSQL 18: anon pg hint plan pg wait sampling plpgsql check tds fdw To use these versions of the extensions and plugins, update your instance to [PostgreSQL version].R20251004.01 14 .
- The following extensions are also now available for PostgreSQL 18: pg hint plan pgrouting anonymizer pg wait sampling tds fdw plpgsql check For more information about these extensions, see Configure PostgreSQL extensions .
- Extensions The following extensions aren't available for PostgreSQL 18: pgRouting plpgsql check pg hint plan pgrouting anonymizer pg wait sampling tds fdw For more information, see Configure PostgreSQL extensions .
- November 05, 2025 Cloud SQL for PostgreSQL Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.

