# Color mode filter

Product: Cloud Profiler
Feature slug: `color-mode-filter`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The color mode filter colors flame graph frames by package name or by function metric consumption.

## Lifecycle

- Latest feature date: 2019-02-28
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
- [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles)
- [https://docs.cloud.google.com/profiler/docs/concepts-flame](https://docs.cloud.google.com/profiler/docs/concepts-flame)
- [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles)
