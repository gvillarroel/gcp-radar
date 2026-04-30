# Vertex AI Workbench user-managed notebook image tf-2-11-cu113-notebooks-debian-11-py310

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-user-managed-notebook-image-tf-2-11-cu113-notebooks-debian-11-py310`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Introduced the TensorFlow 2.11 GPU (CUDA 11.3) user-managed notebook image for Debian 11 with Python 3.10.

## Lifecycle

- Latest feature date: 2023-03-31
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

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
