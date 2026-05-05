# Change data capture with test_decoding

Product: Cloud SQL for PostgreSQL
Feature slug: `change-data-capture-with-test-decoding`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports change data capture using the test_decoding logical decoding plugin.

## Lifecycle

- Latest feature date: 2021-08-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
