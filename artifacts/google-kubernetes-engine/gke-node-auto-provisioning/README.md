# GKE node auto-provisioning

Product: Google Kubernetes Engine
Feature slug: `gke-node-auto-provisioning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Node auto-provisioning can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later.

## Lifecycle

- Latest feature date: 2021-10-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
