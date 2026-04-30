# Dynamic shape support on XLA:CPU and XLA:GPU

Product: Cloud TPU
Feature slug: `dynamic-shape-support-on-xla-cpu-and-xla-gpu`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

PyTorch/XLA 1.6 adds experimental dynamic shape support on XLA:CPU and XLA:GPU.

## Lifecycle

- Latest feature date: 2020-08-20
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

## Security Capabilities

- access
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops)
