# wal_receiver_timeout flag

Product: Cloud SQL for PostgreSQL
Feature slug: `wal-receiver-timeout-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The wal_receiver_timeout flag terminates inactive replication connections after a configured interval.

## Lifecycle

- Latest feature date: 2022-02-07
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
- identity
- key
- logging
- permission
- policy
- private
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
