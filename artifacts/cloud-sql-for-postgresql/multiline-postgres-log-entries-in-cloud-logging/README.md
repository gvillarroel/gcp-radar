# Multiline postgres.log entries in Cloud Logging

Product: Cloud SQL for PostgreSQL
Feature slug: `multiline-postgres-log-entries-in-cloud-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL records multiline postgres.log messages as a single Cloud Logging entry.

## Lifecycle

- Latest feature date: 2021-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
