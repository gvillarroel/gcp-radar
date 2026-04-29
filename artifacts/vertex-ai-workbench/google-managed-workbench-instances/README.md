# Google-managed Workbench instances

Product: Vertex AI Workbench
Feature slug: `google-managed-workbench-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Workbench supports Google-managed notebook instances.

## Lifecycle

- Latest feature date: 2022-04-06
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
- armor
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
