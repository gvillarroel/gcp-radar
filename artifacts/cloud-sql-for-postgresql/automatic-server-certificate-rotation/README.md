# Automatic server certificate rotation

Product: Cloud SQL for PostgreSQL
Feature slug: `automatic-server-certificate-rotation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Automatic server certificate rotation automatically rotates server certificates for instances that use Certificate Authority Service.

## Lifecycle

- Latest feature date: 2026-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- encrypt
- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
