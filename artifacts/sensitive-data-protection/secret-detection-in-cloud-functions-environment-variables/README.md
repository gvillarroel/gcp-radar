# Secret detection in Cloud Functions environment variables

Product: Sensitive Data Protection
Feature slug: `secret-detection-in-cloud-functions-environment-variables`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Sensitive Data Protection detects secrets in Cloud Functions environment variables and sends findings to Security Command Center.

## Lifecycle

- Latest feature date: 2023-11-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- credential
- encrypt
- firewall
- iam
- identity
- key
- permission
- policy
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery)
