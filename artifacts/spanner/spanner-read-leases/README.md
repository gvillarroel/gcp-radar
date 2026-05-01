# Spanner read leases

Product: Spanner
Feature slug: `spanner-read-leases`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Read lease regions for Spanner allow strong reads to be served locally from designated non-leader regions in multi-region or dual-region instances, reducing latency by avoiding leader-region round trips.

## Lifecycle

- Latest feature date: 2025-09-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- key

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
