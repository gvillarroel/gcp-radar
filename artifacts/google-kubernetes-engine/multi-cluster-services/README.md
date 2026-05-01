# Multi-cluster Services

Product: Google Kubernetes Engine
Feature slug: `multi-cluster-services`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE adds a finalizer to Multi-Cluster Services to improve disablement cleanup and reduce the risk of resource leaks; Provides a Kubernetes-native interface for making services discoverable and accessible across multiple clusters.

## Lifecycle

- Latest feature date: 2025-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
