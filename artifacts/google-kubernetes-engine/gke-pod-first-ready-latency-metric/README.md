# GKE pod first ready latency metric

Product: Google Kubernetes Engine
Feature slug: `gke-pod-first-ready-latency-metric`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This Cloud Monitoring metric measures pod end-to-end startup latency from Pod creation to Ready, including image pulls.

## Lifecycle

- Latest feature date: 2024-10-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- credential
- iam
- identity
- key
- logging
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
