# GKE Metrics Server addon-resizer placement

Product: Google Kubernetes Engine
Feature slug: `gke-metrics-server-addon-resizer-placement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE moves the addon-resizer used by Metrics Server from worker nodes to the control plane in new and upgraded clusters.

## Lifecycle

- Latest feature date: 2024-08-27
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

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
