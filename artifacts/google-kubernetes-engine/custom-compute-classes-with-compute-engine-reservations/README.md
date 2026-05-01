# Custom compute classes with Compute Engine reservations

Product: Google Kubernetes Engine
Feature slug: `custom-compute-classes-with-compute-engine-reservations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Custom compute classes can automatically trigger Compute Engine reservation consumption during node creation.

## Lifecycle

- Latest feature date: 2024-12-02
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
