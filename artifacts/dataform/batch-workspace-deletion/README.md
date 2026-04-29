# Batch workspace deletion

Product: Dataform
Feature slug: `batch-workspace-deletion`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Batch workspace deletion lets users delete multiple Dataform workspaces together.

## Lifecycle

- Latest feature date: 2023-10-27
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
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts)
