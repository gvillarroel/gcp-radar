# Database deletion protection

Product: Spanner
Feature slug: `database-deletion-protection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner offers database deletion protection in preview, allowing databases to be protected from accidental deletion.

## Lifecycle

- Latest feature date: 2023-05-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- key
- permission

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
