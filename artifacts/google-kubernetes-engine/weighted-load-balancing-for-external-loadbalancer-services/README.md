# Weighted load balancing for External LoadBalancer Services

Product: Google Kubernetes Engine
Feature slug: `weighted-load-balancing-for-external-loadbalancer-services`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature distributes traffic to nodes based on the number of serving Pods backing the Service; Weighted load balancing distributes traffic to nodes based on the number of serving Pods backing a GKE External LoadBalancer Service.

## Lifecycle

- Latest feature date: 2025-02-06
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
- iam
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
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
