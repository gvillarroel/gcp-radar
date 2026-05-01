# Cloud DNS additive VPC scope

Product: Google Kubernetes Engine
Feature slug: `cloud-dns-additive-vpc-scope`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS additive VPC scope is generally available on GKE clusters and adds GKE headless service entries to a Cloud DNS private zone visible from VPC networks; Cloud DNS additive VPC scope lets GKE add headless Service entries to a Cloud DNS private zone visible from VPC networks.

## Lifecycle

- Latest feature date: 2024-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
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

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
