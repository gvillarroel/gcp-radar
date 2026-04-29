# Time-sharing GPUs

Product: Google Kubernetes Engine
Feature slug: `time-sharing-gpus`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Multiple containers can share the full compute resources of a single NVIDIA GPU accelerator.

## Lifecycle

- Latest feature date: 2022-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
