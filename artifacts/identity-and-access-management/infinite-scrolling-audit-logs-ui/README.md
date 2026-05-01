# Infinite-scrolling audit logs UI

Product: Identity and Access Management
Feature slug: `infinite-scrolling-audit-logs-ui`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Privileged Access Manager audit logs use an infinite-scrolling console view with loading indicators and time boundaries.

## Lifecycle

- Latest feature date: 2025-12-15
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

- [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging)
- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
