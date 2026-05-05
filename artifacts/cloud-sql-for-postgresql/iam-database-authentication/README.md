# IAM database authentication

Product: Cloud SQL for PostgreSQL
Feature slug: `iam-database-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports IAM database authentication so users and service accounts can log in with IAM credentials; Cloud SQL for PostgreSQL supports IAM database authentication so users and service accounts can log in with IAM credentials.

## Lifecycle

- Latest feature date: 2020-12-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- credential (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
