# Service account usage monitoring

Product: Identity and Access Management
Feature slug: `service-account-usage-monitoring`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Monitoring can now show when service accounts and service account keys were used.

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
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- certificate
- constraint
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
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
- [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)
