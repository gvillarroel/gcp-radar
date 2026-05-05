# postgresql-hll extension

Product: Cloud SQL for PostgreSQL
Feature slug: `postgresql-hll-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the postgresql-hll extension for approximate distinct counting with HyperLogLog.

## Lifecycle

- Latest feature date: 2020-05-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
