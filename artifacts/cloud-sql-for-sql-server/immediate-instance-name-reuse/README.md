# Immediate instance name reuse

Product: Cloud SQL for SQL Server
Feature slug: `immediate-instance-name-reuse`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL allows an instance name to be reused immediately after the instance is deleted.

## Lifecycle

- Latest feature date: 2022-09-21
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
- iam
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
