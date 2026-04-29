# GKE node service agent

Product: Google Kubernetes Engine
Feature slug: `gke-node-service-agent`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE now uses a dedicated node service agent for logging and monitoring on GKE nodes to improve workload isolation.

## Lifecycle

- Latest feature date: 2025-09-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- identity
- key
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm)
