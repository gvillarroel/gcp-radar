# Spanner ANN distance functions in GoogleSQL

Product: Spanner
Feature slug: `spanner-ann-distance-functions-in-googlesql`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports ANN vector distance functions APPROX_COSINE_DISTANCE(), APPROX_EUCLIDEAN_DISTANCE(), and APPROX_DOT_PRODUCT() in GoogleSQL.

## Lifecycle

- Latest feature date: 2024-07-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- logging

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- [https://docs.cloud.google.com/spanner/docs/rest-endpoints](https://docs.cloud.google.com/spanner/docs/rest-endpoints)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
