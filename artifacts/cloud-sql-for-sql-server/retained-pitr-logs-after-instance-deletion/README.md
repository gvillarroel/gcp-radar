# Retained PITR logs after instance deletion

Product: Cloud SQL for SQL Server
Feature slug: `retained-pitr-logs-after-instance-deletion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Retained PITR logs after instance deletion preserve recovery logs for a defined period so deleted instances can be restored to a specific point in time.

## Lifecycle

- Latest feature date: 2025-09-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
