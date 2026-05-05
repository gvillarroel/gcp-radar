# Spanner Data Boost concurrent requests milli-operations per second per region quota

Product: Spanner
Feature slug: `spanner-data-boost-concurrent-requests-milli-operations-per-second-per-region-quota`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner Data Boost introduces a concurrent requests quota in milli-operations per second per region, with requests split at 1/1000 granularity for finer sharing of Data Boost resources.

## Lifecycle

- Latest feature date: 2025-12-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
