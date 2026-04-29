# Vertex AI Workbench instances authorized SSH key home directory ownership

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-instances-authorized-ssh-key-home-directory-ownership`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Fixes an issue where home directory ownership could be incorrect when using authorized SSH keys with Vertex AI Workbench instances.

## Lifecycle

- Latest feature date: 2025-01-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- iam
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
