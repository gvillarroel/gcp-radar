# Transaction statistics commit retry reporting

Product: Spanner
Feature slug: `transaction-statistics-commit-retry-reporting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner transaction statistics now include commit retry information to help diagnose performance issues caused by transaction aborts.

## Lifecycle

- Latest feature date: 2021-04-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- logging

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
