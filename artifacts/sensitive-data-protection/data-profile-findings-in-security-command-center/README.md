# Data profile findings in Security Command Center

Product: Sensitive Data Protection
Feature slug: `data-profile-findings-in-security-command-center`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Discovery service data profiles can generate Data sensitivity and Data risk findings in Security Command Center.

## Lifecycle

- Latest feature date: 2023-05-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.settings.get`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- armor
- audit
- auth
- authorization
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
- secret
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org)
- [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)
