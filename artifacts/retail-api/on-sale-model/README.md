# On-sale model

Product: Retail API
Feature slug: `on-sale-model`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The On-sale model is a personalized recommendation model that suggests discounted products.

## Lifecycle

- Latest feature date: 2022-12-22
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

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/retail/docs/create-models](https://docs.cloud.google.com/retail/docs/create-models)
- [https://docs.cloud.google.com/retail/docs/movie-rec-tutorial](https://docs.cloud.google.com/retail/docs/movie-rec-tutorial)
- [https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConversationalSearchCustomizationConfig](https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConversationalSearchCustomizationConfig)
