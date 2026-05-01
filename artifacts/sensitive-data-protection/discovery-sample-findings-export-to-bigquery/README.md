# Discovery sample findings export to BigQuery

Product: Sensitive Data Protection
Feature slug: `discovery-sample-findings-export-to-bigquery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Discovery scans can save sample findings to a BigQuery table for evaluating inspection configurations.

## Lifecycle

- Latest feature date: 2024-11-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- credential
- firewall
- iam
- identity
- key
- logging
- permission
- policy
- role
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
