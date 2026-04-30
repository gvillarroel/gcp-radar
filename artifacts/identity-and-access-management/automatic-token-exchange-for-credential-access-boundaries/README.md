# Automatic token exchange for Credential Access Boundaries

Product: Identity and Access Management
Feature slug: `automatic-token-exchange-for-credential-access-boundaries`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Lets updated authentication libraries automatically exchange OAuth 2.0 access tokens for downscoped tokens.

## Lifecycle

- Latest feature date: 2021-10-26
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
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
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
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials](https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
