# Domain restriction organization policy constraint

Product: Resource Manager
Feature slug: `domain-restriction-organization-policy-constraint`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Restricts the set of identities that can be used in Identity and Access Management policies.

## Lifecycle

- Latest feature date: 2018-07-09
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
- constraint
- iam
- identity
- key
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
