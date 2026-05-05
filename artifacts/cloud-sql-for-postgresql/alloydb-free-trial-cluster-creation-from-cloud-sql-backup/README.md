# AlloyDB free trial cluster creation from Cloud SQL backup

Product: Cloud SQL for PostgreSQL
Feature slug: `alloydb-free-trial-cluster-creation-from-cloud-sql-backup`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL backups can be used to set up AlloyDB free trial clusters.

## Lifecycle

- Latest feature date: 2024-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
