# Enterprise Search analytics dashboard time-period comparison

Product: Vertex AI Search
Feature slug: `enterprise-search-analytics-dashboard-time-period-comparison`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Enterprise Search analytics now allows comparing metrics for two time periods in the preview analytics dashboard.

## Lifecycle

- Latest feature date: 2023-06-05
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
- constraint
- credential
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
