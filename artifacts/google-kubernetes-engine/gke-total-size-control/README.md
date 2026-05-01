# GKE total size control

Product: Google Kubernetes Engine
Feature slug: `gke-total-size-control`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE total size control lets you set autoscaled node pool limits for the total number of nodes across all zones.

## Lifecycle

- Latest feature date: 2022-08-03
- Deprecation date: none recorded
- Status: feature_observed

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
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
