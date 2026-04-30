# Page-level Optimization model

Product: Retail API
Feature slug: `page-level-optimization-model`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Page-level Optimization model selects content for multiple recommendation panels and determines their order on a page; A model that optimizes an entire page with multiple recommendation panels by selecting panel contents and ordering the panels automatically.

## Lifecycle

- Latest feature date: 2023-01-12
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
- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- [https://docs.cloud.google.com/retail/docs/create-models](https://docs.cloud.google.com/retail/docs/create-models)
