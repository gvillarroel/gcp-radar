# Deployment API

Product: Google Kubernetes Engine
Feature slug: `deployment-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The deprecated Deployment beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25.

## Lifecycle

- Latest feature date: 2020-02-25
- Deprecation date: 2020-02-25
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- constraint
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
