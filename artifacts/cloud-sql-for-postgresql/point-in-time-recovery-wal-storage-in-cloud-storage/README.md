# Point-in-time recovery WAL storage in Cloud Storage

Product: Cloud SQL for PostgreSQL
Feature slug: `point-in-time-recovery-wal-storage-in-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

For instances with point-in-time recovery enabled, Cloud SQL for PostgreSQL can store write-ahead logs in Google Cloud Storage instead of on disk.

## Lifecycle

- Latest feature date: 2023-01-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- encrypt
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
