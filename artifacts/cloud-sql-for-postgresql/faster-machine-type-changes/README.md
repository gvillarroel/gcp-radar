# Faster machine type changes

Product: Cloud SQL for PostgreSQL
Feature slug: `faster-machine-type-changes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL reduces connectivity interruption during machine type changes to under 60 seconds.

## Lifecycle

- Latest feature date: 2022-06-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
