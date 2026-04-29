# Scheduling queries with bigquery.jobs.create permission

Product: BigQuery
Feature slug: `scheduling-queries-with-bigquery-jobs-create-permission`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery lets users schedule queries with the bigquery.jobs.create permission instead of requiring bigquery.transfers.update.

## Lifecycle

- Latest feature date: 2020-04-09
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
- iam
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
