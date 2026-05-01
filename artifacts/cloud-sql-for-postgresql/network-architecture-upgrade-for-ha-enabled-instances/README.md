# Network architecture upgrade for HA-enabled instances

Product: Cloud SQL for PostgreSQL
Feature slug: `network-architecture-upgrade-for-ha-enabled-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Network architecture upgrade for HA-enabled instances supports upgrading instances in a region even when multiple instances share the same network and region.

## Lifecycle

- Latest feature date: 2024-03-05
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
- encrypt
- key
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
