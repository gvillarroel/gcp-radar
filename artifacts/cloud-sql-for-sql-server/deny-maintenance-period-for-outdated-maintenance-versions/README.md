# Deny maintenance period for outdated maintenance versions

Product: Cloud SQL for SQL Server
Feature slug: `deny-maintenance-period-for-outdated-maintenance-versions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deny maintenance period configuration lets you block maintenance during a specified period for an instance; deprecated on 2025-08-15.

## Lifecycle

- Latest feature date: 2025-08-15
- Deprecation date: 2025-08-15
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
