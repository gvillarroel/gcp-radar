# SLA-impacting database flags

Product: Cloud SQL for MySQL
Feature slug: `sla-impacting-database-flags`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL added the innodb_flush_log_at_trx_commit and sync_binlog database flags that affect the Cloud SQL SLA.

## Lifecycle

- Latest feature date: 2023-05-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- iam
- key
- logging
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
