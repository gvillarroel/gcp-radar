# Stable cluster IDs across reconciliation runs

Product: Enterprise Knowledge Graph
Feature slug: `stable-cluster-ids-across-reconciliation-runs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Supports stable cluster IDs across different reconciliation runs.

## Lifecycle

- Latest feature date: 2022-03-10
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

- [https://docs.cloud.google.com/enterprise-knowledge-graph/docs/overview](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/overview)
- [https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
