# Cross-project Exadata Infrastructure selection for VM cluster creation

Product: Oracle Database@Google Cloud
Feature slug: `cross-project-exadata-infrastructure-selection-for-vm-cluster-creation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

VM cluster creation can select an Exadata Infrastructure instance from a different project than the current default project.

## Lifecycle

- Latest feature date: 2025-03-03
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
- [https://docs.cloud.google.com/oracle/database/docs/create-clusters](https://docs.cloud.google.com/oracle/database/docs/create-clusters)
- [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters)
- [https://docs.cloud.google.com/oracle/database/docs/delete-instances](https://docs.cloud.google.com/oracle/database/docs/delete-instances)
