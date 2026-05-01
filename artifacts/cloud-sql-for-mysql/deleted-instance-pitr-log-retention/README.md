# Deleted instance PITR log retention

Product: Cloud SQL for MySQL
Feature slug: `deleted-instance-pitr-log-retention`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature retains point-in-time recovery logs after instance deletion so the deleted instance can be restored to a specific time.

## Lifecycle

- Latest feature date: 2025-09-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- encrypt
- key
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
