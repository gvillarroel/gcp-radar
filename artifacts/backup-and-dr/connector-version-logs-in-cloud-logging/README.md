# Connector version logs in Cloud Logging

Product: Backup and DR
Feature slug: `connector-version-logs-in-cloud-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup and DR now supports viewing connector version logs in Cloud Logging.

## Lifecycle

- Latest feature date: 2024-10-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- allow (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- security (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
