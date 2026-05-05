# Dataplex Catalog integration

Product: Cloud SQL for PostgreSQL
Feature slug: `dataplex-catalog-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataplex Catalog integration lets you search for and manage Cloud SQL resources through Dataplex Catalog.

## Lifecycle

- Latest feature date: 2024-07-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
