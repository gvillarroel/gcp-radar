# pg_squeeze extension

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-squeeze-extension`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The pg_squeeze extension removes unused space from tables and can use an index to sort tuples during processing.

## Lifecycle

- Latest feature date: 2024-02-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics), [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager)
