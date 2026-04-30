# XLA RNG state checkpointing and loading

Product: Cloud TPU
Feature slug: `xla-rng-state-checkpointing-and-loading`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

PyTorch/XLA 1.6 adds checkpointing and loading support for XLA random number generator state.

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

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
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

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops)
- [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
