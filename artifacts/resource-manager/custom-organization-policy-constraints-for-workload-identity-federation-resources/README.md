# Custom organization policy constraints for Workload Identity Federation resources

Product: Resource Manager
Feature slug: `custom-organization-policy-constraints-for-workload-identity-federation-resources`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Workload Identity Federation resources can use custom constraints to define custom restrictions on Google Cloud services.

## Lifecycle

- Latest feature date: 2025-10-03
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
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
