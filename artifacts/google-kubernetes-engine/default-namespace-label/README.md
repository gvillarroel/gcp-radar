# Default namespace label

Product: Google Kubernetes Engine
Feature slug: `default-namespace-label`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Namespace objects now get a kubernetes.io/metadata.name label that matches metadata.name; Namespace API objects now include a kubernetes.io/metadata.name label that matches metadata.name.

## Lifecycle

- Latest feature date: 2021-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- constraint
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
