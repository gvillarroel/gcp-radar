# Immediate instance name reuse

Product: Cloud SQL for MySQL
Feature slug: `immediate-instance-name-reuse`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL allows immediate reuse of an instance name after the instance is deleted.

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
- credential
- encrypt
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
