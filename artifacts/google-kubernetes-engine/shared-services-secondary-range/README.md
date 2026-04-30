# Shared Services secondary range

Product: Google Kubernetes Engine
Feature slug: `shared-services-secondary-range`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC-native clusters can share the user-managed secondary range for Services across clusters in the same subnet.

## Lifecycle

- Latest feature date: 2022-08-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- confidential
- constraint
- firewall
- identity
- key
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
