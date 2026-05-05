# Access Transparency

Product: Cloud SQL for SQL Server
Feature slug: `access-transparency`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports Access Transparency logs for actions taken by Google staff when accessing customer data.

## Lifecycle

- Latest feature date: 2019-11-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
