# TPU slice node auto-provisioning

Product: Google Kubernetes Engine
Feature slug: `tpu-slice-node-auto-provisioning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can automatically provision TPU node pools and multi-host TPU accelerators for Standard clusters running version 1.28 and later.

## Lifecycle

- Latest feature date: 2023-09-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate
- key
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
