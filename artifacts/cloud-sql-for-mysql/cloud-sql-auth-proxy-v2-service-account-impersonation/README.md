# Cloud SQL Auth proxy v2 service account impersonation

Product: Cloud SQL for MySQL
Feature slug: `cloud-sql-auth-proxy-v2-service-account-impersonation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Auth proxy v2 adds support for service account impersonation.

## Lifecycle

- Latest feature date: 2023-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
