# Automatic stop on low storage

Product: Cloud SQL for SQL Server
Feature slug: `automatic-stop-on-low-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL automatically stops a database instance when it is nearly out of storage capacity to prevent data loss.

## Lifecycle

- Latest feature date: 2021-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- logging
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
