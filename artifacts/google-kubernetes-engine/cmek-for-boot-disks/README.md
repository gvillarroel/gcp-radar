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

- auth
- certificate
- confidential
- credential
- encrypt
- iam
- key
- kms
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys)
