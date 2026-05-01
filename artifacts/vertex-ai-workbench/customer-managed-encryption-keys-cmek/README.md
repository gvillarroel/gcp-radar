# Customer-managed encryption keys (CMEK)

Product: Vertex AI Workbench
Feature slug: `customer-managed-encryption-keys-cmek`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Workbench instances support encryption with customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2023-09-25
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
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
