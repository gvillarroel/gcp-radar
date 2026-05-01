# BigQuery ML beta-era custom IAM role model permission behavior

Product: BigQuery
Feature slug: `bigquery-ml-beta-era-custom-iam-role-model-permission-behavior`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery ML separates model permissions from table permissions by enforcing new IAM permissions for models; deprecated on 2019-06-06.

## Lifecycle

- Latest feature date: 2019-04-04
- Deprecation date: 2019-06-06
- Status: deprecation_noted

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
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
