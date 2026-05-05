# Lagging replica recreation

Product: Cloud SQL for MySQL
Feature slug: `lagging-replica-recreation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lagging replica recreation lets Cloud SQL for MySQL recreate a replica when replication falls behind a predefined threshold.

## Lifecycle

- Latest feature date: 2025-02-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
