# PostgreSQL 10

Product: Cloud SQL for PostgreSQL
Feature slug: `postgresql-10`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports PostgreSQL major version 10; Cloud SQL for PostgreSQL offers PostgreSQL major version 10 in beta.

## Lifecycle

- Latest feature date: 2020-03-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- encrypt
- key
- kms
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
