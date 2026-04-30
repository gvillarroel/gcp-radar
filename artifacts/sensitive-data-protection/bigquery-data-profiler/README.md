# BigQuery data profiler

Product: Sensitive Data Protection
Feature slug: `bigquery-data-profiler`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The BigQuery data profiler scans data to provide visibility into sensitive data locations; The BigQuery data profiler scans data to provide visibility into sensitive data locations.

## Lifecycle

- Latest feature date: 2022-04-14
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
- allow
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
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data)
