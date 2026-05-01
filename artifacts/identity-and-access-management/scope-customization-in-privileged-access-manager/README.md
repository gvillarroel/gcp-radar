# Scope customization in Privileged Access Manager

Product: Identity and Access Management
Feature slug: `scope-customization-in-privileged-access-manager`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Privileged Access Manager lets you customize the scope of access grants.

## Lifecycle

- Latest feature date: 2025-09-26
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

- access
- armor
- audit
- auth
- authorization
- certificate
- confidential
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

- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access)
