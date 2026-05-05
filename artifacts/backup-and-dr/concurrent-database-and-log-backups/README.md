# Concurrent database and log backups

Product: Backup and DR
Feature slug: `concurrent-database-and-log-backups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup and DR Service added support for running database backups and log backups concurrently.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb), [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb), [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan))
- role (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb), [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
