# VPC-native as the default network mode

Product: Google Kubernetes Engine
Feature slug: `vpc-native-as-the-default-network-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New GKE clusters use VPC-native networking by default, while routes-based clusters remain available with --no-enable-ip-alias.

## Lifecycle

- Latest feature date: 2021-09-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
