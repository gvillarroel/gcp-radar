# High-availability read replicas

Product: Cloud SQL for MySQL
Feature slug: `high-availability-read-replicas`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports enabling high availability for read replicas.

## Lifecycle

- Latest feature date: 2022-07-11
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
- logging
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
