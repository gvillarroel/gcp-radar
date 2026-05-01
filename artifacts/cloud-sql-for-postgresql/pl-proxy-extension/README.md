# PL/Proxy extension

Product: Cloud SQL for PostgreSQL
Feature slug: `pl-proxy-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the PL/Proxy extension for partitioning and proxying function calls.

## Lifecycle

- Latest feature date: 2020-05-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
