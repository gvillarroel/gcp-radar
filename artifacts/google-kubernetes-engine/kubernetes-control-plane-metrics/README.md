# Kubernetes control plane metrics

Product: Google Kubernetes Engine
Feature slug: `kubernetes-control-plane-metrics`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Exports Kubernetes control plane metrics from GKE Autopilot clusters to Cloud Monitoring; GKE can export Kubernetes control plane metrics from the API server, scheduler, and controller manager to Cloud Monitoring.

## Lifecycle

- Latest feature date: 2023-07-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- credential
- encrypt
- key
- kms
- logging
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
