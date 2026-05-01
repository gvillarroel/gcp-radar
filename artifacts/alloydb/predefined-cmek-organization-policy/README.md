# Predefined CMEK organization policy

Product: AlloyDB
Feature slug: `predefined-cmek-organization-policy`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports a predefined organization policy to require customer-managed encryption keys for clusters and backups.

## Lifecycle

- Latest feature date: 2024-09-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- encrypt
- iam
- key
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
