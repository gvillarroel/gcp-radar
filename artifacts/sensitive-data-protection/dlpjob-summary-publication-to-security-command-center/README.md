# DlpJob summary publication to Security Command Center

Product: Sensitive Data Protection
Feature slug: `dlpjob-summary-publication-to-security-command-center`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A DlpJob summary can be published to Cloud Security Command Center with the PublishSummaryToCscc action.

## Lifecycle

- Latest feature date: 2018-04-25
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

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
