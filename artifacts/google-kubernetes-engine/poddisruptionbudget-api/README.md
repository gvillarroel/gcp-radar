# PodDisruptionBudget API

Product: Google Kubernetes Engine
Feature slug: `poddisruptionbudget-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The policy/v1beta1 PodDisruptionBudget API is deprecated and will be removed in Kubernetes 1.25; PodDisruptionBudget is available in the stable policy/v1 API for controlling pod evictions; deprecated on 2021-10-01.

## Lifecycle

- Latest feature date: 2021-10-01
- Deprecation date: 2021-10-01
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor
- constraint
- permission
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
