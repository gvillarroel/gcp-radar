# Server certificate authority mode configuration

Product: Cloud SQL for SQL Server
Feature slug: `server-certificate-authority-mode-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you choose the server certificate authority mode when creating an instance.

## Lifecycle

- Latest feature date: 2024-10-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
