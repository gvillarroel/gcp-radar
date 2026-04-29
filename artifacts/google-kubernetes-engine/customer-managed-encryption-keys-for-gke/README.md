# Customer-managed encryption keys for GKE

Product: Google Kubernetes Engine
Feature slug: `customer-managed-encryption-keys-for-gke`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed encryption keys for GKE encrypt node boot disks and attached persistent storage data keys.

## Lifecycle

- Latest feature date: 2020-07-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- confidential
- credential
- encrypt
- iam
- key
- kms
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
