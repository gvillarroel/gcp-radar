# Per-instance CA mode

Product: Cloud SQL for MySQL
Feature slug: `per-instance-ca-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Per-instance CA mode uses a dedicated internal certificate authority for each Cloud SQL instance's server certificate.

## Lifecycle

- Latest feature date: 2024-10-03
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
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
