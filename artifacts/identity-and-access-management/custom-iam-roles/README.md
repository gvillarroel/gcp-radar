# Custom IAM roles

Product: Identity and Access Management
Feature slug: `custom-iam-roles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Lets you create custom IAM roles from selected permissions and grant them to users in your organization.

## Lifecycle

- Latest feature date: 2017-03-08
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

- [https://docs.cloud.google.com/iam/docs/create-service-agents](https://docs.cloud.google.com/iam/docs/create-service-agents)
- [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
