# Beta APIs in GKE clusters

Product: Google Kubernetes Engine
Feature slug: `beta-apis-in-gke-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE disables new beta APIs by default in new clusters and allows them to be enabled on creation or later in GKE 1.27 and higher.

## Lifecycle

- Latest feature date: 2023-07-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
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

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
