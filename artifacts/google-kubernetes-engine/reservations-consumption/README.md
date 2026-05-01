# Reservations consumption

Product: Google Kubernetes Engine
Feature slug: `reservations-consumption`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can consume zonal Compute Engine reservations to help ensure capacity for workloads.

## Lifecycle

- Latest feature date: 2020-01-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- encrypt
- iam
- key
- kms
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
