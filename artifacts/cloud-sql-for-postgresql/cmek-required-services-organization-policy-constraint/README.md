# CMEK required services organization policy constraint

Product: Cloud SQL for PostgreSQL
Feature slug: `cmek-required-services-organization-policy-constraint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The constraints/gcp.restrictNonCmekServices policy constraint controls which resources must use customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2022-04-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- constraint
- encrypt
- iam
- identity
- key
- kms
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
