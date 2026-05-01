# CMEK allowed key projects organization policy constraint

Product: Cloud SQL for PostgreSQL
Feature slug: `cmek-allowed-key-projects-organization-policy-constraint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The constraints/gcp.restrictCmekCryptoKeyProjects policy constraint controls which projects can supply Cloud KMS keys for CMEK.

## Lifecycle

- Latest feature date: 2022-04-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- constraint
- credential
- encrypt
- iam
- key
- kms
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
