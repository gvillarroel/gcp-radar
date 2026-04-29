# TIME

Product: Sensitive Data Protection
Feature slug: `time`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds an infoType detector for times.

## Lifecycle

- Latest feature date: 2018-08-17
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
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
