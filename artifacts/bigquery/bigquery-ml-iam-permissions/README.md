# BigQuery ML IAM permissions

Product: BigQuery
Feature slug: `bigquery-ml-iam-permissions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery ML provides IAM permissions for controlling access to machine learning resources.

## Lifecycle

- Latest feature date: 2019-05-06
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
- allow
- auth
- iam
- identity
- key
- kms
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
