# MySQL 8.0.30 support

Product: Cloud SQL for MySQL
Feature slug: `mysql-8-0-30-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.30.

## Lifecycle

- Latest feature date: 2022-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- encrypt
- key
- kms
- logging
- secret

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
