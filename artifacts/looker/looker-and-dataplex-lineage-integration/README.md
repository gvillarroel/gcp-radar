# Looker and Dataplex lineage integration

Product: Looker
Feature slug: `looker-and-dataplex-lineage-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This integration tracks end-to-end lineage from BigQuery to Looker content for impact analysis.

## Lifecycle

- Latest feature date: 2026-03-30
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
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
