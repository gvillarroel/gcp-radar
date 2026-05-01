# Concurrent node pool auto-creation

Product: Google Kubernetes Engine
Feature slug: `concurrent-node-pool-auto-creation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can auto-create multiple node pools concurrently to make multiple new node pools ready faster.

## Lifecycle

- Latest feature date: 2025-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- encrypt
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
