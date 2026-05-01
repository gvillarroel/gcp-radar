# Kernel visibility with Cloud Resource Manager API disabled on Dataproc-enabled instances

Product: Vertex AI Workbench
Feature slug: `kernel-visibility-with-cloud-resource-manager-api-disabled-on-dataproc-enabled-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled; Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled.

## Lifecycle

- Latest feature date: 2024-08-20
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
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
