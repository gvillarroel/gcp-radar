# Vertex AI Pipelines schedules API

Product: Vertex AI
Feature slug: `vertex-ai-pipelines-schedules-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Vertex AI Pipelines schedules API became generally available, enabling cron-based recurring pipeline scheduling with options to pause, resume, update, and delete schedules.

## Lifecycle

- Latest feature date: 2023-08-01
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
- auth
- authorization
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
