# Merchandising console

Product: Retail API
Feature slug: `merchandising-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Merchandising console adds self-serve explainability, Creator and Approver roles, preview improvements, and real-time control application feedback; The Merchandising console provides a user-friendly interface for merchants and business users to create and manage controls.

## Lifecycle

- Latest feature date: 2025-11-14
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
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls)
- [https://docs.cloud.google.com/retail/docs/movie-rec-tutorial](https://docs.cloud.google.com/retail/docs/movie-rec-tutorial)
