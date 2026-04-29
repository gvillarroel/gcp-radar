# Organization policy conditions for tag keys

Product: Resource Manager
Feature slug: `organization-policy-conditions-for-tag-keys`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Organization policy conditions can match a tag key to enable or disable enforcement for all resources with that tag key.

## Lifecycle

- Latest feature date: 2025-08-18
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
- audit
- constraint
- iam
- identity
- key
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
