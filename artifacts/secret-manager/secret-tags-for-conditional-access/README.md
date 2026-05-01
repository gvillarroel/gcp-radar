# Secret tags for conditional access

Product: Secret Manager
Feature slug: `secret-tags-for-conditional-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Tags can be attached to secrets to conditionally grant or deny access based on tag presence.

## Lifecycle

- Latest feature date: 2024-08-21
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
- auth
- authorization
- iam
- key
- kms
- logging
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags](https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)
