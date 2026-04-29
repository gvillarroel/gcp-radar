# Monitor active queries

Product: Gemini
Feature slug: `monitor-active-queries`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Monitor active queries helps users monitor and troubleshoot queries that are currently running in the database; Monitor active queries helps users monitor and troubleshoot queries that are currently running in the database.

## Lifecycle

- Latest feature date: 2024-04-09
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
- auth
- authorization
- credential
- iam
- identity
- key
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
