# Idle database instance recommender

Product: Cloud SQL for SQL Server
Feature slug: `idle-database-instance-recommender`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Idle database instance recommender identifies idle database instances and recommends shutting them down to save costs; The Idle database instance recommender identifies idle database instances and recommends shutting them down to save costs.

## Lifecycle

- Latest feature date: 2022-04-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
