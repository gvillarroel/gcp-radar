# Cluster Autoscaler graceful node drain timeout

Product: Google Kubernetes Engine
Feature slug: `cluster-autoscaler-graceful-node-drain-timeout`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cluster Autoscaler now supports a longer graceful node drain timeout, increasing the limit from 10 minutes to 1 hour.

## Lifecycle

- Latest feature date: 2025-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- identity
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
