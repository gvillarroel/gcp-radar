# Cloud SQL Auth proxy v2 Prometheus support

Product: Cloud SQL for MySQL
Feature slug: `cloud-sql-auth-proxy-v2-prometheus-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Auth proxy v2 adds support for Prometheus.

## Lifecycle

- Latest feature date: 2023-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator), [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
