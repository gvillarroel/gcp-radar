# Server certificate authority mode selection

Product: Cloud SQL for PostgreSQL
Feature slug: `server-certificate-authority-mode-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL can configure server certificate authority mode at instance creation using either per-instance CA or shared CA.

## Lifecycle

- Latest feature date: 2024-10-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
