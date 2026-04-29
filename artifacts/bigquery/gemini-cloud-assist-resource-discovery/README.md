# Gemini Cloud Assist resource discovery

Product: BigQuery
Feature slug: `gemini-cloud-assist-resource-discovery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Gemini Cloud Assist can discover BigQuery resources across projects, including table schemas and data locations.

## Lifecycle

- Latest feature date: 2026-01-26
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
- constraint
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
- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- [https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources](https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources)
