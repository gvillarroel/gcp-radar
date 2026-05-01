# Default backup schedules

Product: Spanner
Feature slug: `default-backup-schedules`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner now supports default backup schedules that are automatically enabled for new instances and create full backups every 24 hours with 7-day retention for each new database, with options to enable, disable, edit, or delete schedules.

## Lifecycle

- Latest feature date: 2024-11-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- iam
- key
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
