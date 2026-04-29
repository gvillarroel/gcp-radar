# Policy Simulator for Organization Policy

Product: Resource Manager
Feature slug: `policy-simulator-for-organization-policy`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Policy Simulator for Organization Policy is generally available.

## Lifecycle

- Latest feature date: 2025-07-01
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
- iam
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints](https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
