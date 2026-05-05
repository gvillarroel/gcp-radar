# SSL_CERTIFICATE infoType detector

Product: Sensitive Data Protection
Feature slug: `ssl-certificate-infotype-detector`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The SSL_CERTIFICATE infoType detector is available in all regions.

## Lifecycle

- Latest feature date: 2023-02-02
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

- access (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- armor (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- audit (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- authorization (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- certificate (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- credential (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- encrypt (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- firewall (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- identity (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- key (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- kms (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- logging (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- permission (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- policy (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- private (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- role (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))
- token (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference)
