# Multiple GPU Pods per node in GKE Autopilot

Product: Google Kubernetes Engine
Feature slug: `multiple-gpu-pods-per-node-in-gke-autopilot`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Autopilot can schedule multiple GPU Pods on a single node when using the Accelerator compute class.

## Lifecycle

- Latest feature date: 2024-04-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
