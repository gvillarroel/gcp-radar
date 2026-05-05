# IAM database authentication

Product: Cloud SQL for MySQL
Feature slug: `iam-database-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports IAM database authentication.

## Lifecycle

- Latest feature date: 2021-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
