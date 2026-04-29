# bigquery.jobUser IAM role

Product: BigQuery
Feature slug: `bigquery-jobuser-iam-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery provides the predefined IAM role bigquery.jobUser.

## Lifecycle

- Latest feature date: 2017-05-10
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
- auth
- iam
- identity
- key
- kms
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
