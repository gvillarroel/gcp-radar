---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.443Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL database flags"
feature_slug: "postgresql-database-flags"
latest_feature_date: "2019-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "postgresql"
  - "database"
  - "flags"
  - "sql"
  - "for"
  - "added"
  - "96"
---

# PostgreSQL database flags

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL added support for 96 PostgreSQL database flags.

## Extended Definition

Cloud SQL for PostgreSQL added support for 96 PostgreSQL database flags.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- POSTGRES 9 6 The database version is PostgreSQL 9.6.
- POSTGRES 10 The database version is PostgreSQL 10.
- POSTGRES 11 The database version is PostgreSQL 11.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-db-auth-instance-name-test" region = "us-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Specify the email address of the IAM service account to add to the instance This resource does not create a new IAM service account; this service account must already exist Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-postgres-sa" display name = "Cloud SQL for Postgres Service Account" } resource "google sql user" "iam service account user" { Note: for PostgreSQL only, Google Cloud requires that you omit the ".gserviceaccount.com" suffix from the service account email due to length limits on database usernames. name = trimsuffix(google service account.default.email, ".gserviceaccount.com") instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For example, a log might have information similar to the following: { insertId: "..." logName: "projects/.../logs/cloudaudit.googleapis.com%2Fdata access" protoPayload: { @type: "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo: { principalEmail: "..." } authorizationInfo: [ 0: { granted: true permission: "cloudsql.instances.login" resource: "instances/..." resourceAttributes: { } } ] methodName: "cloudsql.instances.login" request: { @type: "type.googleapis.com/google.cloud.sql.authorization.v1.InstancesLoginRequest" clientIpAddress: "..." database: "..." databaseSessionId: ... instance: "projects/.../locations/us-central1/instances/..." user: "..." } requestMetadata: { callerIp: "..." destinationAttributes: { } requestAttributes: { auth: { } time: "..." } } resourceName: "instances/..." serviceName: "cloudsql.googleapis.com" status: { } } receiveTimestamp: "..." resource: { labels: { database id: "...:..." project id: "..." region: "us-central" } type: "cloudsql database" } severity: "INFO" timestamp: "..." } Troubleshoot a login failure When an attempt to log in fails, PostgreSQL returns a minimal error message for security reasons.
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-iam-group-auth-instance-name" region = "us-west4" database version = "POSTGRES 16" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the Cloud Identity group to add to the instance This resource does not create a Cloud Identity group; the group must already exist resource "google sql user" "iam group" { name = "example-group@example.com" instance = google sql database instance.default.name type = "CLOUD IAM GROUP" } data "google project" "project" { } resource "google project iam binding" "cloud sql user" { project = data.google project.project.project id role = "roles/cloudsql.instanceUser" members = [ "group:example-group@example.com" ] } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Assign database roles while adding an IAM account to an instance To create a custom database role in PostgreSQL, see Database roles . gcloud Create a user account Use the email, such as example-user@example.com , to identify the user. gcloud sql users create USERNAME \ --instance = INSTANCE NAME \ --type = cloud iam user \ --database-roles = ROLE 1 , ROLE 2 Replace the following: USERNAME : the email address for the user.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- April 03, 2019 Feature Support added for 122 MySQL flags and 96 PostgreSQL flags.
- The following information applies to flags and extensions for PostgreSQL 18: Flags The following new flags are available for PostgreSQL 18 only: autovacuum vacuum max threshold autovacuum worker slots enable distinct reordering enable self join elimitation io max concurrency io method io workers log lock failures max active replecation origins track cost delay timing vacuum max eager freeze failure rate vacuum truncate For more information, see Configure database flags .
- May 19, 2023 Feature The following extensions , views , utilities , and flags are generally available: Extensions postgresql anonymizer: mask or replace personally identifiable information (PII) or sensitive data from a PostgreSQL database. pgtt: create, manage and use Oracle-style global temporary tables. rdkit: compare, manipulate, and identify molecular structures.
- The following information applies to flags and extensions for PostgreSQL 17: Flags These flags are deprecated for PostgreSQL 17: old snapshot threshold trace recovery messages For more information, see Configure database flags .

