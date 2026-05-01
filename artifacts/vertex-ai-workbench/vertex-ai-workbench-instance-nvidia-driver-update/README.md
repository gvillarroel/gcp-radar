# Vertex AI Workbench instance NVIDIA driver update

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-instance-nvidia-driver-update`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The NVIDIA GPU drivers for Vertex AI Workbench instances were updated to version 550.54.15 to address startup installation failures on Debian 11 images using linux-image-5.10.0-29-cloud-amd64.

## Lifecycle

- Latest feature date: 2024-05-17
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
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
