# Long-running backup job alerts with application context

Product: Backup and DR
Feature slug: `long-running-backup-job-alerts-with-application-context`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Alerts for long-running jobs were improved to include application type and application name.

## Lifecycle

- Latest feature date: 2025-10-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions)
