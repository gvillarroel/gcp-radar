# SSL certificate rotation

Product: Cloud SQL for MySQL
Feature slug: `ssl-certificate-rotation`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports rotating SSL certificates.

## Lifecycle

- Latest feature date: 2018-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- encrypt
- identity
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
