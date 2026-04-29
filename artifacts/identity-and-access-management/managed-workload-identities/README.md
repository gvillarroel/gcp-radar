# Managed workload identities

Product: Identity and Access Management
Feature slug: `managed-workload-identities`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Managed workload identities bind strongly attested identities to Compute Engine workloads and provision X.509 credentials for mTLS authentication.

## Lifecycle

- Latest feature date: 2024-02-15
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

- [https://docs.cloud.google.com/iam/docs/create-managed-workload-identities](https://docs.cloud.google.com/iam/docs/create-managed-workload-identities)
- [https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke](https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/google-identities](https://docs.cloud.google.com/iam/docs/google-identities)
