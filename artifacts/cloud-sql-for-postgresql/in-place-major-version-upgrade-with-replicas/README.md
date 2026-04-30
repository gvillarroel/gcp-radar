# In-place major version upgrade with replicas

Product: Cloud SQL for PostgreSQL
Feature slug: `in-place-major-version-upgrade-with-replicas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

In-place major version upgrades can now include read replicas when performed with gcloud or the Cloud SQL Admin API.

## Lifecycle

- Latest feature date: 2025-02-26
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
- encrypt
- key
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
