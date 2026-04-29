# Transaction log storage switch to Cloud Storage

Product: Cloud SQL for PostgreSQL
Feature slug: `transaction-log-storage-switch-to-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL can switch point-in-time recovery transaction log storage to Cloud Storage without downtime using gcloud or the Admin API.

## Lifecycle

- Latest feature date: 2024-09-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- encrypt
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
