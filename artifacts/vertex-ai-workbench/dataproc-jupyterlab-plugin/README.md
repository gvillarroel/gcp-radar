# Dataproc JupyterLab plugin

Product: Vertex AI Workbench
Feature slug: `dataproc-jupyterlab-plugin`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Updates the Dataproc JupyterLab plugin used with Vertex AI Workbench to version 0.1.92; The Dataproc JupyterLab plugin was updated in Vertex AI Workbench to resolve an incompatibility when using instances with end-user credentials enabled.

## Lifecycle

- Latest feature date: 2025-10-09
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
- certificate
- credential
- encrypt
- firewall
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

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
