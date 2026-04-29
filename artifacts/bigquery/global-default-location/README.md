# Global default location

Product: BigQuery
Feature slug: `global-default-location`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports a global default location at the organization or project level when request location is unset or cannot be inferred.

## Lifecycle

- Latest feature date: 2026-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- private

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
