---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.800Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "refint extension"
feature_slug: "refint-extension"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/error-messages"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/features"
keywords:
  - "referencing"
  - "refint"
  - "checks"
  - "foreign"
  - "constraints"
  - "between"
  - "extension"
---

# refint extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The refint extension checks foreign key constraints between referencing and referenced tables.

## Extended Definition

The refint extension checks foreign key constraints between referencing and referenced tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)

## Supporting Pages

### Cloud SQL error messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Disable the foreign key checks for the mysql client session and access the table. mysql> SET SESSION FOREIGN KEY CHECKS = 0 ; Inspect the parent and child tables and identify the mismatches between the foreign key and referenced key columns. mysql> SHOW CREATE TABLE parent table ; mysql> SHOW CREATE TABLE child table ; Verify the corresponding columns have similar data types.
- If it detects the discrepancy, it blocks the access to that table. mysql> select from db.table ; ERROR 1146 ( 42S02 ) : Table db.table doesn ' t exist Turning off foreign key checks for the MySQL session allows access to the table again.
- Turn off 'foreign key checks' and try again. [ Warning ] InnoDB: Cannot open table db/table from the internal data dictionary of InnoDB though the .frm file for the table exists.
- Re-enable foreign key checks again. mysql> SET SESSION FOREIGN KEY CHECKS = 1 ; (Timeout) during export.

### Cloud SQL for PostgreSQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Differences between standard PostgreSQL and Cloud SQL for PostgreSQL In general, the PostgreSQL functionality provided by a Cloud SQL instance is the same as the functionality provided by a locally-hosted PostgreSQL instance.
- Unsupported features for Cloud SQL for PostgreSQL Any feature that requires SUPERUSER privileges with the following exceptions: You can use the CREATE EXTENSION statement only for supported extensions .
- Notable differences between PostgreSQL and Cloud SQL for PostgreSQL Some PostgreSQL options and parameters aren't enabled for editing as Cloud SQL flags .
- However, there are a few differences between a standard PostgreSQL instance and a Cloud SQL instance.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- Or, alternatively, you can use the --tier flag if you choose db-f1-micro or db-g1-small as the machine type: gcloud sql instances create INSTANCE NAME \ --tier = API TIER STRING \ --region = REGION There are restrictions on the values for vCPUs and memory size: vCPUs must be either 1 or an even number between 2 and 96.
- Using both architectures: Your limit will be somewhere between 100 and 1000, depending on the distribution of your instances across the two architectures.

