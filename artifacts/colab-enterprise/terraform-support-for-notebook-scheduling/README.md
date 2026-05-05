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

- access (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- allow (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- auth (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- authorization (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- constraint (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- encrypt (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- key (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- kms (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- logging (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- role (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))
- token (evidence: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints)
- [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook)
