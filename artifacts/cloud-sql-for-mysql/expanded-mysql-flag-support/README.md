# Expanded MySQL flag support

Product: Cloud SQL for MySQL
Feature slug: `expanded-mysql-flag-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL added support for 122 MySQL database flags.

## Lifecycle

- Latest feature date: 2019-04-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list)
