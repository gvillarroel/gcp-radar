# GKE Dataplane V2 CNI path updates

Product: Google Kubernetes Engine
Feature slug: `gke-dataplane-v2-cni-path-updates`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Dataplane V2 changes its CNI path by removing the ptp plugin and moving CNI configuration into the anetd cni-writer container.

## Lifecycle

- Latest feature date: 2025-09-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- confidential
- constraint
- credential
- encrypt
- firewall
- key
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
