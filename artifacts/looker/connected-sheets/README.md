# Connected Sheets

Product: Looker
Feature slug: `connected-sheets`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Connected Sheets is available for all Looker-hosted instances, including those hosted on AWS and Azure.

## Lifecycle

- Latest feature date: 2023-03-14
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
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
