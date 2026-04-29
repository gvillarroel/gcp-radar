# HA-enabled external server replicas

Product: Cloud SQL for MySQL
Feature slug: `ha-enabled-external-server-replicas`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports creating external server replicas with high availability enabled.

## Lifecycle

- Latest feature date: 2022-07-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- encrypt
- iam
- key
- kms
- private
- secret

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
