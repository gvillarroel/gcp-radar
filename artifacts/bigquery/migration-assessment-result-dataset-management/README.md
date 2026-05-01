# Migration assessment result dataset management

Product: BigQuery
Feature slug: `migration-assessment-result-dataset-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery migration assessments can automatically create a dataset for results or store results in a selected empty dataset.

## Lifecycle

- Latest feature date: 2024-07-18
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
- encrypt
- iam
- identity
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
- [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
