# Deny maintenance period for outdated maintenance versions

Product: Cloud SQL for MySQL
Feature slug: `deny-maintenance-period-for-outdated-maintenance-versions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This capability lets you set a deny maintenance period for instances running older maintenance versions; deprecated on 2025-08-15.

## Lifecycle

- Latest feature date: 2025-08-15
- Deprecation date: 2025-08-15
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
