# Default runtimes with GPUs

Product: Colab Enterprise
Feature slug: `default-runtimes-with-gpus`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can switch a notebook to a default runtime that includes GPUs.

## Lifecycle

- Latest feature date: 2025-03-31
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
- encrypt
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/connect-to-runtime](https://docs.cloud.google.com/colab/docs/connect-to-runtime)
- [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
