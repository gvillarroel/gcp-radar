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

- access (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- armor (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- audit (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- authorization (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- certificate (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- constraint (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- encrypt (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- firewall (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- identity (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- key (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- kms (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- logging (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- permission (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- policy (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- private (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- role (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))
- threat (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules), [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org))

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/access-control-org](https://docs.cloud.google.com/security-command-center/docs/access-control-org)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
