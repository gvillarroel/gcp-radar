# bigquery.jobs.listAll permission

Product: BigQuery
Feature slug: `bigquery-jobs-listall-permission`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery provides the bigquery.jobs.listAll permission for listing all jobs with controlled visibility of other users' job details.

## Lifecycle

- Latest feature date: 2018-04-17
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
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigquery](https://docs.cloud.google.com/iam/docs/roles-permissions/bigquery)
