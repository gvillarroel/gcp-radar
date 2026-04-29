# Automatic cleanup of long-running transactions

Product: Spanner
Feature slug: `automatic-cleanup-of-long-running-transactions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner now supports automatic cleanup of long-running transactions in Java and Go clients to prevent session leaks and emit warning logs for problematic transactions.

## Lifecycle

- Latest feature date: 2023-11-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
