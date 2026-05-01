# Cross-region read replicas

Product: Cloud SQL for PostgreSQL
Feature slug: `cross-region-read-replicas`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports read replicas in a different region from the primary instance.

## Lifecycle

- Latest feature date: 2020-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- encrypt
- key
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
