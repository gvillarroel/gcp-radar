# Backup and restore rate limiting

Product: Cloud SQL for PostgreSQL
Feature slug: `backup-and-restore-rate-limiting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL limits backup and restore throughput on the data disk.

## Lifecycle

- Latest feature date: 2021-12-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
