# TLS connections to Active Directory endpoints without server certificate trust

Product: Cloud SQL for SQL Server
Feature slug: `tls-connections-to-active-directory-endpoints-without-server-certificate-trust`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This capability enables TLS connections to Active Directory endpoints without requiring trusted server certificates or IP-address-based access.

## Lifecycle

- Latest feature date: 2025-05-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
