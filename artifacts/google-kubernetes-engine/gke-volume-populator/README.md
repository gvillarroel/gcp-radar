# GKE Volume Populator

Product: Google Kubernetes Engine
Feature slug: `gke-volume-populator`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Volume Populator automates data transfer from a Cloud Storage bucket to a PersistentVolumeClaim backed by Parallelstore during provisioning.

## Lifecycle

- Latest feature date: 2024-11-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- iam
- identity
- key
- permission
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke)
