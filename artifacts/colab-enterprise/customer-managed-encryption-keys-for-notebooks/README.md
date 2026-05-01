# Customer-managed encryption keys for notebooks

Product: Colab Enterprise
Feature slug: `customer-managed-encryption-keys-for-notebooks`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Customer-managed encryption keys can be used to protect Colab Enterprise notebooks.

## Lifecycle

- Latest feature date: 2024-09-23
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
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints)
- [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
