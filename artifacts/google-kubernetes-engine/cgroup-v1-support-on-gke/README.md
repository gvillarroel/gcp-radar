# cgroup v1 support on GKE

Product: Google Kubernetes Engine
Feature slug: `cgroup-v1-support-on-gke`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE is removing cgroup v1 support, and upgrades are blocked until clusters are configured to use cgroup v2; deprecated on 2025-12-29.

## Lifecycle

- Latest feature date: 2025-12-29
- Deprecation date: 2025-12-29
- Status: deprecation_noted

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
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
