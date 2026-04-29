# Read replicas with private services access and connector enforcement

Product: Cloud SQL for PostgreSQL
Feature slug: `read-replicas-with-private-services-access-and-connector-enforcement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL can create read replicas for instances that use private services access together with connector enforcement.

## Lifecycle

- Latest feature date: 2024-10-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- iam
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
