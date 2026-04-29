# Egress NAT policy

Product: Google Kubernetes Engine
Feature slug: `egress-nat-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Egress NAT policy configures IP masquerading for GKE Autopilot clusters with Dataplane v2.

## Lifecycle

- Latest feature date: 2022-04-13
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
- identity
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
