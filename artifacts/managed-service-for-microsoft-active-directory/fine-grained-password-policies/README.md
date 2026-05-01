# Fine-grained password policies

Product: Managed Service for Microsoft Active Directory
Feature slug: `fine-grained-password-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Managed Microsoft AD supports fine-grained password policies.

## Lifecycle

- Latest feature date: 2021-03-04
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
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/how-to-use-delegated-admin](https://docs.cloud.google.com/managed-microsoft-ad/docs/how-to-use-delegated-admin)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/troubleshooting](https://docs.cloud.google.com/managed-microsoft-ad/docs/troubleshooting)
