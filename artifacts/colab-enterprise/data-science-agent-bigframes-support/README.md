# Data Science Agent BigFrames support

Product: Colab Enterprise
Feature slug: `data-science-agent-bigframes-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Data Science Agent can work with BigFrames in Colab Enterprise notebooks.

## Lifecycle

- Latest feature date: 2026-01-21
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
- iam
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/chat](https://docs.cloud.google.com/colab/docs/chat)
- [https://docs.cloud.google.com/colab/docs/explain-cells](https://docs.cloud.google.com/colab/docs/explain-cells)
- [https://docs.cloud.google.com/colab/docs/explain-errors](https://docs.cloud.google.com/colab/docs/explain-errors)
