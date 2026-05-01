# SHA-1-signed webhook backend certificates

Product: Google Kubernetes Engine
Feature slug: `sha-1-signed-webhook-backend-certificates`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE no longer supports webhook backends that use TLS certificates signed with SHA-1; deprecated on 2024-01-11.

## Lifecycle

- Latest feature date: 2024-01-11
- Deprecation date: 2024-01-11
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
