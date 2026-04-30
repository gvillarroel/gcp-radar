# LinkPreview class

Product: Google Workspace add-ons
Feature slug: `linkpreview-class`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds the Apps Script Card service class for configuring link preview cards and smart chip titles.

## Lifecycle

- Latest feature date: 2024-03-05
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

- [https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip](https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip)
- [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
