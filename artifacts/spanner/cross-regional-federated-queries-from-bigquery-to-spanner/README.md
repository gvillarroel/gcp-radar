# Cross-regional federated queries from BigQuery to Spanner

Product: Spanner
Feature slug: `cross-regional-federated-queries-from-bigquery-to-spanner`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports querying Spanner tables from BigQuery in a different region than the BigQuery region through cross-region federation.

## Lifecycle

- Latest feature date: 2025-05-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- identity
- key

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
