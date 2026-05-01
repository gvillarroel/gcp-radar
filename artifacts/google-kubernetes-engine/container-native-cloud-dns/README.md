# Container-native Cloud DNS

Product: Google Kubernetes Engine
Feature slug: `container-native-cloud-dns`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS can serve as the in-cluster DNS provider instead of kube-dns on GKE clusters running version 1.18 or later.

## Lifecycle

- Latest feature date: 2021-05-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- credential
- encrypt
- firewall
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
