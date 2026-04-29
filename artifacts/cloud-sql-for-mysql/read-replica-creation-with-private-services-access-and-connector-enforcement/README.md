# Read replica creation with private services access and connector enforcement

Product: Cloud SQL for MySQL
Feature slug: `read-replica-creation-with-private-services-access-and-connector-enforcement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL can create read replicas for instances that use private services access and have connector enforcement enabled.

## Lifecycle

- Latest feature date: 2024-10-21
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
- key
- logging
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
