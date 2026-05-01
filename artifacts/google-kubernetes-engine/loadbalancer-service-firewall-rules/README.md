# LoadBalancer service firewall rules

Product: Google Kubernetes Engine
Feature slug: `loadbalancer-service-firewall-rules`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE creates firewall rules for LoadBalancer Services and can include the load balancer IP in destination ranges.

## Lifecycle

- Latest feature date: 2022-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- firewall
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
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
