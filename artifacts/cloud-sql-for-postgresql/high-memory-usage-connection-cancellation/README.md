# High memory usage connection cancellation

Product: Cloud SQL for PostgreSQL
Feature slug: `high-memory-usage-connection-cancellation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

High memory usage connection cancellation proactively detects and cancels connections that could trigger out-of-memory failures.

## Lifecycle

- Latest feature date: 2025-10-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
