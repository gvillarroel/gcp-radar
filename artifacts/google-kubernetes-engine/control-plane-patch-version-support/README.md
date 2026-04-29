# Control plane patch version support

Product: Google Kubernetes Engine
Feature slug: `control-plane-patch-version-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can keep an existing control plane patch version available longer to support large-scale upgrade and downgrade operations.

## Lifecycle

- Latest feature date: 2026-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- credential
- encrypt
- key
- kms
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
