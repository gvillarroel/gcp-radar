# Service account access token lifetime extension

Product: Identity and Access Management
Feature slug: `service-account-access-token-lifetime-extension`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

An organization policy can extend the maximum lifetime of OAuth 2.0 access tokens created for a service account.

## Lifecycle

- Latest feature date: 2020-08-14
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
- audit
- auth
- authorization
- certificate
- constraint
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
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
