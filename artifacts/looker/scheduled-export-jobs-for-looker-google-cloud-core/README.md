# Scheduled export jobs for Looker (Google Cloud core)

Product: Looker
Feature slug: `scheduled-export-jobs-for-looker-google-cloud-core`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Looker (Google Cloud core) instances can now schedule daily zero-downtime export jobs.

## Lifecycle

- Latest feature date: 2025-11-11
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
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-export](https://docs.cloud.google.com/looker/docs/admin-panel-export)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
