# Customer-managed Active Directory integration

Product: Cloud SQL for SQL Server
Feature slug: `customer-managed-active-directory-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed Active Directory integration lets instances join a CMAD domain for authentication and authorization with Windows Authentication.

## Lifecycle

- Latest feature date: 2025-10-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
