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

- access
- armor
- audit
- auth
- authorization
- certificate
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
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference)
