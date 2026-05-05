# Scheduled compliance report delivery to BigQuery

Product: Backup and DR
Feature slug: `scheduled-compliance-report-delivery-to-bigquery`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup and DR Service added support for daily scheduled compliance reports in BigQuery.

## Lifecycle

- Latest feature date: 2024-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- constraint (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
