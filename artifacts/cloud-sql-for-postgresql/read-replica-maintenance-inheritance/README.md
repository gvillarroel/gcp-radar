# Read replica maintenance inheritance

Product: Cloud SQL for PostgreSQL
Feature slug: `read-replica-maintenance-inheritance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance.

## Lifecycle

- Latest feature date: 2023-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- encrypt
- iam
- key
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
