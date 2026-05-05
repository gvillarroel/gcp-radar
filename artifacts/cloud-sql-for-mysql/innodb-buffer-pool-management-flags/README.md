# InnoDB buffer pool management flags

Product: Cloud SQL for MySQL
Feature slug: `innodb-buffer-pool-management-flags`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports the innodb_buffer_pool_dump_now, innodb_buffer_pool_load_abort, and innodb_buffer_pool_load_now flags for MySQL 8.0.

## Lifecycle

- Latest feature date: 2023-12-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
