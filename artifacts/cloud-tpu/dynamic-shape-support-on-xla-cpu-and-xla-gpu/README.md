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

- access (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- armor (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- audit (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- auth (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- authorization (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- certificate (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- confidential (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- constraint (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- credential (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- encrypt (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- firewall (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- iam (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- identity (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- key (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- kms (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- logging (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- permission (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- policy (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- private (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- role (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- secret (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- security (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- threat (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- token (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops)
