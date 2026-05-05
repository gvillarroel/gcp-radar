# Cloud SQL Go Connector

Product: Cloud SQL for MySQL
Feature slug: `cloud-sql-go-connector`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Cloud SQL Go Connector provides separate Dialer functionality introduced with Cloud SQL Auth proxy v2.

## Lifecycle

- Latest feature date: 2023-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- credential (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
