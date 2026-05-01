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

- access
- auth
- authorization
- logging
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
