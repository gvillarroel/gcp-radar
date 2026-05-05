# Vertex AI Workbench instance Linux headers package installation

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-instance-linux-headers-package-installation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The linux-headers-cloud-amd64 metapackage is now installed on Vertex AI Workbench instances to speed up NVIDIA driver recompilation after kernel upgrades.

## Lifecycle

- Latest feature date: 2024-05-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access), [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
