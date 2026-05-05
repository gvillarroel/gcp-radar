# Cloud SQL Proxy Operator

Product: Cloud SQL for SQL Server
Feature slug: `cloud-sql-proxy-operator`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Proxy Operator provides Kubernetes-based management of Cloud SQL Proxy connectivity; The Cloud SQL Proxy Operator automates connecting workloads in a GKE cluster to Cloud SQL databases.

## Lifecycle

- Latest feature date: 2023-05-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- firewall (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
