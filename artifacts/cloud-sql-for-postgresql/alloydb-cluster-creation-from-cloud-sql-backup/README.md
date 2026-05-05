# AlloyDB cluster creation from Cloud SQL backup

Product: Cloud SQL for PostgreSQL
Feature slug: `alloydb-cluster-creation-from-cloud-sql-backup`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL backups can be used to set up AlloyDB clusters.

## Lifecycle

- Latest feature date: 2024-11-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/CreateBackup)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
