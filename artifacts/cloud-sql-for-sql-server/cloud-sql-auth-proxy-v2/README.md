# Cloud SQL Auth Proxy v2

Product: Cloud SQL for SQL Server
Feature slug: `cloud-sql-auth-proxy-v2`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Auth Proxy v2 improves secure connectivity to Cloud SQL instances with better performance, stability, telemetry, and expanded configuration and integration features.

## Lifecycle

- Latest feature date: 2023-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- firewall (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
