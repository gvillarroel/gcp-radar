# CMEK for boot disks

Product: Google Kubernetes Engine
Feature slug: `cmek-for-boot-disks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed encryption keys can encrypt GKE Autopilot node boot disks.

## Lifecycle

- Latest feature date: 2021-10-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys)
