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

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
