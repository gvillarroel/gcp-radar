# Access Transparency

Product: Cloud SQL for PostgreSQL
Feature slug: `access-transparency`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports Access Transparency logs for Google staff actions that access customer data.

## Lifecycle

- Latest feature date: 2019-11-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
