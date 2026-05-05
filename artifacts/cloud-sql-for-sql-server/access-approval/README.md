# Access Approval

Product: Cloud SQL for SQL Server
Feature slug: `access-approval`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Access Approval requires explicit customer approval before Google Support can access a database for support purposes.

## Lifecycle

- Latest feature date: 2021-10-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
