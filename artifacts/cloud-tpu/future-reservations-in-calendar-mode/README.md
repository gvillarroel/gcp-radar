# Future reservations in calendar mode

Product: Cloud TPU
Feature slug: `future-reservations-in-calendar-mode`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Calendar mode lets you check Cloud TPU availability in advance and request short-term capacity on a scheduled time window.

## Lifecycle

- Latest feature date: 2025-05-22
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

- access (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- audit (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- authorization (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- certificate (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- encrypt (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- firewall (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- key (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- kms (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- logging (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- private (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- role (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- security (evidence: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)
- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
