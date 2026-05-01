# Folders for BigQuery Studio code assets

Product: BigQuery
Feature slug: `folders-for-bigquery-studio-code-assets`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Folders can organize and control access to single-file code assets such as notebooks, saved queries, data canvases, and data preparation files.

## Lifecycle

- Latest feature date: 2025-11-17
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
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/code-asset-folders](https://docs.cloud.google.com/bigquery/docs/code-asset-folders)
