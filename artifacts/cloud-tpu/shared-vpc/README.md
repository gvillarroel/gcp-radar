# Shared VPC

Product: Cloud TPU
Feature slug: `shared-vpc`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Shared VPC support lets Cloud TPU nodes connect through a common VPC network shared across multiple projects; Shared VPC support lets Cloud TPU nodes connect through a common VPC network shared across multiple projects.

## Lifecycle

- Latest feature date: 2020-12-14
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- private (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu), [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
