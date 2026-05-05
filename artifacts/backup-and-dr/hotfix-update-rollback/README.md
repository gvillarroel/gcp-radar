# Hotfix update rollback

Product: Backup and DR
Feature slug: `hotfix-update-rollback`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup and DR Service added the ability to roll back hotfix updates.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance)
