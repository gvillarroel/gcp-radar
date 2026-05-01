# Boot disk type and size

Product: Google Kubernetes Engine
Feature slug: `boot-disk-type-and-size`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Node Auto-Provisioning can set default boot disk type and size values for newly created node pools.

## Lifecycle

- Latest feature date: 2020-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- confidential
- constraint
- encrypt
- key
- kms
- logging
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
