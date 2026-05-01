# Memorystore for Redis component support

Product: Application Design Center
Feature slug: `memorystore-for-redis-component-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Application Design Center supports Memorystore for Redis as a component on the design canvas.

## Lifecycle

- Latest feature date: 2025-03-28
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

- [https://docs.cloud.google.com/application-design-center/docs/quickstart-update-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-update-template)
- [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/IACFormat](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/IACFormat)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
