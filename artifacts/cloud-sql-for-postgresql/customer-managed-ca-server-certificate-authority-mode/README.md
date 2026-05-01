# Customer-managed CA server certificate authority mode

Product: Cloud SQL for PostgreSQL
Feature slug: `customer-managed-ca-server-certificate-authority-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed CA mode lets you use your own CA hierarchy in Certificate Authority Service for Cloud SQL server certificates; Customer-managed CA mode lets you configure your own CA pool and CA in Certificate Authority Service for Cloud SQL server certificates.

## Lifecycle

- Latest feature date: 2025-05-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- encrypt
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
