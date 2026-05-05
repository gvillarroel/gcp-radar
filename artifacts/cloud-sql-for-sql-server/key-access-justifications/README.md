# Key Access Justifications

Product: Cloud SQL for SQL Server
Feature slug: `key-access-justifications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Key Access Justifications for Cloud EKM lets users view the reason for each key access request and automatically approve or deny requests based on that justification.

## Lifecycle

- Latest feature date: 2022-01-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
