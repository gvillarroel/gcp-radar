# Spanner SEQUENCE DDL for primary key default values

Product: Spanner
Feature slug: `spanner-sequence-ddl-for-primary-key-default-values`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support for integer SEQUENCE DDL objects used in PRIMARY KEY DEFAULT expressions to generate unique, uniformly distributed integer keys.

## Lifecycle

- Latest feature date: 2023-08-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- key

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
