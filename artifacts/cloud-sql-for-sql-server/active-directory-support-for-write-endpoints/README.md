# Active Directory support for write endpoints

Product: Cloud SQL for SQL Server
Feature slug: `active-directory-support-for-write-endpoints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Active Directory support for write endpoints enables AD-based access for Cloud SQL write endpoints across forests.

## Lifecycle

- Latest feature date: 2025-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
