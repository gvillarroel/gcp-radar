# Compute Engine reservation consumption for Vertex AI custom training jobs

Product: Vertex AI
Feature slug: `compute-engine-reservation-consumption-for-vertex-ai-custom-training-jobs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds the ability for custom training jobs to use Compute Engine zonal VM reservations with attached GPUs.

## Lifecycle

- Latest feature date: 2024-12-02
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
- authorization
- certificate
- encrypt
- firewall
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

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
