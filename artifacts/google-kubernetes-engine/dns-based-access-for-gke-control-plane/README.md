# DNS-based access for GKE control plane

Product: Google Kubernetes Engine
Feature slug: `dns-based-access-for-gke-control-plane`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Clusters get a unique DNS name or fully qualified domain name for control-plane access governed by IAM policies instead of bastion hosts or proxy nodes.

## Lifecycle

- Latest feature date: 2024-11-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
