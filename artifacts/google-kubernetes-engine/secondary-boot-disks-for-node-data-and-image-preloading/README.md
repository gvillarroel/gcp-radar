# Secondary boot disks for node data and image preloading

Product: Google Kubernetes Engine
Feature slug: `secondary-boot-disks-for-node-data-and-image-preloading`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New GKE nodes can preload data or container images from secondary boot disks to speed workload startup and autoscaling.

## Lifecycle

- Latest feature date: 2024-07-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate
- confidential
- encrypt
- key
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
