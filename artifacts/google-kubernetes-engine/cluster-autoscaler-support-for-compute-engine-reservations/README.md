# Cluster autoscaler support for Compute Engine Reservations

Product: Google Kubernetes Engine
Feature slug: `cluster-autoscaler-support-for-compute-engine-reservations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cluster autoscaler prioritizes matching unused Compute Engine Reservations during scale-up decisions starting in GKE 1.27.

## Lifecycle

- Latest feature date: 2023-07-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- iam
- key
- kms
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
