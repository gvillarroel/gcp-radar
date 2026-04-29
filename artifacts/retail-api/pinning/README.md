# Pinning

Product: Retail API
Feature slug: `pinning`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Pinning lets you force a matching item to appear at a specified position in search results.

## Lifecycle

- Latest feature date: 2025-02-03
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

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/retail/docs/attribute-config](https://docs.cloud.google.com/retail/docs/attribute-config)
- [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)
- [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview)
