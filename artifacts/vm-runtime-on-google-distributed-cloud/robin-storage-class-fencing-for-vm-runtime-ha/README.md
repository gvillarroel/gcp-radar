# Robin storage class fencing for VM Runtime HA

Product: VM Runtime on Google Distributed Cloud
Feature slug: `robin-storage-class-fencing-for-vm-runtime-ha`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VM Runtime now triggers Robin storage fencing during HA failover to block access from failed nodes, enabling HA operation with Robin-backed block storage.

## Lifecycle

- Latest feature date: 2023-04-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- credential
- policy
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)
