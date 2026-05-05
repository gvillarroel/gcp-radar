# Customer-managed encryption keys

Product: Cloud SQL for MySQL
Feature slug: `customer-managed-encryption-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports customer-managed encryption keys for encrypting instances with user-managed keys.

## Lifecycle

- Latest feature date: 2019-11-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
