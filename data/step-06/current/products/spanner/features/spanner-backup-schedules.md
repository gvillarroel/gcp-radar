---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.210Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner backup schedules"
feature_slug: "spanner-backup-schedules"
latest_feature_date: "2024-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest"
keywords:
  - "timing"
  - "schedules"
  - "managing"
  - "define"
  - "backup"
  - "creating"
  - "supports"
---

# Spanner backup schedules

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports creating and managing backup schedules to define backup timing, frequency, retention, and encryption type.

## Extended Definition

Spanner supports creating and managing backup schedules to define backup timing, frequency, retention, and encryption type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest)

## Supporting Pages

### "Class BackupScheduleSpec (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 BackupScheduleSpec ( mapping = None , , ignore unknown fields = False , kwargs ) Defines specifications of the backup schedule. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields Attribute Name Description cron spec google.cloud.spanner admin database v1.types.CrontabSpec Cron style schedule specification.
- Home Documentation Developer tools Python Client libraries Send feedback Class BackupScheduleSpec (3.63.0) Stay organized with collections Save and categorize content based on your preferences.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You can enable or disable default backup schedules in an instance when creating the instance or by editing the instance later.
- Note: Backup schedules for newly created databases take up to 24 hours to become active and start creating backups.
- For more information about creating incremental backups, see Create and manage backup schedules .
- The following table shows possible storage costs for these backup schedules: Day Full schedule backup size Incremental schedule backup size 1 100 GB 100 GB 2 110 GB 10 GB 3 120 GB 10 GB 4 130 GB 10 GB 5 140 GB 10 GB Over 5 days, the full backup schedule uses 600 GB of storage, while the incremental backup schedule uses about 140 GB of storage.

### "Class CreateDatabaseRequest (3.63.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest)
- Source ID: `site-python-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

