# BigQuery BI Engine SQL interface

Product: BigQuery
Feature slug: `bigquery-bi-engine-sql-interface`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The BigQuery BI Engine SQL interface provides SQL-based access to BI Engine acceleration capabilities; BigQuery BI Engine can serve popular BI tools through an SQL interface.

## Lifecycle

- Latest feature date: 2021-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- audit
- auth
- iam
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
