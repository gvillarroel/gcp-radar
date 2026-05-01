# Point-in-time recovery for unavailable instances

Product: Cloud SQL for PostgreSQL
Feature slug: `point-in-time-recovery-for-unavailable-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Point-in-time recovery can recover an unavailable Cloud SQL instance by using the API to retrieve the latest recovery time and restore to it.

## Lifecycle

- Latest feature date: 2023-08-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
