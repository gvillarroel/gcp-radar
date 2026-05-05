# Replication from an external server

Product: Cloud SQL for PostgreSQL
Feature slug: `replication-from-an-external-server`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports replication from an external server.

## Lifecycle

- Latest feature date: 2022-06-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
