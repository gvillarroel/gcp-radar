# Future reservations for GKE capacity

Product: Google Kubernetes Engine
Feature slug: `future-reservations-for-gke-capacity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can use future reservations to request compute capacity in advance for workloads.

## Lifecycle

- Latest feature date: 2023-10-19
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
