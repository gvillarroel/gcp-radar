# CMEK organization policy constraint: restrictCmekCryptoKeyProjects

Product: Cloud SQL for MySQL
Feature slug: `cmek-organization-policy-constraint-restrictcmekcryptokeyprojects`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports the constraints/gcp.restrictCmekCryptoKeyProjects organization policy constraint to limit which projects can supply Cloud KMS keys in Preview.

## Lifecycle

- Latest feature date: 2022-04-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- constraint
- encrypt
- iam
- key
- kms
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
