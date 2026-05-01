# Organization-level discovery subscription for Security Command Center Premium

Product: Sensitive Data Protection
Feature slug: `organization-level-discovery-subscription-for-security-command-center-premium`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Organizations with Security Command Center Premium receive an organization-level Sensitive Data Protection discovery subscription at no charge.

## Lifecycle

- Latest feature date: 2025-10-17
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
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
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

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org)
- [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- [https://docs.cloud.google.com/security-command-center/docs/quickstart-security-command-center](https://docs.cloud.google.com/security-command-center/docs/quickstart-security-command-center)
