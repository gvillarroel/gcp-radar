# Anonymous authentication for cluster endpoints

Product: Google Kubernetes Engine
Feature slug: `anonymous-authentication-for-cluster-endpoints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New GKE clusters on version 1.35 and later reject anonymous requests to cluster endpoints by default except for health check endpoints.

## Lifecycle

- Latest feature date: 2025-11-07
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
- firewall
- identity
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate)
