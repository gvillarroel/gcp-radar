# Data-driven diversification

Product: Retail API
Feature slug: `data-driven-diversification`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Data-driven diversification uses machine learning to balance category diversity and relevance in prediction results.

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
- [https://docs.cloud.google.com/retail/docs/configs](https://docs.cloud.google.com/retail/docs/configs)
- [https://docs.cloud.google.com/retail/docs/create-configs](https://docs.cloud.google.com/retail/docs/create-configs)
