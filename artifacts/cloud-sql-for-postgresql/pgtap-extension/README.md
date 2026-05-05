# pgTAP extension

Product: Cloud SQL for PostgreSQL
Feature slug: `pgtap-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the pgTAP extension for unit testing in PostgreSQL.

## Lifecycle

- Latest feature date: 2021-03-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk), [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk), [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk), [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk](https://docs.cloud.google.com/sql/docs/postgres/cloud-sdk)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
