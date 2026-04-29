# PostgreSQL 15 support

Product: Cloud SQL for PostgreSQL
Feature slug: `postgresql-15-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports PostgreSQL 15 in general availability.

## Lifecycle

- Latest feature date: 2023-05-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- encrypt
- key
- kms

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
