# Pod sleep action

Product: Google Kubernetes Engine
Feature slug: `pod-sleep-action`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Pod preStop Sleep Action is now generally available to delay Pod termination for graceful shutdown.

## Lifecycle

- Latest feature date: 2025-09-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- confidential
- credential
- iam
- key
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
