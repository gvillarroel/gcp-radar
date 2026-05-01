# IAM client library for C++

Product: Identity and Access Management
Feature slug: `iam-client-library-for-c`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A C++ client library is available for the IAM API and the Service Account Credentials API.

## Lifecycle

- Latest feature date: 2021-07-22
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
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis)
- [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries)
- [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
