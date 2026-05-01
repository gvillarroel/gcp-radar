# Terraform support for notebook scheduling

Product: Colab Enterprise
Feature slug: `terraform-support-for-notebook-scheduling`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Terraform resources can schedule notebook runs in Colab Enterprise.

## Lifecycle

- Latest feature date: 2025-02-27
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
- authorization
- constraint
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints)
- [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook)
