# Mounted image logs in Cloud Logging

Product: Backup and DR
Feature slug: `mounted-image-logs-in-cloud-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added support to view mounted image logs in Cloud Logging.

## Lifecycle

- Latest feature date: 2024-09-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- allow (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- security (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
