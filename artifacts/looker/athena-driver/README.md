# Athena driver

Product: Looker
Feature slug: `athena-driver`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Athena driver was updated to version 2.2.1 for Amazon Athena connections; The Athena driver has been updated to version 2.2.1 for Amazon Athena connections.

## Lifecycle

- Latest feature date: 2025-08-13
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
- credential
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
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only)
