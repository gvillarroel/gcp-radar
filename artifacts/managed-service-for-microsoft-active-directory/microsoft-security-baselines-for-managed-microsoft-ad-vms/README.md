# Microsoft security baselines for Managed Microsoft AD VMs

Product: Managed Service for Microsoft Active Directory
Feature slug: `microsoft-security-baselines-for-managed-microsoft-ad-vms`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

You can apply Microsoft security baselines to Managed Microsoft AD VMs.

## Lifecycle

- Latest feature date: 2022-12-19
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
- [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening](https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening)
