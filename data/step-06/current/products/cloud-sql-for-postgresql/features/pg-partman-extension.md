---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.754Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_partman extension"
feature_slug: "pg-partman-extension"
latest_feature_date: "2025-04-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/samples"
keywords:
  - "partman"
  - "updated"
  - "available"
  - "extension"
  - "version"
---

# pg_partman extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The pg_partman PostgreSQL extension is available in Cloud SQL with support updated to version 5.2.4 for PostgreSQL 14 and later; Cloud SQL for PostgreSQL supports the pg_partman extension for managing time-based and serial-based table partitions.

## Extended Definition

The pg_partman PostgreSQL extension is available in Cloud SQL with support updated to version 5.2.4 for PostgreSQL 14 and later; Cloud SQL for PostgreSQL supports the pg_partman extension for managing time-based and serial-based table partitions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/samples](https://docs.cloud.google.com/sql/docs/postgres/samples)

## Supporting Pages

### All Cloud SQL for PostgreSQL code samples \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/samples](https://docs.cloud.google.com/sql/docs/postgres/samples)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

### "Private Service Connect overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- You can use outbound connectivity to migrate data from an external server within your network, use PostgreSQL extensions that require an outbound connection to your Cloud SQL instance, or do a homogeneous migration using Database Migration Service.

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- Recovery backups Cloud SQL attempts to retain at least one last daily backup of every active instance, if there are no good backups available as part of the automated backup policy.
- To upgrade to a later version, perform an in-place major version upgrade , use the Database Migration Service , or export and then import your database to a new Cloud SQL instance.

