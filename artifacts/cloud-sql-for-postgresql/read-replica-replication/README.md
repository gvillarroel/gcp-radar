# Read replica replication

Product: Cloud SQL for PostgreSQL
Feature slug: `read-replica-replication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL added Beta support for replication capabilities for PostgreSQL instances.

## Lifecycle

- Latest feature date: 2017-11-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
