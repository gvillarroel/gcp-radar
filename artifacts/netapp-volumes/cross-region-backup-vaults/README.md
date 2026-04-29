# Cross-region backup vaults

Product: NetApp Volumes
Feature slug: `cross-region-backup-vaults`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cross-region backup vaults store NetApp Volumes backups in a different region for improved resilience; Allows backup vaults to be used across regions.

## Lifecycle

- Latest feature date: 2025-05-26
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

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)
- [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest)
