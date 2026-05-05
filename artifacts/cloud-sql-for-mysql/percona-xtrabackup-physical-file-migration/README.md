# Percona XtraBackup physical file migration

Product: Cloud SQL for MySQL
Feature slug: `percona-xtrabackup-physical-file-migration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports migrating external MySQL 5.7 and 8.0 databases by using Percona XtraBackup physical files; Cloud SQL supports migrating external MySQL 5.7 and 8.0 databases by using Percona XtraBackup physical files.

## Lifecycle

- Latest feature date: 2024-07-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
