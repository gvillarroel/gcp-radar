# Shared CA mode

Product: Cloud SQL for MySQL
Feature slug: `shared-ca-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Shared CA mode lets Cloud SQL instances use a regional shared certificate authority hierarchy hosted on Certificate Authority Service; Shared CA mode uses a regional shared certificate authority hierarchy on Certificate Authority Service to sign Cloud SQL server certificates.

## Lifecycle

- Latest feature date: 2025-05-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- key
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
