# Search widget analytics metrics on Analytics page

Product: Vertex AI Search
Feature slug: `search-widget-analytics-metrics-on-analytics-page`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Search added the ability to view widget metrics on the Analytics page for select Google Cloud customers.

## Lifecycle

- Latest feature date: 2025-01-09
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

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- audit (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- credential (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- logging (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- permission (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- policy (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- role (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- secret (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-feedback)
