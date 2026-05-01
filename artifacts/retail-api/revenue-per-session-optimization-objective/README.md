# Revenue per session optimization objective

Product: Retail API
Feature slug: `revenue-per-session-optimization-objective`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

An optimization objective for Others You May Like and Frequently Bought Together models that maximizes revenue by favoring items with a higher probability of being added to carts.

## Lifecycle

- Latest feature date: 2022-10-12
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
- [https://docs.cloud.google.com/retail/docs/a-b-monitor](https://docs.cloud.google.com/retail/docs/a-b-monitor)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-agent-best-practices](https://docs.cloud.google.com/retail/docs/conversational-commerce-agent-best-practices)
- [https://docs.cloud.google.com/retail/docs/create-models](https://docs.cloud.google.com/retail/docs/create-models)
