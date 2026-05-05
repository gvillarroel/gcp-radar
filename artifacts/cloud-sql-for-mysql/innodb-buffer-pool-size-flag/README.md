# innodb_buffer_pool_size flag

Product: Cloud SQL for MySQL
Feature slug: `innodb-buffer-pool-size-flag`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports the innodb_buffer_pool_size database flag.

## Lifecycle

- Latest feature date: 2021-03-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
